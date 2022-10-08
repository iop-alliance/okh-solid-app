import React, { FunctionComponent } from 'react';
import { Part } from '../ldo/okhProject.typings';
import ListGroup from 'react-bootstrap/ListGroup';
import ModulePart from './ModulePart';

interface PartsListProps {
  parts: Part[];
}

const PartsList: FunctionComponent<PartsListProps> = ({ parts }) => {  
  return (
    <ListGroup variant="flush">
      {parts.map((part) => <ModulePart part={part} />)}
    </ListGroup>
  )
}

export default PartsList;
