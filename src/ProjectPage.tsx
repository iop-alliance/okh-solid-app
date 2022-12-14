import React, { FunctionComponent, useState, useCallback } from 'react';
import { useAuth } from './businessLogic/authGlobalHook';
import { useNavigate, useParams } from 'react-router-dom';
import useAsyncEffect from 'use-async-effect';
import { ModuleFactory } from './ldo/okhProject.ldoFactory';
import { Module } from './ldo/okhProject.typings';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import { ContainerFactory } from './ldo/solid.ldoFactory';
import PartsList from './components/PartsList';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { FiCopy } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const ProjectDetails: FunctionComponent<{}> = () => {
  const { projectId } = useParams<"projectId">();
  const [project, setProject] = useState<Module>();
  const { session, fetch } = useAuth();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [readmeText, setReadmeText] = useState("")
  const [showReadme, setShowReadme] = useState(false)

  const handleCloseDeleteConfirm = () => setShowDeleteConfirm(false);
  const handleShowDeleteConfirm = () => setShowDeleteConfirm(true);

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Copy link to clipboard
    </Tooltip>
  );

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

      project = await ModuleFactory.parse(projectId, rawText, { baseIRI: projectId });

      if (project.hasReadme && project.hasReadme.length > 0) {
        const readmeUrl = new URL(project.hasReadme?.[0].fileUrl['@id'] as string);
        const readmeResponse = await fetch(readmeUrl);
        if (readmeResponse.status === 200) {
          setReadmeText(await readmeResponse.text())
        }
      }
    } else {
      // TODO: Handle Error
      throw new Error('Something happened');
    }
        
    setProject(project);
  }, [session, projectId]);

  if (!project) {
    return (
      <ReactLoading type="spin" color="#454545" className='mx-auto mt-5' height={100} width={100} />
    );
  }
  
  const maybeDisplayReadme = () => {
    if (project.hasReadme && project.hasReadme.length > 0) {
      return (
        <>
          <Accordion id="readme" className='border rounded'>
              <Accordion.Header onClick={() => setShowReadme(!showReadme)}>
                {showReadme ? "" : "Show Project Readme"}
              </Accordion.Header>
              <Accordion.Collapse eventKey="0" in={showReadme}>
                <Accordion.Body>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} children={readmeText} />
                </Accordion.Body>
              </Accordion.Collapse>
          </Accordion>
          <hr />
        </>
      )
    }
    return <>
      <p>This project's manifest doesn't include a Readme</p>
      <hr />
    </>
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
        </Col>
      </Row>
      <Row>          
        <Col>
          <h1>{ project.label }</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8} className='order-1 order-md-0'>
          <div className='mb-3'>
            <a href={projectId}>Link to share the manifest</a>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
              >
              { /* @ts-ignore */ }
              <CopyToClipboard text={projectId}>
                <span role="button">
                  {' '}<FiCopy size="1.25rem" />
                </span>
              </CopyToClipboard>
            </OverlayTrigger>
          </div>
          <div>
            <p>{ project.function }</p>
          </div>
          <div>
            <h4>Project metadata</h4>
            <ListGroup variant="flush">
              <ListGroupItem><strong>Version:</strong> {project.version}</ListGroupItem>
              <ListGroupItem><strong>Licensor:</strong> {project.licensor}</ListGroupItem>
              {project.spdxLicense && <ListGroupItem>
                <strong>License:</strong>{' '}
                <a href={project.spdxLicense['@id']} target="_blank" rel="noreferrer">{project.spdxLicense['@id']}</a>
              </ListGroupItem>}
              {project.repo && <ListGroupItem>
                <strong>Original repository:</strong>{' '}
                <a href={project.repo['@id']} target="_blank" rel="noreferrer">{project.repo['@id']}</a>
              </ListGroupItem>}
              {project.documentationLanguage && <ListGroupItem>
                <strong>Documentation Language:</strong> {project.documentationLanguage}
              </ListGroupItem>}
              {  project.technologyReadinessLevel && <ListGroupItem>
                <strong>Technology Readiness Level:</strong>{' '}
                <a href={project.technologyReadinessLevel['@id']} target="_blank" rel="noreferrer">{project.technologyReadinessLevel['@id']}</a>
              </ListGroupItem>}
            </ListGroup>
            <hr />
          </div>
          <div className='mt-3'>
            <h4>Readme</h4>
            { maybeDisplayReadme() }
          </div>
          <div className='mt-3'>
            <h4>Parts</h4>
            { maybeDisplayPartsList() }
          </div>
          <div className='mt-5'>
            <div className='red-border rounded p-3'>
              <h3>Danger Zone</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <div>Remove the project from your Pod</div>
                <Button variant="danger" className='btn-sm ms-5' onClick={handleShowDeleteConfirm}>Delete Project</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className='order-0 order-md-1'>
          {project.hasImage && project.hasImage.length > 0 && <Image src={project.hasImage?.[0].fileUrl?.['@id']} width="100%" className='mt-3 mt-md-0' />}
        </Col>
      </Row>

      <Modal show={showDeleteConfirm} onHide={handleCloseDeleteConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this project from your Pod?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseDeleteConfirm} className="me-auto">
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

