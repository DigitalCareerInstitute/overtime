
import React         from 'react';
import { Tab, Tabs, makeStyles } from '@material-ui/core';
import { connect }   from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: '4em',
    background: theme.palette.background.default,
    borderTop: `solid 1px ${theme.palette.divider}`,
    left: '5px',
    right: '5px',
    maxHeight:'3em'
 },
}));


export default connect(
  overtimeProps,
  overtimeActions
)( function ListControls({ setMode, mode }){
  const classes = useStyles();
  return (
  <Tabs className={classes.root} variant="fullWidth" value={mode} aria-label="select date range">
  {['Total','Day','Month','Year'].map( m =>
    <Tab key={m} onClick={ e => setMode(m) } label={m} value={m}/>)}
  </Tabs>
)});
