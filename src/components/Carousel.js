import { Image } from 'react-bootstrap';
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img_1 from '../images/1-Trust.png'
import img_2 from '../images/2-Transparency.png'
import img_3 from '../images/3-Seucrity.png'
import img_4 from '../images/4-Teamwork.png'


import './Carousel.css'
class GedyCarousel extends Component {

  render() {
    return <div>
      <Carousel showThumbs={false} autoPlay  infiniteLoop>
                <Image className="smallImage" src={img_1} />
                <Image className="smallImage" src={img_2} />
                <Image className="smallImage" src={img_3} />
                <Image className="smallImage" src={img_4} />
     </Carousel>
    </div>
  }
}
export default GedyCarousel
