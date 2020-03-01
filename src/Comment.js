
import React from 'react';

import {
  Button,
  FormControl,
  InputGroup
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
  faCheck,
  faPlus,
  faSkullCrossbones
} from '@fortawesome/free-solid-svg-icons'

import { IconButton } from './Gui'

function Comment({value,changeComment}){
  const [edit,setEdit] = React.useState(false)
  return edit
    ? <td width="99999999">
        <InputGroup>
          <FormControl value={value} onChange={changeComment}/>
          <InputGroup.Append>
            <Button onClick={e => setEdit(false)}>
              <FontAwesomeIcon icon={faCheck}/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </td>
    : <td width="99999999" onClick={e => setEdit(true)}>{value}</td>
}

export function CommentBar({
  preset, comment, changeComment, setPreset, addPreset, delPreset, doDeletePreset
}){ return (
  <InputGroup>
    <FormControl
      placeholder="Comment"
      onChange={changeComment}
      value={comment}
    />
    <InputGroup.Append>
      <IconButton onClick={addPreset} icon={faPlus}/>
      { preset.map( preset =>
        <Button key={preset} onClick={setPreset(preset)}>{preset}</Button>
      )}
      <IconButton
        variant={doDeletePreset ? 'danger' : 'warning' }
        onClick={delPreset}
        icon={faSkullCrossbones}
      />
    </InputGroup.Append>
  </InputGroup>
)}

export default Comment;
