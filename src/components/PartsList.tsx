import React, { FunctionComponent } from 'react';
import { Part } from '../ldo/okhProject.typings';
import Table from 'react-bootstrap/Table';
import ModulePart from './ModulePart';

interface PartsListProps {
  parts: Part[];
}

const PartsList: FunctionComponent<PartsListProps> = ({ parts }) => {  
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>File Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {parts.map((part) => <ModulePart part={part} />)}
      </tbody>
    </Table>
  )
}

export default PartsList;
