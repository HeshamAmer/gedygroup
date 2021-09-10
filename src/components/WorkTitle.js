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
                    {/* <h1 className='qr-sub-font '>
                        How does ordering via QR work?
                    </h1>
                    <Row>
                        <Col>
                            <div className="col md-auto">
                                <h4 className='qr-body text-left'>
                                <ul class="list-styled">
                                    <li>The guest scans the QR code on the table, chooses a dish or drink and pays for the order via the integratedorder site. When the order is delivered, the guest receives a QR voucher with which he or she can order and pay.</li>
                                    <br/><li>The guest orders the first round through an employee. When the order is delivered, the guest receives a QR voucher with which he or she can place an order.</li>
                                    <br/><li>The guest scans the QR code on the table, chooses a dish or drink and pays for the order via the integrated ordering site. To reorder, the guest scans the QR code on the table again and pays immediately.</li>
                                </ul>
                            </h4>
                            </div>
                        </Col>
                        <Col>
                            <div className="col md-auto">
                                <Image className="img-fluid col-sm-12" src={scanQR} alt="logo"></Image>
                            </div>
                        </Col>
                        
                    </Row> */}
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
                    {/* <Col>
                        <div className="col-sm-12 justify-content-center text-center">
                            <h1 className='qr-sub-font mt-1 display-1'>
                                How does ordering via QR work?
                            </h1>
                            <h2 className='qr-body mt-10 display-5'>
                            <p>Je gasten bepalen zelf hoe ze QR-bestellen willen gebruiken.</p>
                                <p>You put QR code signs on the table, guests scan the code with their smartphone and
                                automatically - with the table number already linked - to your order site.There
                                is no need to install an order app, navigate to a web version or log in.
                                Your guests choose their order and pay immediately.</p>You put QR code signs on the table, guests scan the code with their smartphone and
                                automatically - with the table number already linked - to your order site. <br/><br/>There
                                is no need to install an order app, navigate to a web version or log in.
                                Your guests choose their order and pay immediately.
                                <br/><br/>The order is automatically forwarded to the kitchen and/or bar. This can be
                                served or picked up at the pick-up desk.
                            </h2>
                        </div>
                        <div className="col-sm-12">
                            <Image className="img-fluid col-sm-5" src={scanQR} alt="logo"></Image>
                        </div>

                    </Col>

                    <Row>
                        <div className="col-sm-12 justify-content-center text-center">
                            <h2 className='qr-sub-font mt-2 display-5'>
                                Our Apps Features
                            </h2>
                            <Image className="img-fluid col-sm-5" src={phone1} alt="logo"></Image>
                            <Image className="img-fluid col-sm-5" src={phone2}></Image>
                        </div>
                    </Row> */}
                </Container>
            </div>

        </div>
    }
}

export default WorkTitle
