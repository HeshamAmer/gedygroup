import {Component} from 'react';
import '../App.css'
import './AboutUs.css'

class AboutUs extends Component {

    render() {
        return <div className="container"
        >
            <div className="col-sm-12 justify-content-center text-center">
                <div className="grow">
                    <h3 className='subtitle'>Personalized Software</h3>
                    <p className='about-us-paragraph'>At our company, we turn the digital dreams of our clients into a
                        reality. <br/>
                        We work closely with our users throughout development to ensure that we are still aligned with
                        the end-goal. <br/>
                        We are committed to producing exceptional software for each of our clients.</p>
                    <hr/>
                </div>
                <div className="grow">
                    <h3 className='subtitle'>Payment solutions experts</h3>
                    <p className='about-us-paragraph'>We have developed payment solution integrations with most of the
                        online payment providers. <br/>
                        Building your payment solution software will be safe in our hands. <br/></p>
                    <hr/>
                </div>

                <div className="grow">
                    <h3 className='subtitle'>Crypto-passionate</h3>
                    <p className='about-us-paragraph'>Passionate towards crypto currency and their future
                        transformation.<br/>
                        You don't need to explain anything to us if you need a crypto advice or solution.</p>
                    <hr/>
                </div>

                <div className="grow">
                    <h3 className='subtitle'>Rigorous Testing</h3>
                    <p className='about-us-paragraph'>Once we have finished the initial development of our client's
                        product, <br/>
                        we begin performing meticulous bug checks. <br/>
                        These tests are included in the price of the development package.
                        <br/> After testing, we deliver the software to our clients. </p>
                    <hr/>
                </div>

                <div className="grow">
                    <h3 className='subtitle'>Quality Guaranteed</h3>
                    <p className='about-us-paragraph'>The world of technology can be fast-paced and scary. <br/>
                        That's why our goal is to provide a high-quality product that aligns with your company's
                        needs. <br/>
                        No matter the budget, we pride ourselves on providing professional customer service. <br/>
                        We guarantee you will be satisfied with our work.</p>
                </div>
            </div>

        </div>
    }
}

export default AboutUs
