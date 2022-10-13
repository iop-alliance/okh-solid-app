import React, { FunctionComponent } from "react";
import { Module } from '../ldo/okhProject.typings';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

interface ProjectListItemProps {
  module: Module;
}

const ProjectListItem: FunctionComponent<ProjectListItemProps> = ({ module }) => {
  return (
      <Card className='mb-3' key={module['@id']}>
        <Row className="no-gutters">
          <Col md={8} className='order-2 order-md-1'>
            <Card.Body>
              <Card.Title>{module.label}</Card.Title>
              <Card.Text>
                  {module.function}
              </Card.Text>
              <Link
                to={`/projects/${encodeURIComponent(module['@id'] || '')}`}
                className='btn btn-sm btn-primary'
                >
                View Project Details
              </Link>
            </Card.Body>
          </Col>
          <Col md={4} className='p-0 order-1 order-md-2'>
            { /* @ts-ignore */ }
            {module.hasImage && module.hasImage.length > 0 && <Card.Img src={module.hasImage?.[0].fileUrl?.['@id']} style={{ objectFit: "cover", height: "250px" }} />}
          </Col>
        </Row>
      </Card>
  )
}

export default ProjectListItem;
