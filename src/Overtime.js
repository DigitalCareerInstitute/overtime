
import React              from 'react';
import SettingsModal      from './Settings'
import CommentBar         from './CommentBar'
import List               from './List'
import ListControls       from './ListControls'
import MainControls       from './MainControls'
import {
  recMatchesMode,
  recIsntBreak
} from './lib'

import { connect }        from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

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
    const {showSettings,mode,list,countBreaks,countShortBreaks} = this.props;

    const total = list
    .filter( rec => recIsntBreak(rec,countBreaks,countShortBreaks) )
    .filter( rec => recMatchesMode(rec,mode) )
    .reduce( (total,rec) => {
      return recMatchesMode(rec,mode) ? total += rec[1] : total;
    },0);

    if ( showSettings ) return <SettingsModal/>;

    return ( <>
      <MainControls total={total}/>
      <CommentBar/>
      <ListControls/>
      <List/>
    </> );
  }
});
