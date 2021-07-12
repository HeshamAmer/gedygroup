
import { Component } from 'react';
import { Image } from 'react-bootstrap'
import contact_us from '../images/contact-us.png'
import '../App.css'
class ContactUs extends Component {

  onGetInContactClick() {
    console.log('haer')
  }
  render() {
    return <div className='contact-us-page'>
      <Image  height="200dp" className="img-responsive" src={contact_us} alt="logo"></Image>
     
      <p className='contact-us-paragraph lato'>
      On behalf of the whole Gedygroup, we are really happy you are here.<br/>
      <br/>
      We know that our clients have unique needs and circumstances.<br/>
      Tell us more about your project,<br/>
      and we will get back to you soon with some ideas of how we can address them.<br/>
      <br/>
      <br/>
      Please write an email to our main contact point  <br/>      
      <b><a class="email" href="mailto:HeshamAmer@gedygroup.com">HeshamAmer@gedygroup.com</a></b>
      </p>
      <br/>
      <br/>
      </div>    
  }
}
export default ContactUs
