import { Component } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap'
import '../App.css';
import img_5 from '../images/5-project-based.jpg'
import img_6 from '../images/6-team-based.jpg'

class Pricing extends Component {
  render() {
    return <div>
      <div style={{ paddingTop: "20px" }}>
        <h3> 
          Designed for Transparency
        </h3>
        <h5 className="about-us-paragraph">
          That's why we allow clients to to choose the pricing model that fits their needs best <br/>
          Pick a model and we'll advise you the best <br/>
          With transparent prices every step of the way.
        </h5>
      </div>
    <div  style={{display: "flex", margin: "20px"}} className='pricing-page'>      
      <div style={{ width: '10%'}} ></div>
      <Container>
        <Row>
          <Col>
            <Card>      
            
            <Card.Img variant="top" src={img_6}/>
              <Card.Body>
              <Card.Title>
              <h4>Dedicated Team</h4>
            </Card.Title>
                <Card.Text>
                <p className='about-us-paragraph lato'> With an agile, innovative approach to product development. 
                <br/>
                we provide a team composed of back-and front-end developers, expert software engineers and automation testers.
                <br/>
                we aim to provide tailor-made technology that fits your needs.
                </p>
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card >
          
                <Card.Img variant="top" src={img_5} />
              <Card.Body>
              <Card.Title>
                <h4>Project based</h4></Card.Title>
                <Card.Text>
                <p className='about-us-paragraph lato'>Got a project in mind? 
                <br/>
                We will happily help you design, architect and build it.
                <br/>
                We estimate the number of days required to build your features and we only charge of the actual days used, fully transparent.  
                </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div style={{ width: '10%' }} ></div>
    </div>

    </div>
  }
}
export default Pricing
