import React, {Component} from 'react';
import {Image, Nav, Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";
import logo from '../images/logo.png'
import githublogo from '../images/githubLogo.png'
import linkedInLogo from '../images/linkedin.png'
import '../App.css'

class NavigationBar extends Component {
    render() {
        return <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <Image width="70dp" height="auto" className="img-responsive" src={logo} alt="logo"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav>
                    <Nav.Link href="/">
                        <h5 className="linkText nav-item">Home</h5>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/pricing" style={{textDecoration: "none"}}>
                            <h5 className="linkText nav-item">Pricing</h5>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/work" style={{textDecoration: "none"}}>
                            <h5 className="linkText nav-item">How it works</h5>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contact-us" style={{textDecoration: "none"}}>
                            <h5 className="linkText nav-item">Contact Us</h5>
                        </Link>
                    </Nav.Link>
                </Nav>

                <Nav className="ml-auto">
                    <Nav.Link>
                        <Image title="LinkedIn" width="40dp" height="40dp" className="img-responsive" src={linkedInLogo}
                               alt="linkedInLogo" onClick={() => {
                            window.open('https://linkedin.com/company/gedygroup')
                        }}/>
                        <Image title="Github" width="40dp" height="40dp" className="img-responsive" src={githublogo}
                               alt="githubLogo" onClick={() => {
                            window.open('https://github.com/HeshamAmer/gedygroup')
                        }}/>

                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>;
    }
}

export default NavigationBar
