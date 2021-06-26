import { Button } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from "react-router-dom";

class GetInContactButton extends Component {

  onGetInContactClick() {
    console.log('haer')
  }
  render() {
    return <div>
      <Link to="/Contact-Us">
        <Button variant="secondary" onClick={this.onGetInContactClick}>Get in contact now</Button>
      </Link>
    </div>
  }
}
export default GetInContactButton
