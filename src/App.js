
import React from 'react';
import './App.css';

import {
  Button,
  Container,
  FormControl,
  InputGroup
} from 'react-bootstrap';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
  faBusinessTime,
  faCheck,
  faTable,
  faSkullCrossbones,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

import {
  renderTime,
  renderDate,
  renderHours,
  loadStore,
  saveStore
} from './lib'

const defaults  = {
  list:[],
  preset:['Work','Prep','Meet'],
  weeklyHours: 32,
  user:'teacher',
  delPreset:false,
  counter: {
    active: false,
    start: null,
    comment: '' }
};

class Totals extends React.Component {
  constructor(props){
    super(props);
    this.state = loadStore(defaults);
    if ( this.state.counter.active ) this.activate();
  }
  commitCounterState = (counter) => {
    this.setState({counter});
  }
  push = (rec)=> {
    this.setState({list:[rec].concat(this.state.list)});
  }
  componentDidUpdate(){
    saveStore(this.state);
  }
  delete = delId => e => {
    this.setState({
      list:[...(this.state.list.filter( (_,id)=> id !== delId ))]
    });
  }
  changeWeeklyHours = e =>
    this.setState({weeklyHours:parseFloat(e.target.value)});
    changeUser = e =>
      this.setState({user:e.target.value});
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
  componentWillUnmount(){
    this.commitCounterState(this.state);
    clearInterval(this.timer);
  }
  change = e => {
    this.setState({comment:e.target.value});
    this.state.commitCounterState(this.state);
  }
  addPreset = e => this.setState({ preset: [this.state.comment].concat(this.state.preset) })
  delPreset = e => this.setState({ delPreset: ! this.state.delPreset })
  preset = key => e =>
    ! this.state.delPreset
    ? this.setState({ comment: key })
    : this.setState({
      delPreset:false,
      preset:this.state.preset.filter( v => v !== key )
    })
  render(){
    const total = this.state.list.reduce( (total,rec) => {
      return total += rec[1];
    },0);
    const { list, start, active, preset, user, weeklyHours } = this.state;
    const diff = new Date( Date.now() - start );
    const csv = `data:text/csv;base64,${btoa(
      list.reduce((p,c) => {
        return p += `${renderDate(c[0])},${renderHours(c[1])},${c[2]}\n`;
      },'')
    )}`
    return (
      <Container>
        <InputGroup>
          <Settings
            user={user}
            changeUser={this.changeUser}
            weeklyHours={weeklyHours}
            changeWeeklyHours={this.changeWeeklyHours}
          />
        </InputGroup>
        <Button onClick={this.toggle} className={ active ? 'trig active' : 'trig' }>
          { this.state.active ? 'Stop' : 'Start' }
          <br/>
          { this.state.start ? renderTime(diff) : null }
        </Button>
        <InputGroup>
          <FormControl
            placeholder="Comment"
            onChange={this.change}
            value={this.state.comment}
          />
          <InputGroup.Append>
            <Button onClick={this.addPreset}>
              <FontAwesomeIcon icon={faPlus}/>
            </Button>
            { preset.map( preset =>
              <Button key={preset} onClick={this.preset(preset)}>{preset}</Button>
            )}
            <Button
              variant={this.state.delPreset ? 'danger' : 'warning' }
              onClick={this.delPreset}
            >
              <FontAwesomeIcon
                icon={faSkullCrossbones}
              />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Total:</td>
              <td>{renderTime(new Date(total))}</td>
              <td colSpan={2}>
                <InputGroup className="pull-right">
                  <InputGroup.Prepend>
                    <a className="btn btn-primary" download={`${user}.csv`} href={csv}>
                      <FontAwesomeIcon icon={faTable}/>
                    </a>
                    <Button>Day</Button>
                    <Button>Month</Button>
                    <Button>Year</Button>
                    <Button>Total</Button>
                  </InputGroup.Prepend>
                  <InputGroup.Append>
                    <Button variant="danger">
                      <FontAwesomeIcon icon={faSkullCrossbones}/>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </td>
            </tr>
            { list.map( (row,id) => {
              const [date,time,comment] = row;
              return <tr key={id}>
                <td>
                  {(new Date(date).toLocaleDateString('de-DE'))}
                  &nbsp;
                  {(new Date(date).toLocaleTimeString('de-DE'))}
                </td>
                <td>{renderTime(new Date(time))}</td>
                <Comment value={comment} changeComment={this.changeComment(id)}/>
                <td width="1">
                  <Button variant="danger" onClick={this.delete(id)}>
                    <FontAwesomeIcon icon={faSkullCrossbones}/>
                  </Button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </Container>
    );
  }
}

function Comment({value,changeComment}){
  const [edit,setEdit] = React.useState(false)
  return edit
    ? <td width="99999999">
        <InputGroup>
          <FormControl value={value} onChange={changeComment}/>
          <InputGroup.Append>
            <Button onClick={e => setEdit(false)}>
              <FontAwesomeIcon icon={faCheck}/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </td>
    : <td width="99999999" onClick={e => setEdit(true)}>{value}</td>
}

function Settings(props){
  const [show,setShow] = React.useState(false);
  if (!show) return (
    <Button
      onClick={e => setShow(!show)}
      title="user / weeklyHours"
    >
      <FontAwesomeIcon icon={faBusinessTime}/> {props.user} / {props.weeklyHours} hrs
    </Button>
  )
  return (
    <>
      <InputGroup.Prepend>
        <Button onClick={e => setShow(!show)}>
          <FontAwesomeIcon icon={faBusinessTime}/>
        </Button>
      </InputGroup.Prepend>
      <FormControl
        name="user"
        value={props.user}
        onChange={props.changeUser}
      />
      <FormControl
        name="weeklyHours"
        value={props.weeklyHours}
        onChange={props.changeWeeklyHours}
      />
    </>
)};

function App() {
  return (
    <div className="App">
      <Totals/>
    </div>
  );
}

export default App;
