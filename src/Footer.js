import React, { Component } from 'react';
import { Card, Nav, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from './images/logo.png'
import linkedInLogo from './images/linkedin.png'
class Footer extends Component {
  render() {
    return <Card>
    <Card.Header>Quote</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.{' '}
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
  }
}
export default Footer
