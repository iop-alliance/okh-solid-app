import React, { FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAuth } from './businessLogic/authGlobalHook';
import useAsyncEffect from 'use-async-effect';
import { ContainerFactory } from "./ldo/solid.ldoFactory";
import { ModuleFactory } from './ldo/okhProject.ldoFactory';
import { Module } from './ldo/okhProject.typings';

const Dashboard:FunctionComponent<{}> = () => {

  const { session, fetch } = useAuth();
  const [modules, setModules] = useState<Module[]>([]);

  useAsyncEffect(async () => {
    if (!session.isLoggedIn) {
        return;
    }
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
  }, [session])

  return (
    <Container>
      <h1>OKH Projects</h1>
      <Row xs={1} md={2} lg={3} className='g-3'>
        
        {modules.map((module) => {
          console.log('=========');
          // console.log(module.hasImage?.[0].fileUrl['@id']);
          return (
            <Col>
              <Card key={module['@id']}>
                  { /* @ts-ignore */ }
                  {module.hasImage && module.hasImage.length > 0 && <Card.Img variant="top" src={module.hasImage?.[0].fileUrl?.['@id']} />}
                  <Card.Body>
                  <Card.Title>{module.label}</Card.Title>
                  <Card.Text>
                      {module.function}
                  </Card.Text>
                  <Button variant="primary">View Project Details</Button>
                  </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
};

export default Dashboard;
