import React, { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { IoMdLogIn } from 'react-icons/io';
import { IoMdPerson } from 'react-icons/io';
import { IoMdLogOut } from 'react-icons/io';

class ProfileBar extends Component {
    render() {
        return (
            <Navbar bg="light" className="justify-content-end mr-3">
                <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><IoMdLogIn className="mr-2"/>  Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><IoMdPerson className="mr-2"/> Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><IoMdLogOut className="mr-2"/>Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )
    }
}

export default ProfileBar;
