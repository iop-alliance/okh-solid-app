import React, { 
  FunctionComponent, 
  useState, 
  useCallback, 
  FormEventHandler
} from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../businessLogic/authGlobalHook';
import Form from 'react-bootstrap/Form';
import saveManifestToPod from '../util/saveManifestToPod';
import PublicTooltip from './PublicTooltip'
import ReactLoading from 'react-loading';

interface ManifestUploadFormProps {
  onComplete: () => void;
}

const ManifestUploadForm: FunctionComponent<ManifestUploadFormProps> = ({ onComplete }) => {
  const [manifestFiles, setManifestFiles] = useState<FileList>();
  const [isPublic, setIsPublic] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { fetch, session } = useAuth();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
    if (!manifestFiles) return;
    await Promise.all(Array.from(manifestFiles).map(async (file) => {
      const rawTurtle = await file.text();
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
    }));
  }, [manifestFiles, session, fetch, isPublic, onComplete, setShowProgressBar]);

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
    </div>
  )
}

export default ManifestUploadForm;
