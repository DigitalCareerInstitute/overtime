
import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles
} from '@material-ui/core';

import { renderTotal, renderTime, downloadName } from './lib'

import Menu              from '@material-ui/icons/Menu';
import CoudDownload      from '@material-ui/icons/CloudDownload';
import Mail              from '@material-ui/icons/Mail';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import HighlightOff      from '@material-ui/icons/HighlightOff';

import { toMailURL, toCSV } from './export'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainControls({
  setState, changeUser, changeWeeklyHours, changeMode,
  showSettings, user, mode, weeklyHours, total, list,
  active, mailToAddress, toggle, start
}){

  const classes = useStyles();

  const args   = [ mode, list, user, mailToAddress ];
  const csv    = React.useMemo( ()=> toCSV(args),     args );
  const mailto = React.useMemo( ()=> toMailURL(args), args );
  // const csv    = React.useMemo( toCSV , [mode,list] );
  // const mailto = React.useMemo( toMailURL, [mode,list,user,mailToAddress] );

  return (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
        onClick={e => setState({showSettings:true}) }>
        <Menu/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        { active
        ? `${renderTime(start)} / ${renderTotal(total)} `
        : renderTotal(total) }
      </Typography>
      <IconButton className={classes.menuButton} color="inherit" aria-label="mail" onClick={toggle}>
        { !active ? <PlayCircleOutline/> : <HighlightOff/> }
      </IconButton>
      <IconButton className={classes.menuButton} href={mailto} color="inherit" aria-label="mail">
        <Mail/>
      </IconButton>
      <IconButton className={classes.menuButton} download={downloadName(user,mode)} href={csv} color="inherit" aria-label="csv">
        <CoudDownload/>
      </IconButton>
    </Toolbar>
  </AppBar>
)}
