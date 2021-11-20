import React, {Component} from 'react';
import './Work.css'
import {Col, Container, Image, Row} from 'react-bootstrap'
import scanQR from '../images/qr.jpg'
import sizzlerLogo from '../images/dummy-restaurant.png'
import RestaurateurCarousel from "./RestaurateurCarousel";

class WorkTitle extends Component {
    render() {
        return <div>
            <div className='qr-title'>
                <h1 className='qr-main-font mt-2 display-2'>
                    Let your customers order from their Mobile
                    <br/>
                    <br/>
                    <br/>
                    <h1>
                        Restaurateur
                    </h1>
                    <h5 className>
                        Give your customers the ability to place their orders from their mobile phones directly to the
                        kitchen.<br/>
                        Let them choose their orders, special requests and extras instantly without losing any
                        details.<br/>
                        Allow them a choice of how they'd like to pay between online payments and all the allowed
                        payment
                        methods in your restaurant.
                    </h5>
                </h1>
            </div>
            <div>
            </div>
            <Container>
                <h4>
                    Try it yourself!
                </h4>
                <Row className={'align-items-center'}>
                    <Col xs={12} sm={6}>
                        <Image className="img-fluid col-sm-10" src={scanQR} alt="logo"/>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Image className="img-fluid col-sm-10" src={sizzlerLogo} alt="logo"/>
                    </Col>
                </Row>
                <hr/>
                <h3>Restaurateur Client</h3>
                <Row className={'align-items-center'}>
                    <Col xs={6} sm={6}>
                        <RestaurateurCarousel/>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h5 className='qr-body mt-10 display-10 text-left'>
                            <ul className="list-styled">
                                <li>Offer your waiters more time to serve your customers
                                </li>
                                <li>Allow your customers to choose their preferred payment method.
                                </li>
                                <li>Digitize your menu and online presence
                                </li>
                            </ul>
                        </h5>
                    </Col>
                </Row>
                <h3>Restaurateur Kitchen</h3>
                <Row className={'align-items-center'}>
                    <Col xs={12} sm={6}>
                        <h5 className='text-left'>
                            <ul className="list-styled">
                                <li>Display your orders instantaneously as they arrive.
                                </li>
                                <li>Disable ordering an order when it's out of stock.
                                </li>
                                <li>Display all of your historical orders per day
                                </li>
                                <li>Check your restaurant operations anywhere
                                </li>
                                <br/>
                            </ul>
                        </h5>
                    </Col>
                    <Col xs={6} sm={6}>
                        <RestaurateurCarousel/>
                    </Col>
                </Row>
                <h3>Restaurateur Admin</h3>
                <Row className={'align-items-center'}>
                    <Col xs={6} sm={6}>
                        <RestaurateurCarousel/>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h5 className='text-left'>
                            <ul className="list-styled">
                                <li>Display your orders instantaneously as they arrive.
                                </li>
                                <li>Disable ordering an order when it's out of stock.
                                </li>
                                <li>Display all of your historical orders per day
                                </li>
                                <li>Check your restaurant operations anywhere
                                </li>
                                <br/>
                            </ul>
                        </h5>
                    </Col>
                </Row>
            </Container>

        </div>
    }
}

export default WorkTitle
