import React, { FunctionComponent, useState, useCallback } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Plus } from 'react-bootstrap-icons';
import { useAuth } from './businessLogic/authGlobalHook';
import useAsyncEffect from 'use-async-effect';
import { ContainerFactory } from "./ldo/solid.ldoFactory";
import { ModuleFactory } from './ldo/okhProject.ldoFactory';
import { Module } from './ldo/okhProject.typings';
import LoginSolid from './components/LoginSolid';
// import ProjectCard from './components/ProjectCard';
import ProjectListItem from './components/ProjectListItem';
import ReactLoading from 'react-loading';
import AddManifestForms from './components/AddManifestForms';

const Dashboard:FunctionComponent<{}> = () => {

  const { session, fetch } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false)
  const [projectsLoaded, setProjectsLoaded] = useState(false)
  const [modules, setModules] = useState<Module[]>([]);

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);

  const fetchModules = useCallback(async () => {

    if (!session.isLoggedIn) { return }
      // Get path to the root container
    const profileUrl = new URL(session.webId as string);
    const applicationRoot = `${profileUrl.origin}/okh/`;
    const applicationRootResponseTurtle = await (await fetch(applicationRoot)).text();
    const container = await ContainerFactory.parse(applicationRoot, applicationRootResponseTurtle, { baseIRI: applicationRoot });

    const modules: Module[] = [];
    if (container.contains) {
      await Promise.all(container.contains.map(async (resource): Promise<void> => {
          const resourceUrl = `${resource['@id']}index.ttl`;
          const moduleResponse = await(await fetch(resourceUrl)).text();
          const module = await ModuleFactory.parse(resourceUrl, moduleResponse, { baseIRI: resourceUrl });
          modules.push(module)
      }));
    }
    setModules(modules);
    setProjectsLoaded(true);
  }, [session, fetch]);

  useAsyncEffect(async () => {
    await fetchModules();
  }, [session])



  if (!session.isLoggedIn) {
    return (<LoginSolid />)
  }

  return (
    <>
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible show={showAlert}>
        Successfully added project!
      </Alert>
      <Row>
        <Col className='d-flex mb-3'>
          <h1 className='me-auto'>Projects</h1>
          <Button variant="outline-success" onClick={handleShowForm}>
            <Plus />Add Project
          </Button>
        </Col>
      </Row>

      <Modal show={showForm} onHide={handleCloseForm} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Project using OKH-LD Manifest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddManifestForms 
              setProjectsLoaded={setProjectsLoaded}
              setShowForm={setShowForm} 
              setShowAlert={setShowAlert}
              setModules={setModules}
              fetchModules={fetchModules}
            />
        </Modal.Body>
      </Modal>
      {/* <Row xs={1} md={2} lg={3} className='g-3'> */}
      <Row>
        {!modules.length &&
          <p>You don't have any projects in your Pod!
            <Button variant="outline-primary" onClick={handleShowForm}
              style={{ border: "none", verticalAlign: "baseline", textDecoration: "underline" }} 
              className='px-1 py-0'
              >
              Add a project using an OKH-LD manifest
            </Button>
            to get started.</p>
        }
        {modules.length > 0 && modules.map((module) => {
          return (
            <ProjectListItem module={module} />
          )
        })}
        {
          !projectsLoaded && 
          <ReactLoading type="spin" color="#454545" className='mx-auto mt-5' 
            height={100} width={100} />
        }
     </Row>
    </>  
  )
};

export default Dashboard;
