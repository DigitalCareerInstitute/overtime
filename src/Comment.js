
import React from 'react';

import InputAdornment       from '@material-ui/core/InputAdornment';
import IconButton           from '@material-ui/core/IconButton';
import TextField            from '@material-ui/core/TextField';
import Button               from '@material-ui/core/Button';
import AddCircleOutline     from '@material-ui/icons/AddCircleOutline';

import { connect }          from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

export const PresetList = connect(
  overtimeProps,
  overtimeActions
)( function({
  preset, addPreset, delPresetId
}){
  const [input,setInput] = React.useState('');
  return ( <>
    <TextField
      label="Add Preset"
      name="addComment"
      value={input}
      onChange={e => setInput(e.target.value)}
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment:<InputAdornment position="end">
          <IconButton
            aria-label="add preset"
            onClick={e => { addPreset(input); setInput('') } }
            edge="end"
          >
            <AddCircleOutline/>
          </IconButton>
        </InputAdornment>
      }}
    />
    { preset.map( (preset,id) =>
      <Button
        key={id} variant="contained" className="preset"
        color="secondary"
        onClick={e=>delPresetId(id)}
      >
        {preset}
      </Button>
    )}
</> )});
