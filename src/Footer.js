import React, { Component } from 'react';
import { Card, Nav, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from './images/logo.png'
import linkedInLogo from './images/linkedin.png'
class Footer extends Component {
  render() {
    return <div className="fixed-bottom">
      <Card>
        <Card.Header>Copyright © 2021 Gedygroup - All Rights Reserved.</Card.Header>        
      </Card>
    </div>
  }
}
export default Footer
