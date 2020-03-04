
import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from '@material-ui/core';

import { renderTotal, renderTime } from './lib'

import Menu                 from '@material-ui/icons/Menu';
import PlayCircleOutline    from '@material-ui/icons/PlayCircleOutline';
import HighlightOff         from '@material-ui/icons/HighlightOff';
import Star                 from '@material-ui/icons/Star';
import StarHalf             from '@material-ui/icons/StarHalf';

import ExportButtons        from './export'

import { connect }          from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

const classes = theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1, },
});

export default withStyles(classes)(connect(
  overtimeProps,
  overtimeActions
)( class MainControls extends React.Component {
constructor(props){
  super(props);
  props.setTimerComponent(this);
}
render(){
  const {
    total, active, toggle, start, classes, toggleSettings, insertWorkday
  } = this.props;

  return (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
        onClick={ toggleSettings }>
        <Menu/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        { active
        ? `${renderTime(start)} / ${renderTotal(total)} `
        : renderTotal(total) }
      </Typography>
      <IconButton className={classes.menuButton} color="inherit" aria-label="mail" onClick={e=>toggle()}>
        { !active ? <PlayCircleOutline/> : <HighlightOff/> }
      </IconButton>
      <IconButton className={classes.menuButton} color="inherit" aria-label="workday" onClick={e=>insertWorkday()}>
        <Star/>
      </IconButton>
      <ExportButtons/>
    </Toolbar>
  </AppBar>
)}}));
