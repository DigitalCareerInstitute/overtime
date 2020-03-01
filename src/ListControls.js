
import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

export default function ListControls({changeMode, mode}){ return (
  <Tabs variant="fullWidth" value={mode} aria-label="select date range">
  {['Total','Day','Month','Year'].map( m =>
    <Tab key={m} onClick={ changeMode(m) } label={m} value={m}/>)}
  </Tabs>
)}
