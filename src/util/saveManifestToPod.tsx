import { ModuleFactory } from "../ldo/okhProject.ldoFactory";
import { namedNode } from '@rdfjs/data-model';
import { Session } from "@inrupt/solid-client-authn-browser";

export default async function saveManifestToPod (rawTurtle: string, session: Session['info'], fetch: any) {

  const temp = await ModuleFactory.parse("", rawTurtle);
  const dataStore = temp.$dataset();
  const moduleSubjects = dataStore.match(
    null,
    namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    namedNode('https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Module')
    ).toArray().map((quad) => quad.subject);
    const module = await ModuleFactory.parse(moduleSubjects[0].value, rawTurtle);
    if (true /* await module.$isValid() */) {
      const profileUrl = new URL(session.webId as string);
      const projectUrl = `${profileUrl.origin}/okh/${encodeURIComponent(module.label || 'someProject')}/index.ttl`;
      
      // Rename the main project to that file URL
      module['@id'] = projectUrl;
      // Save the index
      const response = await fetch(projectUrl, {
        method: 'put',
        body: await module.$toTurtle(),
        headers: {
          "content-type": "text/turtle"
        }
      });
      if (response.status === 201) {
        return;
      } else {
        throw new Error('error saving manifest')
      }
    }
    
}