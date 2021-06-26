import React, { Component } from 'react';
import background from './images/stock-image.jpg'

class HomePageTitle extends Component {
  render() {
    return <div style= {
        {
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover',
          height: '100%',
          backgroundRepeat: 'no-repeat',
        }
        } >
          <h1 style={{
              color: "white",
              textAlign: "center",
            }}>Professional, <br/> Personal <br/> solutions </h1>
        </div>
  }
}
export default HomePageTitle
