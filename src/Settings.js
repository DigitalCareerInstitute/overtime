
import React from 'react';

import {
  Button, TextField, Typography, AppBar,Toolbar, IconButton, makeStyles,
  FormControlLabel, Checkbox
} from '@material-ui/core';

import {
  purgeStore
} from './lib'

import { PresetList } from './Comment'
import Close          from '@material-ui/icons/Close';
import Error          from '@material-ui/icons/Error';
import { connect }    from 'react-redux';

import {
  overtimeProps,
  overtimeActions
} from './redux'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
            onClick={toggleSettings}>
            <Close/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Settings
          </Typography>
          <Button color="secondary" variant="contained" onClick={purgeStore}>
            <Error/> Delete Everything <Error/>
          </Button>
        </Toolbar>
      </AppBar>
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
      </form>
    </>
)});
