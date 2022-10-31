import React, { FunctionComponent } from 'react';
import { Part } from '../ldo/okhProject.typings';
import { CloudArrowDown } from 'react-bootstrap-icons';

interface ModulePartProps {
  part: Part;
}

const ModulePart: FunctionComponent<ModulePartProps> = ({ part }) => {  
  return (
    <tr key={part['@id']}>
      <td>{part.label}</td>
        {part.source && part.source.length > 0 && part.source.map((source) => {
          const sourceFileUrl = source.fileUrl?.['@id']
          return (
            <>
              <td>{source.fileFormat}</td>
              <td>
                <a key={source['@id']} href={sourceFileUrl} 
                  target="_blank" rel="noreferrer">
                  <CloudArrowDown size={24} />
                </a>
              </td>
            </>
          )
        })}
    </tr>
  );
}

export default ModulePart;
