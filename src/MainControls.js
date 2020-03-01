

import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { renderDate, renderHours, recMatchesMode, downloadName } from './lib'
import { SettingsButton } from './Settings'

export default function ListControls({
  setState, changeUser, changeWeeklyHours, changeMode,
  showSettings, user, mode, weeklyHours, total, list,
  active, mailToAddress
}){
  const csv = React.useMemo( function(){
    return `data:text/csv;base64,${btoa(
        list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
          return p += `${renderDate(c[0])},${renderHours(c[1])},${c[2]}\n`;
        },'')
      )}`
  },[mode,list]);
  const mailto = React.useMemo( function(){
    return (
      `mailto:?to=${mailToAddress}` +
      `&subject=${encodeURIComponent(`Overtime ${user}`)}` +
      `&body=${encodeURIComponent(
        "Hi,\n" +
        "this is my overtime report as tab separated values,\n" +
        "you can copy paste them directly into excel or google docs,\n\n" +
        "Best regards,\n" +
        `${user}\n\n` +
        "------------------------------------------------\n" +
        list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
          return p += `${renderDate(c[0])}\t${renderHours(c[1])}\t${c[2]}\n`;
        },'') +
        "------------------------------------------------\n"
      )}`
  )},[mode,list,user,mailToAddress]);
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
    </InputGroup.Prepend>
    <InputGroup.Append>
      <a className="btn btn-primary" href={mailto}>
        <FontAwesomeIcon icon={faEnvelope}/>
      </a>
      <a className="btn btn-primary" download={downloadName(user,mode)} href={csv}>
        <FontAwesomeIcon icon={faDownload}/>
      </a>
    </InputGroup.Append>
  </InputGroup>
)}
