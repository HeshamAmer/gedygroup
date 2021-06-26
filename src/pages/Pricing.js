import { Component } from 'react';
import NavigationBar from '../NavigationBar'
import { Image } from 'react-bootstrap'

class Pricing extends Component {

  render() {
    return <div style={{ backgroundColor: "black" }}>
      <NavigationBar />
      <h1 style={{
        color: "white",
        textAlign: "center",
        backgroundColor: "black"
      }}>Coming soon</h1>
      <Image src="https://acegif.com/wp-content/uploads/loading-5.gif" />
    </div>
  }
}
export default Pricing
