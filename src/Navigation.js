
import React from 'react';

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SwapHorizontalCircle from '@material-ui/icons/SwapHorizontalCircle';

import PlayCircleOutline    from '@material-ui/icons/PlayCircleOutline';
import HighlightOff         from '@material-ui/icons/HighlightOff';

import { connect }   from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

const useStyles = makeStyles({
  root: {
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    boxShadow:'black 0 0 5px',
    zIndex:1
  }
});

export default connect(
  overtimeProps,
  overtimeActions
)( function Navigation({toggle,active,swapComment}) {
  const [value, setValue] = React.useState('recents');
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation position="fixed" value={value} onChange={handleChange} className={classes.root}>
      <Link to='/settings'><BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} /></Link>
      <Link to='/'><BottomNavigationAction label="List" value="recents" icon={<AccessTimeIcon />} /></Link>
      {active
      ? <Link onClick={e=>swapComment()}><BottomNavigationAction label="swap" icon={<SwapHorizontalCircle color="primary"/>}/></Link>
      : <Link onClick={e=>{}}><BottomNavigationAction disabled label="swap" icon={<SwapHorizontalCircle color="disabled"/>}/></Link> }
      <Link onClick={toggle}><BottomNavigationAction label="toggle" icon={!active ? <PlayCircleOutline color="action"/> : <HighlightOff color="secondary"/>}/></Link>
    </BottomNavigation>
  );
});
