import React, { Component } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { IoMdLogIn, IoMdPerson, IoMdLogOut, IoIosPaper } from "react-icons/io";

import { Link } from "react-router-dom";

class ProfileBar extends Component {
  render() {
    return (
      <Navbar bg="light" className="justify-content-end mr-3">
        {this.props.login ? (
          <NavDropdown title="Welcome" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
              <IoMdPerson className="mr-2" />
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <IoMdLogOut className="mr-2" />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
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
        )}
      </Navbar>
    );
  }
}

export default ProfileBar;
