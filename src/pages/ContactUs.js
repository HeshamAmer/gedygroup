
import { Component } from 'react';
import NavigationBar from '../NavigationBar'
import { Image } from 'react-bootstrap'
import contact_us from '../images/contact-us.png'
class ContactUs extends Component {

  onGetInContactClick() {
    console.log('haer')
  }
  render() {
    return <div style={{ backgroundColor: "black", color:'white', height: 'auto' }}>
      <Image  height="250dp" className="img-responsive" src={contact_us} alt="logo"></Image>
      <br/>
      <br/>
      <p>
      On behalf of the whole Gedygroup, we are really happy you here.<br/>
      <br/>
      We know that our clients have unique needs and circumstances.<br/>
      Tell us more about your project,<br/>
      and we will get back to you soon with some ideas of how we can address them.<br/>
      <br/>
      <br/>
      Please write an email to our main contact point  <br/>      
      <b>HeshamAmer@gedygroup.com</b>
      </p>
      </div>    
  }
}
export default ContactUs
