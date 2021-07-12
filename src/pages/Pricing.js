import { Component } from 'react';
import { Image, Card, Button } from 'react-bootstrap'
import '../App.css';
class Pricing extends Component {

  render() {
    return <div  style={{display: "flex"}} className='pricing-page'>      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Dedicated Team</Card.Title>
          <Card.Text>
          With an agile, innovative approach to product development. 
          <br/>
          we provide a team composed of back-and front-end developers, expert software engineers and automation testers.
          <br/>
          we aim to provide tailor-made technology that fits your needs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Project based</Card.Title>
          <Card.Text>
          Got a project in mind? 
          <br/>
          We will happily help you design, architect and build it.
          <br/>
          We estimate the number of days required to build your features and we only charge of the actual days used, fully transparent.        
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  }
}
export default Pricing
