import React, { Component } from 'react';
import './HomePageTitle.css'
import Carousel from './Carousel'
class HomePageTitle extends Component {
  render() {
    return <div className='home-page-title' >
      <h1 className='home-page-font'>
        Professional Personal Solutions </h1>
      <Carousel />
    </div>
  }
}
export default HomePageTitle
