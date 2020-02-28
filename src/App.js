
import React from 'react';
import './App.css';

import {
  Modal,
  Form,
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
  faDownload,
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
  mode:'Total',
  showSettings:false,
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
  changeMode = mode => e => this.setState({mode});
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
    const { showSettings, mode, list, start, active, preset, user, weeklyHours } = this.state;
    const diff = new Date( Date.now() - start );
    const csv = `data:text/csv;base64,${btoa(
      list.reduce((p,c) => {
        return p += `${renderDate(c[0])},${renderHours(c[1])},${c[2]}\n`;
      },'')
    )}`
    return (
      <Container>
        <SettingsModal
          show={showSettings}
          setShow={value => this.setState({showSettings:value})}
          user={user}
          changeUser={this.changeUser}
          weeklyHours={weeklyHours}
          changeWeeklyHours={this.changeWeeklyHours}
        />
        <InputGroup>
          <InputGroup.Prepend>
            <SettingsButton
              show={showSettings}
              setShow={value => this.setState({showSettings:value})}
              user={user}
              changeUser={this.changeUser}
              weeklyHours={weeklyHours}
              changeWeeklyHours={this.changeWeeklyHours}
            />
            { ['Total','Day','Month','Year'].map( m=>
            <Button
              variant={m === mode ? 'warning' : 'primary'}
              key={m}
              onClick={this.changeMode(m)}>
                {m}
            </Button> )}
            <span className="input-group-text">
              {renderTime(new Date(total))}
            </span>
          </InputGroup.Prepend>
          <InputGroup.Append>
            <a className="btn btn-primary" download={`${user}.csv`} href={csv}>
            <FontAwesomeIcon icon={faDownload}/>
            </a>
          </InputGroup.Append>
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

function SettingsButton(props){
  const {show,setShow} = props;
  return (
    <Button
      onClick={e => setShow(!show)}
      title="user / weeklyHours"
    >
      <FontAwesomeIcon icon={faBusinessTime}/> {props.user} / {props.weeklyHours} hrs
    </Button>
  )
};

function SettingsModal(props){
  const {show,setShow} = props;
  if (!show) return null;
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
        <Button variant="danger" className='pull-right'>
          <FontAwesomeIcon icon={faSkullCrossbones}/>
          &nbsp;Delete Everything&nbsp;
          <FontAwesomeIcon icon={faSkullCrossbones}/>
        </Button>

      </Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.Label>
            User Name
          </Form.Label>
          <FormControl
            name="user"
            value={props.user}
            onChange={props.changeUser}
          />
        </Form.Group>
          <Form.Group>
            <Form.Label>
              Weekly Hours
            </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <FormControl
                name="weeklyHours"
                value={props.weeklyHours}
                onChange={props.changeWeeklyHours}
              />
            </InputGroup.Prepend>
            <InputGroup.Append>
              <span className="input-group-text">hrs</span>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={e => setShow(!show)} variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
)};

function App() {
  return (
    <div className="App">
      <Totals/>
    </div>
  );
}

export default App;
