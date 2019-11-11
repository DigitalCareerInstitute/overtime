import React, { Component } from "react";
import Logo from "../images/Logo.png";
import { Navbar, NavDropdown, Nav, Badge } from "react-bootstrap";

class Navibar extends Component {
  render() {
    const style1 = {
      color: "white"
    };
    return (
      <Navbar expand="lg" style={{ padding: 0, background: "#6D7FCC" }}>
        <Navbar.Brand
          href="#home"
          style={{ marginRight: "100px", marginLeft: "10px" }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "85px", height: "65px" }}
          ></img>{" "}
        </Navbar.Brand>
        <Navbar.Toggle style={style1} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={style1} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={style1} href="#about">
              About
            </Nav.Link>
            <Nav.Link style={style1} href="#Items">
              Items
            </Nav.Link>
            <Nav.Link style={style1} href="#profile">
              My Profile
            </Nav.Link>
            <Nav.Link style={style1} href="#news">
              News
            </Nav.Link>
            <Nav.Link style={style1} href="#contact">
              Contact
            </Nav.Link>

            {/* <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Conferences
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Meetups <Badge variant="secondary"> New</Badge>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Social Events
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navibar;
