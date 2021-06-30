import { Button } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from "react-router-dom";

class GetInContactButton extends Component {
  render() {
    return <div style={{padding:'10px'}}>
      <Link to="/contact-us">
        <Button variant="secondary">Get in contact now</Button>
      </Link>
    </div>
  }
}
export default GetInContactButton
