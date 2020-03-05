
import React from 'react';

import {
  Button, TextField, makeStyles, FormControlLabel, Checkbox
} from '@material-ui/core';

import {
  purgeStore
} from './lib'

import { PresetList } from './Comment'
import Error          from '@material-ui/icons/Error';
import { connect }    from 'react-redux';

import {
  overtimeProps,
  overtimeActions
} from './redux'

const useStyles = makeStyles(theme => ({
  paper: {
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& > button': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default connect(
  overtimeProps,
  overtimeActions
)( function SettingsModal({
  toggleSettings,
  user, setUser,
  workHours, setWorkHours,
  mailToAddress, setMailToAddress,
  countBreaks, toggleCountBreaks,
  countShortBreaks, toggleShortBreaks,
}){
  const classes = useStyles();
  return (
    <>
      <form className={classes.paper} noValidate autoComplete="off">
        <TextField fullWidth variant="outlined" label="User" name="user" value={user} onChange={e=>setUser(e.target.value)}/>
        <TextField fullWidth variant="outlined" label="eMail Target" name="mailToAddress" value={mailToAddress} onChange={e=>setMailToAddress(e.target.value)}/>
        <TextField fullWidth variant="outlined" label="Work Hours" name="workHours" value={workHours} onChange={e=>setWorkHours(e.target.value)}/>
        <FormControlLabel
           control={
            <Checkbox
             checked={countBreaks}
             onChange={toggleCountBreaks}
             value="countBreaks"
            />}
           label="Count Breaks"
         />
         <FormControlLabel
           control={
            <Checkbox
             checked={countShortBreaks}
             onChange={toggleShortBreaks}
             value="countShortBreaks"
            />}
           label="Count Breaks Under 15 Minutes"
         />
        <PresetList/>
        <hr/>
        <Button color="secondary" variant="contained" onClick={purgeStore}>
          <Error/> Delete Everything <Error/>
        </Button>
      </form>
    </>
)});
