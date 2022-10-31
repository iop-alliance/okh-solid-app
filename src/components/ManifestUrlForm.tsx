import React, { FunctionComponent, useState, useCallback, FormEventHandler } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../businessLogic/authGlobalHook';
import Form from 'react-bootstrap/Form';
import saveManifestToPod from "../util/saveManifestToPod";
import corsFetch from "../util/corsFetch";
import PublicTooltip from './PublicTooltip';
import ReactLoading from 'react-loading';


interface ManifestUrlFormProps {
  onComplete: () => void;
}

const ManifestUrlForm: FunctionComponent<ManifestUrlFormProps> = ({ onComplete }) => {
  const [manifestUrl, setManifestUrl] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(false);
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
      setShowProgressBar(true);
      await saveManifestToPod(rawTurtle, session, fetch, isPublic);
      setShowProgressBar(false);
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
      <div className="d-flex">
          <Button variant="primary" type="submit" disabled={showProgressBar}>
            {showProgressBar ? 'Loading project…' : 'Add Project'}
          </Button>
          {showProgressBar && <ReactLoading
            height={38}
            width={38}
            type={"bars"}
            color={"#0d6efd"}
            className={"ms-2"}
          />
          }
        </div>
    </Form>
  )
}

export default ManifestUrlForm;
