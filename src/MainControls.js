
import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles
} from '@material-ui/core';

import { renderTotal, renderDate, renderTime, renderHours, recMatchesMode, downloadName } from './lib'

import Menu              from '@material-ui/icons/Menu';
import CoudDownload      from '@material-ui/icons/CloudDownload';
import Mail              from '@material-ui/icons/Mail';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import HighlightOff      from '@material-ui/icons/HighlightOff';

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

  const csv = React.useMemo( function(){
    return `data:text/csv;base64,${btoa(
        list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
          return p += `${renderDate(c[0])},${renderHours(c[1])},${c[2]}\n`;
        },'')
      )}`
  },[mode,list]);

  const mailto = React.useMemo( function(){
    return (
      `mailto:?to=${mailToAddress}` +
      `&subject=${encodeURIComponent(`Overtime ${user}`)}` +
      `&body=${encodeURIComponent(
        "Hi,\n" +
        "this is my overtime report as tab separated values,\n" +
        "you can copy paste them directly into excel or google docs,\n\n" +
        "Best regards,\n" +
        `${user}\n\n` +
        "------------------------------------------------\n" +
        list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
          return p += `${renderDate(c[0])}\t${renderHours(c[1])}\t${c[2]}\n`;
        },'') +
        "------------------------------------------------\n"
      )}`
  )},[mode,list,user,mailToAddress]);

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
