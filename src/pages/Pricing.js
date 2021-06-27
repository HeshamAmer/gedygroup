import { Component } from 'react';
import { Image } from 'react-bootstrap'
import '../App.css'; 
class Pricing extends Component {

  render() {
    return <div style={{ backgroundColor: "black" }}>
      <h1 className="blackh1">Coming soon</h1>
      <Image src="https://acegif.com/wp-content/uploads/loading-5.gif" fluid
      style={{
        objectFit:'cover',
      }}/>
    </div>
  }
}
export default Pricing
