
import React from 'react';

import {
  Button,
  Form,
  FormControl,
  InputGroup
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
  faCheck,
  faPlus,
  faSyncAlt,
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

export function PresetList({
  preset, addPreset, delPresetId
}){
  const [input,setInput] = React.useState('');
  return ( <>
    <Form.Group>
      <Form.Label>
        Presets
      </Form.Label>
      <InputGroup>
        <FormControl
          name="user"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <InputGroup.Append>
          <IconButton onClick={e => addPreset(input)} icon={faPlus}/>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
    { preset.map( (preset,id) =>
      <Button key={id} variant="danger" className="preset"
        onClick={delPresetId(id)}
      >
        {preset}
      </Button>
    )}
</> )}

export function CommentBar({
  active, comment, changeComment, swapComment,
  preset, setPreset, addPreset, delPreset, doDeletePreset
}){ return (
  <InputGroup>
    <FormControl
      placeholder="Comment"
      onChange={changeComment}
      value={comment}
    />
    <InputGroup.Append>
      { active ? <IconButton onClick={swapComment} icon={faSyncAlt}/> : null }
      <IconButton onClick={e => addPreset(comment)} icon={faPlus}/>
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
