
import React             from 'react';
import { Container }     from 'react-bootstrap';
import { SettingsModal } from './Settings'
import { CommentBar }    from './Comment'
import Counter           from './Counter'
import List              from './List'
import ListControls      from './ListControls'
import MainControls      from './MainControls'
import defaults          from './defaults'
import { recMatchesMode, loadStore, saveStore } from './lib'

export default class Overtime extends React.Component {
  constructor(props){
    super(props);
    this.state = loadStore(defaults);
    if ( this.state.active ) this.setTimer()
  }
  componentDidUpdate(){
    saveStore(this.state)
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
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
  swapComment = e => {
    if ( ! this.state.active ) return;
    this.deactivate();
    this.setState(this.activate());
  }
  toggle = e => this.setState(
    this.state.active ? this.deactivate() : this.activate()
  )
  setTimer = e => this.timer = setInterval(t => { this.forceUpdate() },1000);
  activate = e => {
    this.setTimer()
    return { active:true, start: Date.now() };
  }
  deactivate = e => {
    clearInterval(this.timer);
    const diff = Date.now() - this.state.start;
    this.push([Date.now(),diff,this.state.comment])
    return { active:false, start:Date.now(), comment:'' };
  }
  change = e => this.setState({comment:e.target.value});
  addPreset = value => this.setState({ preset: [value].concat(this.state.preset) })
  delPreset = e => this.setState({ delPreset: ! this.state.delPreset })
  delPresetId = id => e => {
    console.log(id);
    this.setState({
      delPreset:false, preset: this.state.preset.filter( (_,i) => i !== id )
    })}
  setMailToAddress = e => this.setState({mailToAddress:e.target.value})
  setPreset = key => e =>
    ! this.state.delPreset
    ? this.setState({ comment: key })
    : this.delPresetId(this.state.preset.indexOf(key))(e)
  render(){
    const {
      showSettings, mode, list, start, active, preset, user,
      weeklyHours, comment, mailToAddress
    } = this.state;
    const total = list.reduce( (total,rec) => {
      return recMatchesMode(rec,mode) ? total += rec[1] : total;
    },0);
    if ( showSettings ) return (
    <SettingsModal
      show={showSettings} setShow={value => this.setState({showSettings:value})}
      user={user} changeUser={this.changeUser}
      weeklyHours={weeklyHours} changeWeeklyHours={this.changeWeeklyHours}
      preset={preset} addPreset={this.addPreset}
      delPreset={this.delPreset} delPresetId={this.delPresetId}
      mailToAddress={mailToAddress} setMailToAddress={this.setMailToAddress}
    /> );
    return (
      <Container>
        <MainControls list={list} total={total}
          user={user} changeUser={this.changeUser}
          mode={mode} changeMode={this.changeMode}
          weeklyHours={weeklyHours} changeWeeklyHours={this.changeWeeklyHours}
          setState={this.setState.bind(this)} showSettings={this.showSettings}
          mailToAddress={mailToAddress}
        />
        <Counter active={active} start={start} toggle={this.toggle}/>
        <CommentBar active={active} swapComment={this.swapComment}
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
