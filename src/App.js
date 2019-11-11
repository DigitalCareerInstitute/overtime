import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navibar from "./components/Navibar";
import ProfileBar from './components/ProfileBar';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

var Splash = ()=> { return null; }
var LandingPage = (props)=> { switch( props.page ){
                            case "login" : 
                              return <Home />
                          
                            case "signup" :
                              return <Signup />
                              
                            default :
                              return <Splash />

  } 
}


var Home = ()=> { return null; }





export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

      user : {
        username : '',
        password : ''
      },

      login : false,
      page : "splash"
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
                      <ProfileBar/>       
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




