import React, {Component} from 'react';
import './Work.css'
import {Col, Container, Image, Row} from 'react-bootstrap'
import scanQR from '../images/qr.jpg'
import sizzlerLogo from '../images/dummy-restaurant.png'
import RestaurateurCarousel from "./RestaurateurCarousel"
import img_1 from '../images/8-all-orders.png'
import img_2 from '../images/9-confirmed_orders.png'
import img_3 from '../images/10-login.png'
import client1 from '../images/client1.png'
import client2 from '../images/Client2.png'
import client3 from '../images/Client3.png'
import client4 from '../images/Client4.png'
import dashboard1 from '../images/Dashboard1.png'
import dashboard2 from '../images/Dashboard2.png'
import dashboard3 from '../images/Dashboard3.png'
import dashboard4 from '../images/Dashboard4.png';

class WorkTitle extends Component {
    render() {
        const carousel_kitchen = [
            img_1, img_2, img_3
        ]
        const carousel_client = [
            client1, client2, client3, client4
        ]
        const carousel_dashboard = [
            dashboard1, dashboard2, dashboard3, dashboard4
        ]
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
                    <h5>
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
                <div className={'mt-5'}>
                    <h4>
                        Try it yourself!
                    </h4>
                    <Row className={'align-items-center'}>
                        <Col xs={12} sm={6}>
                            <Image className="img-fluid col-sm-10" src={scanQR}/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Image className="img-fluid col-sm-7" src={sizzlerLogo}/>
                        </Col>
                    </Row>
                    <hr/>
                </div>
                <div className={'mt-5'}>
                    <h3>Restaurateur Client</h3>
                    <Row className={'align-items-center mt-lg-5'}>
                        <Col xs={12} sm={6}>
                            <RestaurateurCarousel images={carousel_client}/>
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
                </div>
                <div className={'mt-5'}>
                    <h3>Restaurateur Kitchen</h3>
                    <Row className={'align-items-center'}>
                        <Col xs={{span: 12, order:1}} sm={{span: 6, order:2}}>
                            <RestaurateurCarousel images={carousel_kitchen}/>
                        </Col>
                        <Col xs={{span:12, order:2}} sm={{span: 6, order:1}}>
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
                    </Row></div>
                <div className={'mt-5'}>
                    <h3>Restaurateur Dashboard</h3>
                    <Row className={'align-items-center'}>
                        <Col xs={12} sm={6}>
                            <RestaurateurCarousel images={carousel_dashboard}/>
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
                    </Row></div>
            </Container>

        </div>
    }
}

export default WorkTitle
