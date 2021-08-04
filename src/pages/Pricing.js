import { Component } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap'
import './Pricing.css';
import img_5 from '../images/5-project-based.jpg'
import img_6 from '../images/6-team-based.jpg'
import img_7 from '../images/7-free-lancer.jpg'

class Pricing extends Component {
  render() {
    return <div>
      <div style={{ paddingTop: "20px", marginBottom: "50px"}}>
        <h3> 
          Designed for Transparency
        </h3>
        <h5 className="about-us-paragraph">
          We allow clients to to choose the pricing model that fits their needs best. <br/>
          Pick a model and we'll advise you the best <br/>
          With transparent prices every step of the way.
        </h5>
      </div>
    <div  style={{display: "flex", margin: "20px"}} className='pricing-page'>      
      <div style={{ width: '10%'}} ></div>
      <Container>
        <Row>        
          <Col className='d-flex align-items-stretch'>
            <Card className="cardHover">      
            <Card.Img variant="top" src={img_7}/>
              <Card.Body>
              <Card.Title>
              <h4>Freelancer</h4>
            </Card.Title>
                <Card.Text>
                <p className='about-us-paragraph lato'> Need someone to join your operational team and help you meet your deadlines?

                <br/>
                Then meet one of our experts who integrates as part of your team<br/>                
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <p>Prices start from 225€/Day</p>
                </Card.Footer>
            </Card>
          </Col>
          <Col className='d-flex align-items-stretch'>
            <Card className="cardHover">      
            <Card.Img variant="top" src={img_6}/>
              <Card.Body>
              <Card.Title>
              <h4>Dedicated Team</h4>
            </Card.Title>
                <Card.Text>
                <p className='about-us-paragraph lato'> 
                Have a product that needs to be developed or maintained?
                <br/>
                With an agile, innovative approach to product development. 
                <br/>
                we provide a team composed of expert back and front-end software engineers, with automated tests and continuous deployments.
                <br/>                
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <p>Prices start from 200€/Day</p>
                </Card.Footer>
            </Card>
          </Col>
          <Col className='d-flex align-items-stretch'>
          <Card className="cardHover">              
                <Card.Img variant="top" src={img_5} />
              <Card.Body>
              <Card.Title>
                <h4>Project based</h4></Card.Title>
                <Card.Text>
                <p className='about-us-paragraph lato'>Got a project in mind? 
                <br/>
                We will happily help you design, architect and build it.
                <br/>
                we aim to provide tailor-made technology that fits your needs.
                <br/>
                We estimate the number of days required to build your features and we only charge of the actual days used.
                </p>
                </Card.Text>                
              </Card.Body>
              <Card.Footer>
                <p>Prices start from 175€/Day</p>
                </Card.Footer>
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
