import React, { FunctionComponent, useState, useCallback } from 'react';
import { useAuth } from './businessLogic/authGlobalHook';
import { useNavigate, useParams } from 'react-router-dom';
import useAsyncEffect from 'use-async-effect';
import { ModuleFactory } from './ldo/okhProject.ldoFactory';
import { Module } from './ldo/okhProject.typings';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { ContainerFactory } from './ldo/solid.ldoFactory';
import PartsList from './components/PartsList';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const ProjectDetails: FunctionComponent<{}> = () => {
  const { projectId } = useParams<"projectId">();
  const [project, setProject] = useState<Module>();
  const { session, fetch } = useAuth();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleCloseDeleteConfirm = () => setShowDeleteConfirm(false);
  const handleShowDeleteConfirm = () => setShowDeleteConfirm(true);

  const deleteProject = useCallback(async () => {
    if (projectId) {
      // Get the container URL
      const containerUrlArr = projectId.split('/');
      containerUrlArr.pop();
      // Fetch the container
      const containerUrl = containerUrlArr.join('/') + '/'
      const projectRootTurtle = await (await fetch(containerUrl)).text();
      const container = await ContainerFactory.parse(containerUrl, projectRootTurtle, { baseIRI: containerUrl });
      // Delete everything in the container
      if (container.contains) {
        await Promise.all(container.contains?.map(async (resource) => {
          if (resource?.['@id']) {
            await fetch(resource['@id'], { method: 'delete' });
          }
        }));
      }
      // Delete Container
      await fetch(containerUrl, { method: 'delete' });
      navigate('/');    }
  }, [projectId, fetch, navigate])
  
  useAsyncEffect(async () => {
    if (!session.isLoggedIn || !projectId) { return };
    const projectUrl = new URL(projectId as string);
    const response = await fetch(projectUrl);

    let project: Module = {};
    if (response.status === 200) {
      const rawText = await response.text();
      console.log(rawText);
      
      project = await ModuleFactory.parse(projectId, rawText, { baseIRI: projectId });
    } else {
      // TODO: Handle Error
      throw new Error('Something happened');
    }
    // console.log(project.source);
    
    setProject(project);
  }, [session, projectId]);

  if (!project) {
    return (
      <ReactLoading type="spin" color="#454545" className='mx-auto mt-5' height={100} width={100} />
    );
  }

  const maybeDisplayPartsList = () => {
    if (project.hasComponent && project.hasComponent.length > 0) {
      return <PartsList parts={project.hasComponent} />
    }
    return <p>This project's manifest doesn't include any parts</p>
  }

  return (
    <div>
      <Row>
        <Col className='d-flex'>
          <Link to="/" className='me-auto mb-3'>
            <ArrowLeft /> Back to projects list
          </Link> 
          <Button variant="danger" className='btn-sm' onClick={handleShowDeleteConfirm}>Delete Project</Button>
        </Col>
      </Row>
      <Row>          
        <Col>
          <h1>{ project.label }</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <div>
            <p>{ project.function }</p>
          </div>
          <div>
            <h4>Project metadata</h4>
            <ListGroup variant="flush">
              <ListGroupItem><strong>Version:</strong> {project.version}</ListGroupItem>
              <ListGroupItem><strong>Licensor:</strong> {project.licensor}</ListGroupItem>
              <ListGroupItem>
                <strong>License:</strong>{' '}
                { /* @ts-ignore */}
                <a href={project.spdxLicense['@id']} target="_blank" rel="noreferrer">{project.spdxLicense['@id']}</a>
              </ListGroupItem>
              <ListGroupItem>
                <strong>Original repository:</strong>{' '}
                { /* @ts-ignore */}
                <a href={project.repo['@id']} target="_blank" rel="noreferrer">{project.repo['@id']}</a>
              </ListGroupItem>
            </ListGroup>
          </div>
          <div className='mt-3'>
            <h4>Parts</h4>
            { maybeDisplayPartsList() }
          </div>
        </Col>
        <Col md={4}>
          { /* @ts-ignore */ }
          {project.hasImage && project.hasImage.length > 0 && <Image src={project.hasImage?.[0].fileUrl?.['@id']} width="100%" />}

        </Col>
      </Row>

      <Modal show={showDeleteConfirm} onHide={handleCloseDeleteConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this project from your Pod?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirm} className="me-auto">
            I want to keep the project
          </Button>
          <Button variant="danger" onClick={deleteProject}>
            Delete the project!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectDetails;

