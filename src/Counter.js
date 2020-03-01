
import React from 'react';
import { Button } from 'react-bootstrap';
import { renderTime } from './lib'

export default function Counter({active,start,toggle}){
  const diff = new Date( Date.now() - start );
  return (
  <Button onClick={toggle} className={ active ? 'trig active' : 'trig' }>
    { active ? renderTime(diff) : 'Start' }
  </Button>
)}
