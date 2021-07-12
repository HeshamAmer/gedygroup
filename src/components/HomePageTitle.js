import React, { Component } from 'react';
import './HomePageTitle.css'
import GetInContactButton from './GetInContactButton';
class HomePageTitle extends Component {
  render() {
    return <div className='home-page-title'>
      <h1 className='home-page-font mt-5 display-2'>
        Professional, Personal Solutions </h1>
        <tr />
        <h4 className='home-page-font display-4' style={{marginTop: '-50px'}}>Bring your ideas to life! </h4>
      <GetInContactButton />
    </div>
  }
}
export default HomePageTitle
