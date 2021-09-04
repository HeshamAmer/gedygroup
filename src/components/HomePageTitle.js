import React, {Component} from 'react';
import './HomePageTitle.css'
import GetInContactButton from './GetInContactButton';
import Carousel from './Carousel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

class HomePageTitle extends Component {
    render() {
        function scrollToCarousel() {
            const element = document.getElementById('scrollable');
            const navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const current_scroll = document.documentElement.scrollTop || document.body.scrollTop;
            const offsetPosition = elementPosition - navbarHeight + current_scroll;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        return <div>
            <div className='home-page-title'>
                <h1 className='home-page-font mt-5 display-2'>
                    Professional, Personal Solutions </h1>
                <h4 className='home-page-font display-4' style={{marginTop: '-50px'}}>Bring your ideas to life! </h4>
                <GetInContactButton/>
                <button id="scrollToCarouselBtn" onClick={scrollToCarousel}><FontAwesomeIcon icon={faChevronDown}/>
                </button>
            </div>
            <div id="scrollable">
                <Carousel/>
            </div>
        </div>
    }
}

export default HomePageTitle
