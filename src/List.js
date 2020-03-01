
import React from 'react';

import {
  Button,
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
  faSkullCrossbones
} from '@fortawesome/free-solid-svg-icons'

import {
  recMatchesMode,
  renderTime
} from './lib'


import Comment from './Comment'

export default function({list,mode,deleteRecord,changeComment}){
  return (
  <table className="table table-striped">
    <tbody>
      { list.filter( rec => recMatchesMode(rec,mode) ).map( (row,id) => {
        const [date,time,comment] = row;
        return <tr key={id}>
          <td>
            {(new Date(date).toLocaleDateString('de-DE'))}
            &nbsp;
            {(new Date(date).toLocaleTimeString('de-DE'))}
          </td>
          <td>{renderTime(new Date(time))}</td>
          <Comment value={comment} changeComment={changeComment(id)}/>
          <td width="1">
            <Button variant="danger" onClick={deleteRecord(id)}>
              <FontAwesomeIcon icon={faSkullCrossbones}/>
            </Button>
          </td>
        </tr>;
      })}
    </tbody>
  </table>
)};
