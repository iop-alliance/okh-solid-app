import React, { FunctionComponent } from 'react';
import { Part } from '../ldo/okhProject.typings';
import ListGroup from 'react-bootstrap/ListGroup';
import { CloudArrowDown } from 'react-bootstrap-icons';

interface ModulePartProps {
  part: Part;
}

const ModulePart: FunctionComponent<ModulePartProps> = ({ part }) => {  
  return (
    <ListGroup.Item key={part['@id']}>
      <div className='d-flex'>
        <h5 className='me-auto'>{part.label}</h5>
        {part.source && part.source.length > 0 && part.source.map((source) => {
          { /* @ts-ignore */ }
          const sourceFileUrl = source.fileUrl?.['@id']
          return (
            <a key={source['@id']} href={sourceFileUrl} 
              target="_blank" rel="noreferrer" className='btn btn-outline-primary'>
              Download {source.fileFormat} File{' '} 
              <CloudArrowDown size={24} />
            </a>
          )
        })}
      </div>
    </ListGroup.Item>
  );
}

export default ModulePart;
