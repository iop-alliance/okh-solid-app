import React, { FunctionComponent, useState, useCallback, FormEventHandler } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from './businessLogic/authGlobalHook';
import Form from 'react-bootstrap/Form';
import saveManifestToPod from "./util/saveManifestToPod";

// const CORS_HOST = 'https://cors-anywhere.herokuapp.com'
const CORS_HOST = 'https://iopa-cors-anywhere.fly.dev'

interface ManifestUrlFormProps {
  onComplete: () => void;
}

const ManifestUrlForm: FunctionComponent<ManifestUrlFormProps> = ({ onComplete }) => {
  const [manifestUrl, setManifestUrl] = useState('');
  const { fetch, session } = useAuth();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
    // Perform fetch and validation
    const response = await fetch(`${CORS_HOST}/${manifestUrl}`);
    if (response.status !== 200) {
      alert('Problem Fetching');
    }
    const rawTurtle = await response.text();
    try {
      await saveManifestToPod(rawTurtle, session, fetch);
      onComplete();
    } catch (err: unknown) {
      if ((err as Error).message) {
        alert((err as Error).message);
      } else {
        alert('There was a problem uploading this manifest');
      }
    }
  }, [manifestUrl, fetch, session]);

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

export default ManifestUrlForm;
