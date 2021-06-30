import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import linkedInLogo from '../images/linkedin.png'
import '../App.css'
class NavigationBar extends Component {
  render() {
    return <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <Image width="70dp" height="auto" className="img-responsive" src={logo} alt="logo"></Image>
        </Link>
      </Navbar.Brand>
      <Nav.Link>
        <Link to="/">
        <h5 className="linkText">Home</h5>
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/contact-us">
        <h5 className="linkText">Contact Us</h5>
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/pricing">
        <h5 className="linkText">Pricing</h5>          
        </Link>
      </Nav.Link>
      <Nav.Link>        
          <Image width="30dp" height="30dp" className="img-responsive" src={linkedInLogo} alt="linkedInLogo" onClick={()=>{window.open('https://linkedin.com/company/gedygroup')}}></Image>                
      </Nav.Link>
    </Navbar>;
  }
}
export default NavigationBar
