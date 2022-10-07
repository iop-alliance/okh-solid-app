import React, { FunctionComponent, useState, useCallback, FormEventHandler } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from './businessLogic/authGlobalHook';
import Form from 'react-bootstrap/Form';
import { ModuleFactory } from './ldo/okhProject.ldoFactory';
import { namedNode } from '@rdfjs/data-model';

const ManifestForm: FunctionComponent = () => {
  const [manifestUrl, setManifestUrl] = useState('');
  const { fetch } = useAuth();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
    // Perform fetch and validation
    const response = await fetch(manifestUrl);
    if (response.status !== 200) {
      alert('Problem Fetching');
    }
    const rawTurtle = await response.text();
    const temp = await ModuleFactory.parse(manifestUrl, rawTurtle, { baseIRI: manifestUrl });
    const dataStore = temp.$dataset();
    const manifestSubjects = dataStore.match(
      null,
      namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
      namedNode('https://github.com/OPEN-NEXT/OKH-LOSH/raw/master/OKH-LOSH.ttl#Module')
    ).toArray()
    console.log(manifestSubjects);
  }, [manifestUrl]);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formUrl">
        <Form.Label>Manifest URL</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter valid URL" 
            onChange={e =>
              setManifestUrl(e.target.value)
            }
            value={manifestUrl}
          />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ManifestForm;
