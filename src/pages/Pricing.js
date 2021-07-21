import { Component } from 'react';
import { Image, Card, Button } from 'react-bootstrap'
import '../App.css';
import img_5 from '../images/5-project-based.jpg'
import img_6 from '../images/6-team-based.jpg'

class Pricing extends Component {
  render() {
    return <div>
      <div style={{ padding: "20px" }}>
        <h3> 
          In GedyGroup, We're dedicated to stay transparent         
        </h3>
        <h5>
          That's why we allow clients to to choose the pricing model that fits their needs best <br/>
          Pick a model and we'll advise you the best
        </h5>
      </div>
    <div  style={{display: "flex"}} className='pricing-page'>      
      <div style={{ width: '10%'}} ></div>
      <Card style={{ width: '40%', margin: "5px"  }}>      
      
      <Card.Img variant="top" src={img_6}/>
        <Card.Body>
        <Card.Title>
        <h4>Dedicated Team</h4>
      </Card.Title>
          <Card.Text>
          With an agile, innovative approach to product development. 
          <br/>
          we provide a team composed of back-and front-end developers, expert software engineers and automation testers.
          <br/>
          we aim to provide tailor-made technology that fits your needs.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{ width: '40%', margin: "5px"  }}>
     
          <Card.Img variant="top" src={img_5} />
        <Card.Body>
        <Card.Title>
          <h4>Project based</h4></Card.Title>
          <Card.Text>
          Got a project in mind? 
          <br/>
          We will happily help you design, architect and build it.
          <br/>
          We estimate the number of days required to build your features and we only charge of the actual days used, fully transparent.        
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ width: '10%' }} ></div>
    </div>

    </div>
  }
}
export default Pricing
