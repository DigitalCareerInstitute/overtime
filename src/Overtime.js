
import React             from 'react';
import { Container }     from 'react-bootstrap';
import { SettingsModal } from './Settings'
import { CommentBar }    from './Comment'
import Counter           from './Counter'
import List              from './List'
import ListControls      from './ListControls'
import defaults          from './defaults'
import { recMatchesMode, loadStore, saveStore } from './lib'

export default class Overtime extends React.Component {
  constructor(props){
    super(props);
    this.state = loadStore(defaults);
    if ( this.state.counter.active ) this.activate();
  }
  componentDidUpdate(){ saveStore(this.state) }
  componentWillUnmount(){
    this.commitCounterState(this.state);
    clearInterval(this.timer);
  }
  commitCounterState = (counter)=> this.setState({counter});
  push = (rec)=>  this.setState({list:[rec].concat(this.state.list)});
  delete = delId => e => { this.setState({
    list:[...(this.state.list.filter( (_,id)=> id !== delId ))]
  })}
  changeWeeklyHours = e => this.setState(
    {weeklyHours:parseFloat(e.target.value)}
  )
  changeMode = mode => e => this.setState({mode});
  changeUser = e => this.setState({user:e.target.value});
  changeComment = (id) => e => {
    const { list } = this.state;
    list[id][2] = e.target.value;
    this.setState({list});
  }
  toggle = e => this.setState(
    this.state.active ? this.deactivate() : this.activate()
  )
  activate = e => {
    this.timer = setInterval(t => {
      this.forceUpdate();
    },1000);
    return { active:true, start:Date.now() };
  }
  deactivate = e => {
    clearInterval(this.timer);
    const diff = Date.now() - this.state.start;
    this.push([Date.now(),diff,this.state.comment])
    return { active:false, start:null, comment:'' };
  }
  change = e => this.setState({comment:e.target.value});
  addPreset = e => this.setState({ preset: [this.state.comment].concat(this.state.preset) })
  delPreset = e => this.setState({ delPreset: ! this.state.delPreset })
  setPreset = key => e =>
    ! this.state.delPreset
    ? this.setState({ comment: key })
    : this.setState({
      delPreset:false,
      preset:this.state.preset.filter( v => v !== key )
  })
  render(){
    const {
      showSettings, mode, list, start, active, preset, user, weeklyHours, comment
    } = this.state;
    const total = this.state.list.reduce( (total,rec) => {
      return recMatchesMode(rec,mode) ? total += rec[1] : total;
    },0);
    if ( showSettings ) return (
    <SettingsModal
      show={showSettings} setShow={value => this.setState({showSettings:value})}
      user={user} changeUser={this.changeUser}
      weeklyHours={weeklyHours} changeWeeklyHours={this.changeWeeklyHours}
    /> );
    return (
      <Container>
        <Counter active={active} start={start} toggle={this.toggle}/>
        <CommentBar
          comment={comment} changeComment={this.change}
          preset={preset} addPreset={this.addPreset}
          setPreset={this.setPreset} delPreset={this.delPreset}
          doDeletePreset={this.state.delPreset}
        />
        <ListControls list={list} total={total}
          user={user} changeUser={this.changeUser}
          mode={mode} changeMode={this.changeMode}
          weeklyHours={weeklyHours} changeWeeklyHours={this.changeWeeklyHours}
          setState={this.setState.bind(this)} showSettings={this.showSettings}
        />
        <List list={list} mode={mode}
          changeComment={this.changeComment}
          deleteRecord={this.delete}
        />
      </Container>
    );
  }
}
