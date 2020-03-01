
import React from 'react';

import {
  Button
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

function IconButton({onClick,variant,key,icon}){
  return (
    <Button onClick={onClick} variant={variant} key={key}>
      <FontAwesomeIcon icon={icon}/>
    </Button>
  );
}

export {
  IconButton
};
