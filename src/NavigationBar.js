import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from './images/logo.png'
class NavigationBar extends Component {
  render() {
    return <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <Image width="70px" height="auto" className="img-responsive" src={logo} alt="logo"></Image>
        </Link>
      </Navbar.Brand>
      <Nav.Link>
        <Link to="/">
          Home
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/Contact-Us">
          Contact Us
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/Pricing">
          Pricing
        </Link>
      </Nav.Link>
    </Navbar>;
  }
}
export default NavigationBar
