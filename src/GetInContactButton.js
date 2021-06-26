import { Button } from 'react-bootstrap';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class GetInContactButton extends Component {

  onGetInContactClick() {
    console.log('haer')
  }
  render() {
    return <div>
      <Router>
      <Link to="/Contact-Us">
        <Button variant="secondary" onClick={this.onGetInContactClick}>Get in contact now</Button>
      </Link>
      </Router>
    </div>
  }
}
export default GetInContactButton
