
import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import SwapHorizontalCircle from '@material-ui/icons/SwapHorizontalCircle';

import { makeStyles } from '@material-ui/core/styles';

export function PresetList({
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
            onClick={e => addPreset(input)}
            edge="end"
          >
            <AddCircleOutline/>
          </IconButton>
        </InputAdornment>
      }}
      labelWidth={70}
    />
    { preset.map( (preset,id) =>
      <Button
        key={id} variant="contained" className="preset"
        color="secondary"
        onClick={delPresetId(id)}
      >
        {preset}
      </Button>
    )}
</> )}

const useStyles = makeStyles(theme => ({
  input: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  paper: {
    display:'flex',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function CommentBar({
  active, comment, setComment, swapComment,
  preset, setPreset, addPreset, delPreset, doDeletePreset
}){
  const classes = useStyles();
  if(!active) return null;
  return (
    <Paper className={classes.paper}>
      <Autocomplete
        freeSolo
        className={classes.input}
        id="comment"
        options={preset}
        value={comment}
        onChange={(e,v)=> setComment(v)}
        renderInput={ params =>
        <TextField
          onChange={e => setComment(e.target.value)}
          {...params}
      />}/>
      <IconButton
        variant="contained"
        aria-label="add preset"
        onClick={e => addPreset(comment) }
        ><AddCircleOutline/>
      </IconButton>
      <IconButton
        variant="contained"
        aria-label="add preset"
        onClick={swapComment}
        ><SwapHorizontalCircle/>
      </IconButton>
    </Paper>
)}
