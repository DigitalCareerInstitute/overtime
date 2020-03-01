
import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { renderTime, renderDate, renderHours, recMatchesMode, downloadName } from './lib'
import { SettingsButton } from './Settings'

export default function ListControls({
  setState, changeUser, changeWeeklyHours, changeMode,
  showSettings, user, mode, weeklyHours, total, list
}){
  const csv = React.useMemo( function(){
    return `data:text/csv;base64,${btoa(
        list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
          return p += `${renderDate(c[0])},${renderHours(c[1])},${c[2]}\n`;
        },'')
      )}`
  },[mode,list]);
  return (
  <InputGroup className="list-controls">
    <InputGroup.Prepend>
      <SettingsButton
        show={showSettings}
        setShow={value => setState({showSettings:value})}
        user={user}
        changeUser={changeUser}
        weeklyHours={weeklyHours}
        changeWeeklyHours={changeWeeklyHours}
      />
      { ['Total','Day','Month','Year'].map( m=>
      <Button
        variant={m === mode ? 'warning' : 'primary'}
        key={m}
        onClick={changeMode(m)}>
          {m}
      </Button> )}
      <span className="input-group-text">
        {renderTime(new Date(total))}
      </span>
    </InputGroup.Prepend>
    <InputGroup.Append>
      <a className="btn btn-primary" download={downloadName(user,mode)} href={csv}>
      <FontAwesomeIcon icon={faDownload}/>
      </a>
    </InputGroup.Append>
  </InputGroup>
)}
