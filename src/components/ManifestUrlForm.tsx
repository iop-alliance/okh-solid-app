import React, { FunctionComponent, useState, useCallback, FormEventHandler } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../businessLogic/authGlobalHook';
import Form from 'react-bootstrap/Form';
import saveManifestToPod from "../util/saveManifestToPod";
import corsFetch from "../util/corsFetch";
import PublicTooltip from './PublicTooltip'

interface ManifestUrlFormProps {
  onComplete: () => void;
}

const ManifestUrlForm: FunctionComponent<ManifestUrlFormProps> = ({ onComplete }) => {
  const [manifestUrl, setManifestUrl] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const { fetch, session } = useAuth();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
    // Perform fetch and validation
    const response = await corsFetch(manifestUrl);
    if (response.status !== 200) {
      alert('Problem Fetching');
    }
    const rawTurtle = await response.text();
    try {
      await saveManifestToPod(rawTurtle, session, fetch, isPublic);
      onComplete();
    } catch (err: unknown) {
      if ((err as Error).message) {
        alert((err as Error).message);
      } else {
        alert('There was a problem uploading this manifest');
      }
    }
  }, [manifestUrl, fetch, session, isPublic, onComplete]);

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
      <div className="d-flex align-items-start">
        <Form.Check
          type="checkbox"
          checked={isPublic}
          label="Make the project public"
          className="mb-3 me-1"
          onChange={(e) => setIsPublic(!isPublic)}
          />
        <PublicTooltip />
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ManifestUrlForm;
