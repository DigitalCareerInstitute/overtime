
import React         from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { connect }   from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

export default connect(
  overtimeProps,
  overtimeActions
)( function ListControls({ setMode, mode }){ return (
  <Tabs variant="fullWidth" value={mode} aria-label="select date range">
  {['Total','Day','Month','Year'].map( m =>
    <Tab key={m} onClick={ e => setMode(m) } label={m} value={m}/>)}
  </Tabs>
)});
