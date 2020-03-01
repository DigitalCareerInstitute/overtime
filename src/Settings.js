
import React from 'react';

import {
  Button, TextField, Typography,
  AppBar,Toolbar, IconButton, makeStyles
} from '@material-ui/core';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
  faBusinessTime,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons'

import {
  purgeStore
} from './lib'

import { PresetList } from './Comment'

import Close from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

function SettingsButton(props){
  const {show,setShow} = props;
  return (
    <Button
      onClick={e => setShow(!show)}
      title="user / weeklyHours"
    >
      <FontAwesomeIcon icon={faBusinessTime}/> {props.user} / {props.weeklyHours} hrs
    </Button>
  )
};

function SettingsModal({
  show, setShow, preset, addPreset, delPresetId, delPreset, user, changeUser,
  weeklyHours, changeWeeklyHours, mailToAddress, setMailToAddress, setState
}){
  const classes = useStyles();
  if (!show) return null;
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
            onClick={e => setState({showSettings:false}) }>
            <Close/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Settings
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            className='pull-right'
            onClick={purgeStore}
          >
            <FontAwesomeIcon icon={faSkullCrossbones}/>
            &nbsp;Delete Everything&nbsp;
            <FontAwesomeIcon icon={faSkullCrossbones}/>
          </Button>
        </Toolbar>
      </AppBar>
      <form className={classes.paper} noValidate autoComplete="off">
        <TextField fullWidth variant="outlined" label="User" name="user" value={user} onChange={changeUser}/>
        <TextField fullWidth variant="outlined" label="eMail Target" name="mailToAddress" value={mailToAddress} onChange={setMailToAddress}/>
        <TextField fullWidth variant="outlined" label="Weekly Hours" name="weeklyHours" value={weeklyHours} onChange={changeWeeklyHours}/>
        <PresetList
          preset={preset}
          addPreset={addPreset}
          delPresetId={delPresetId}
        />
      </form>
    </>
)};

export { SettingsButton, SettingsModal }
