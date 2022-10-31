import { FunctionComponent, useCallback } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ManifestUploadForm from "./ManifestUploadForm";
import ManifestUrlForm from "./ManifestUrlForm";

interface AddManifestFormsProps {
  setProjectsLoaded: any;
  setShowForm: any;
  setShowAlert: any;
  setModules: any;
  fetchModules: any;
}

const AddManifestForms:FunctionComponent<AddManifestFormsProps> = (
   {setProjectsLoaded, setShowForm, setShowAlert, setModules, fetchModules}
  ) => {
  
  const onFormComplete = useCallback(() => {
    setShowForm(false);
    setShowAlert(true);
    fetchModules()
  }, [setShowForm, setShowAlert, fetchModules]);

  return (
    <>
      <p>
        To add a project to your Solid Pod, you need to either enter a link 
        to a valid OKH RDF manifest file, or upload one from your device.
      </p>
      <p>
        Please select the appropiate tab below to add the OKH RDF manifest file.
      </p>
      <Tabs defaultActiveKey="urlForm" className="mb-3">
        <Tab eventKey="urlForm" title="Add via URL" className="px-3">
          <ManifestUrlForm onComplete={onFormComplete} />
        </Tab>
        <Tab eventKey="uploadForm" title="Add via Upload" className="px-3">
          <ManifestUploadForm onComplete={onFormComplete} />
        </Tab>
      </Tabs>
    </>
  )
}

export default AddManifestForms;
