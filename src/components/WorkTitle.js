import React, {Component} from 'react';
import './Work.css'
import {Col, Container, Image, Row} from 'react-bootstrap'

import phone1 from '../images/phone1.png'
import phone2 from '../images/phone2.png'
import scanQR from '../images/scanQR.jpg'

class WorkTitle extends Component {
    render() {
        return <div>
            <div className='qr-title'>
                <h1 className='qr-main-font mt-2 display-2'>
                    Mobile ordering and <br/>
                    online payment via QR
                </h1>
            </div>
            <div>
            </div>
            <div>
                <Container>
                    <h1 className='qr-sub-font '>
                        How QR ordering Works?
                    </h1>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Image className="img-fluid col-sm-10" src={scanQR} alt="logo"/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h4 className='qr-body mt-10 display-10 text-left'>
                                <ul class="list-styled">
                                    <li>Scan the table QR code</li>
                                    <li>Select your order</li>
                                    <li>Pay</li>
                                    <li>Receive your order seamlessly</li>
                                </ul>
                            </h4>
                        </Col>
                    </Row>
                    <h1 className='qr-sub-font '>
                        Benefits of online ordering
                    </h1>
                    <Row>
                        <Col xs={6} sm={2}>
                            <Image className="img-fluid" src={phone1} alt="logo"/>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Image className="img-fluid" src={phone2}/>
                        </Col>
                        <Col xs={12} sm={8}>
                            <h4 className='qr-body mt-10 display-10 text-left'>
                                <ul className="list-styled">
                                    <li>Offer your waiters more time to serve your customers
                                    </li>
                                    <br/>
                                    <li>Process payments digitally cheaper than Cheaper than normal ordering.
                                    </li>
                                    <br/>
                                    <li>Digitize your menu and online presence
                                    </li>
                                </ul>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    }
}

export default WorkTitle
