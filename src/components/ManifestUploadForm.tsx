import React, { FunctionComponent, useState, useCallback, FormEventHandler } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../businessLogic/authGlobalHook';
import Form from 'react-bootstrap/Form';
import saveManifestToPod from '../util/saveManifestToPod';

interface ManifestUploadFormProps {
  onComplete: () => void;
}

const ManifestUploadForm: FunctionComponent<ManifestUploadFormProps> = ({ onComplete }) => {
  const [manifestFiles, setManifestFiles] = useState<FileList>();
  const { fetch, session } = useAuth();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
    if (!manifestFiles) return;
    await Promise.all(Array.from(manifestFiles).map(async (file) => {
      const rawTurtle = await file.text();
      try {
        await saveManifestToPod(rawTurtle, session, fetch)
        onComplete();
      } catch (err: unknown) {
        if ((err as Error).message) {
          alert((err as Error).message);
        } else {
          alert('There was a problem uploading this manifest');
        }
      }
    }));
  }, [manifestFiles, session, fetch]);

  return (
    <div className="mb-4">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formUrl">
          <Form.Label>Choose an OKH Manifest file:</Form.Label>
          <Form.Control 
              type="file"
              onChange={e =>
                // @ts-ignore
                setManifestFiles(e.target.files)
              }
              />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ManifestUploadForm;
