import { v4 } from "uuid";
import { ModuleFactory } from "../ldo/okhProject.ldoFactory";
import { File } from "../ldo/okhProject.typings";
import { namedNode } from '@rdfjs/data-model';
import { Session } from "@inrupt/solid-client-authn-browser";
import { setAcl } from "./aclUtils";
import corsFetch from "./corsFetch";
import { ModuleShapeType } from "../ldo/okhProject.shapeTypes";
import isValid from "./isValid";
import { Module } from "../ldo/okhProject.typings";

export default async function saveManifestToPod (
  rawTurtle: string,
  session: Session['info'],
  fetch: any,
  isPublic: boolean,
) {
  const temp = await ModuleFactory.parse("", rawTurtle);
  const dataStore = temp.$dataset();
  const moduleSubjects = dataStore.match(
    null,
    namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    namedNode('https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Module')
  ).toArray().map((quad) => quad.subject);
  const module = await ModuleFactory.parse(moduleSubjects[0].value, rawTurtle);
  if (isValid<Module>(module, ModuleShapeType)) {
    const profileUrl = new URL(session.webId as string);
    const projectContainer = `${profileUrl.origin}/okh/${encodeURIComponent(module.label || 'someProject')}/`;
    const projectUrl = `${projectContainer}index.ttl`;
    
    // Rename the main project to that file URL
    module['@id'] = projectUrl;

    // Save each document to a pod
    // const filePromises: Promise<void>[] = [ 
    //   saveFilesToPod(
    //     module as unknown as Record<string, File[] | undefined>,
    //     moduleFileFields,
    //     projectContainer,
    //     fetch
    //   )
    // ];
    // if (module.hasComponent) {
    //   module.hasComponent.forEach((part) => {
    //     filePromises.push(saveFilesToPod(
    //       part  as unknown as Record<string, File[] | undefined>,
    //       partFileFields,
    //       projectContainer,
    //       fetch
    //     ));
    //   });
    // }
    // await Promise.all(filePromises);

    // Save the index
    const response = await fetch(projectUrl, {
      method: 'put',
      body: await module.$toTurtle(),
      headers: {
        "content-type": "text/turtle"
      }
    });
    if (response.status !== 201) {
      throw new Error('error saving manifest')
    }
    // Set the resource to public
    if (isPublic) {
      await setAcl(
        projectContainer,
        {
          "public": {
            read: true,
            write: false,
            append: false,
            control: false
          },
          [session.webId as string]: {
            read: true,
            write: true,
            append: true,
            control: true
          }
        },
        fetch,
      );
    }
  }
}

const moduleFileFields = [
  'hasReadme',
  'hasContributionGuide',
  'hasBoM',
  'hasManifestFile',
  'source',
  'export',
  'auxiliary',
  'hasUserManual',
  'hasManufacturingInstructions',
  'hasImage',
];

const partFileFields = [
  'hasManifestFile',
  'hasImage',
  'source', 
  'auxiliary',
  'export',
  'hasManufacturingInstructions'
];

export async function saveFilesToPod(
  object: Record<string, File[] | undefined>,
  fields: string[],
  projectContainer: string,
  fetch: any
) {
  await Promise.all(fields.map(async (field) => {
    const files = object[field];
    if (files) {
      await Promise.all(files.map(async (file: File): Promise<void> => {
        const fileUrl: string = file.fileUrl["@id"];
        const splitFileUrl = fileUrl.split('/');
        const fileName = splitFileUrl[splitFileUrl.length - 1];
        const splitFileName = fileName.split('.');
        const finalFileName = `${splitFileName.slice(0, -1).join('.')}-${v4()}.${splitFileName[splitFileName.length - 1]}`
        const podFileUrl = `${projectContainer}${finalFileName}`;
        const fileResponse = await corsFetch(fileUrl);
        if (fileResponse.status === 200) {
          const saveFileResponse = await fetch(podFileUrl, {
            method: 'put',
            body: fileResponse.body,
            headers: {
              slug: finalFileName
            },
            duplex: 'half'
          });
          if (saveFileResponse.status === 201) {
            console.log(`Successfully saved ${podFileUrl}`);
            file.fileUrl["@id"] = podFileUrl;
          }
        }
      }));
    }
  }))
}