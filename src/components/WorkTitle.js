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
                                <Image className="img-fluid col-sm-10" src={scanQR} alt="logo"></Image>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h4 className='qr-body mt-10 display-10 text-left'>
                                <ul class="list-styled">
                                    <li>The guest scans the QR code on the table, chooses a dish or drink and pays for the order via the integratedorder site. When the order is delivered, the guest receives a QR voucher with which he or she can order and pay.</li>
                                    <br/><li>The guest orders the first round through an employee. When the order is delivered, the guest receives a QR voucher with which he or she can place an order.</li>
                                    <br/><li>The guest scans the QR code on the table, chooses a dish or drink and pays for the order via the integrated ordering site. To reorder, the guest scans the QR code on the table again and pays immediately.</li>
                                </ul>
                            </h4>
                        </Col>
                    </Row>
                    <h1 className='qr-sub-font '>
                        The possibilities of QR ordering:
                    </h1>
                    <Row>
                        <Col xs={6} sm={2}>
                            <Image className="img-fluid" src={phone1} alt="logo"></Image>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Image className="img-fluid" src={phone2}></Image>
                        </Col>
                        <Col xs={12} sm={8}>
                            <h4 className='qr-body mt-10 display-10 text-left'>
                                <ul class="list-styled">
                                    <li>The guest scans the QR code on the table, chooses a dish or drink and pays for the order via the integratedorder site. When the order is delivered, the guest receives a QR voucher with which he or she can order and pay.</li>
                                    <br/><li>The guest orders the first round through an employee. When the order is delivered, the guest receives a QR voucher with which he or she can place an order.</li>
                                    <br/><li>The guest scans the QR code on the table, chooses a dish or drink and pays for the order via the integrated ordering site. To reorder, the guest scans the QR code on the table again and pays immediately.</li>
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
