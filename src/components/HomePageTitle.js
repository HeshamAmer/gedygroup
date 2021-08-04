import React, { Component } from 'react';
import './HomePageTitle.css'
import GetInContactButton from './GetInContactButton';
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class HomePageTitle extends Component {
  render() {
    function handleBackClick() {
        var element = document.getElementById('scrollable');
        var navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - navbarHeight;

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
        <GetInContactButton />
        <button id="scrollToCarouselBtn" onClick={handleBackClick}><FontAwesomeIcon icon={faChevronDown}/></button>
        </div>
        <div id="scrollable">
        <Carousel/>
        </div>
    </div>
  }
}
export default HomePageTitle
