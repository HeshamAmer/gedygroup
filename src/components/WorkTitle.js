import React, { Component } from 'react';
import './HomePageTitle.css'
import './Work.css'
import { Col, Container, Image, Row } from 'react-bootstrap'

import phone1 from '../images/phone1.png'
import phon2 from '../images/phone2.png'
import scanQR from '../images/scanQR.jpg'
class WorkTitle extends Component{
    render(){
        return<div >
            <div className = 'qr-title'>
                <h1 className='qr-main-font mt-2 display-2'>
                Mobile ordering and <br/>
                payment via QR
                </h1>
            </div>
            <div>
            </div>
            <div>
            <Container>
                <div className="row">
                    <div className="col-sm-12 justify-content-center text-center">
                        <h1 className='qr-sub-font mt-2 display-4'>
                            How does ordering via QR work?
                        </h1>
                        <h2 className='qr-body mt-10 display-10'>
                            You put QR code signs on the table, guests scan the code with their smartphone and automatically - with the table number already linked - to youorder site. <br/><br/>There is no need to install an order app, navigate to a web version or log in.
                            Your guests choose their order and pay immediately.
                            <br/><br/>The order is automatically forwarded to the kitchen and/or bar. This can be served or picked up at the pick-up desk.
                        </h2>
                    </div>
                    <div className="col-sm-12">
                    <Image className="img-fluid col-sm-5"  src={scanQR} alt="logo"></Image>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12 justify-content-center text-center">
                    <h2 className='qr-sub-font mt-2 display-5'>
                            Our Apps Features
                        </h2>
                        <Image className="img-fluid col-sm-5" src={phone1} alt="logo"></Image>
                        <Image className="img-fluid col-sm-5" src={phon2}></Image>
                    </div>
                </div>
            </Container>
            </div>
            
        </div>
    }
}

export default WorkTitle