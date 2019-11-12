import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navibar from "./components/Navibar";
import ProfileBar from './components/ProfileBar';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

var Splash = ()=> { return <b>hi world</b>; }

var LandingPage = (props)=> {
  return (
      <div>
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/login"  component={Login}  />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
  )
}

var Home = ()=> { return null; }

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : {
        username: 'test',
        firstName: 'Michael',
        lastName: 'Test',
        birthDate : '12/12/2015'
      },
      login : false,
      page : "login"
    }
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
                <Row>
                  <Col md="10" sm="12">
                    <Navibar />
                    </Col>
                    <Col md="2" sm="12">
                      <ProfileBar login={this.state.login}/>
                    </Col>
              <Col>
                { this.state.login
                ?
                  <Row><Col><Home /></Col></Row>
                :
                  <Row><Col><LandingPage page={this.state.page} /></Col></Row>
                }
              </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

export default App
