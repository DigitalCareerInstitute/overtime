import React, { Component } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { IoMdLogIn, IoMdPerson, IoMdLogOut, IoIosPaper } from "react-icons/io";

import UserContext from '../userContext'

class ProfileBar extends Component {
  static contextType = UserContext;
  render() {
    console.log(this.context);
    return (
      <Navbar bg="light" className="justify-content-end mr-3">
        { this.context ? <LoggedIn/> : <NotLoggedIn/> }
      </Navbar>
    );
  }
}

class LoggedIn extends React.Component{
  static contextType = UserContext;
  render(){ return (
    <NavDropdown title={this.context.userName} id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.2">
        <IoMdPerson className="mr-2" />
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">
        <IoMdLogOut className="mr-2" />
        Logout
      </NavDropdown.Item>
    </NavDropdown> ); }}

function NotLoggedIn(props){
  return (
    <NavDropdown title="Login" id="basic-nav-dropdown">
      <NavDropdown.Item href="/login">
        <IoMdLogIn className="mr-2" />
        Login
      </NavDropdown.Item>
      <NavDropdown.Item href="/signup">
        <IoIosPaper className="mr-2" />
        Signup
      </NavDropdown.Item>
    </NavDropdown>
  );}

export default ProfileBar;
