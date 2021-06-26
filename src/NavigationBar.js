import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import logo from './images/logo.png'
class NavigationBar extends Component {
  render() {
    return <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">
      <img width="70px" height="auto" className="img-responsive" src={logo}  alt="logo" />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar>;
  }
}
export default NavigationBar
