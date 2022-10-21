import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const PublicTooltip = function (props: any) {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      <p className="p-2 text-start">
        Setting the project to public will allow you to share the project manifest and 
        files in your Pod with others.
      </p>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <span>
        <BsFillQuestionCircleFill />
      </span>
    </OverlayTrigger>
  )
}

export default PublicTooltip;
