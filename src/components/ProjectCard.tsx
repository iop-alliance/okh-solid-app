import React, { FunctionComponent } from "react";
import { Module } from '../ldo/okhProject.typings';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  module: Module;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ module }) => {
  return (
    <Col key={module['@id']}>
      <Card className='h-100'>
        { /* @ts-ignore */ }
        {module.hasImage && module.hasImage.length > 0 && <Card.Img variant="top" src={module.hasImage?.[0].fileUrl?.['@id']} />}
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
      </Card>
    </Col>
  )
}

export default ProjectCard;
