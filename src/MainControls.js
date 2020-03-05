
import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from '@material-ui/core';

import {
  renderTotal,
  renderTime
} from './lib'

import Star                 from '@material-ui/icons/Star';
import ExportButtons        from './export'
import { connect }          from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

import moment from 'moment'

const classes = theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1, fontWeight:'bold' },
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
    total, active, start, classes, insertWorkday
  } = this.props;

  return (
  <AppBar position="fixed" style={{backgroundColor: active ? 'red' : null }}>
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        { active
        ? `${moment(start).format('HH:mm')} ${renderTime(start)} / ${renderTotal(total)} `
        : renderTotal(total) }
      </Typography>
      <IconButton className={classes.menuButton} color="inherit" aria-label="workday" onClick={e=>insertWorkday()}>
        <Star/>
      </IconButton>
      <ExportButtons/>
    </Toolbar>
  </AppBar>
)}}));
