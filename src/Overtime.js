
import React              from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
}
from 'react-router-dom'

import SettingsModal      from './Settings'
import CommentBar         from './CommentBar'
import List               from './List'
import ListControls       from './ListControls'
import MainControls       from './MainControls'
import Navigation         from './Navigation'
import {
  recMatchesMode,
  recIsntBreak
} from './lib'

import { connect }        from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

const MainFrame = connect(
  overtimeProps,
  overtimeActions
)(function({location}){
  console.log(location);
  return (
  <div className="mainFrame" style={{
    position: 'fixed',
    top:'56px',
    bottom:location.pathname === '/'?'104px':'4em',
    left:'5px',
    right:'5px',
    overflow:'auto',
    boxShadow:'black 0 0 3px'
  }}>
    <Switch>
      <Route path="/settings" component={SettingsModal}/>
      <Route path="/tools" component={SettingsModal}/>
      <Route path="/">
        <CommentBar/>
        <List/>
        <ListControls/>
      </Route>
  </Switch>
  <Navigation/>
  </div>
 )
});

export default connect(
  overtimeProps,
  overtimeActions
)( class extends React.Component {
  constructor(props){
    super(props);
    // this.state = loadStore(defaults);
    // if ( this.state.active ) this.setTimer()
    console.log('init');
  }
  componentWillUnmount(){ this.props.clearTimer() }
  render(){
    const {mode,list,countBreaks,countShortBreaks} = this.props;
    const total = Math.max(0,list
    .filter( rec => recIsntBreak(rec,countBreaks,countShortBreaks) )
    .filter( rec => recMatchesMode(rec,mode) )
    .reduce( (total,rec) => {
      return recMatchesMode(rec,mode) ? total + rec[1] : total;
    },0));
    return ( <>
      <Router>
        <MainControls total={total}/>
        <Route path="/" component={MainFrame}/>
      </Router>
    </> );
  }
});
