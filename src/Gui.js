
import React from 'react';

import {
  Button
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

function IconButton({onClick,variant,key,icon,children,className}){
  return (
    <Button onClick={onClick} variant={variant} key={key} className={className}>
      <FontAwesomeIcon icon={icon}/>
      {children}
    </Button>
  );
}

export {
  IconButton
};
