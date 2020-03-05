
import React from 'react';

import IconButton           from '@material-ui/core/IconButton';
import TextField            from '@material-ui/core/TextField';
import Paper                from '@material-ui/core/Paper';
import Autocomplete         from '@material-ui/lab/Autocomplete';
import AddCircleOutline     from '@material-ui/icons/AddCircleOutline';
import { makeStyles }       from '@material-ui/core/styles';

import { connect }          from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

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

export default connect(
  overtimeProps,
  overtimeActions
)( function ({
  active, comment, setComment, swapComment,
  preset, setPreset, addPreset, delPreset, doDeletePreset
}){
  const classes = useStyles();
  if( !active ) return null;
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
      onClick={e => addPreset(comment)}
      ><AddCircleOutline/>
    </IconButton>
  </Paper>
)});
