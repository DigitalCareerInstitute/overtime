
import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { renderTime } from './lib'

export default function ListControls({
  setState, changeUser, changeWeeklyHours, changeMode,
  showSettings, user, mode, weeklyHours, total, list,
  active,
}){
  return (
  <InputGroup className="list-controls">
    <InputGroup.Prepend>
      <span className="input-group-text">
        {renderTime(new Date(total))}
      </span>
    </InputGroup.Prepend>
    <InputGroup.Append>
      { ['Total','Day','Month','Year'].map( m=>
      <Button
        variant={m === mode ? 'warning' : 'primary'}
        key={m}
        onClick={changeMode(m)}>
          {m}
      </Button> )}
    </InputGroup.Append>
  </InputGroup>
)}
