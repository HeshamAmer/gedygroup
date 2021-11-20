import {Image} from 'react-bootstrap';
import {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import img_1 from '../images/8-all-orders.png'
import img_2 from '../images/9-confirmed_orders.png'
import img_3 from '../images/10-login.png'
import './Carousel.css'

class RestaurateurCarousel extends Component {

    render() {
        return <div>
            <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                <Image className="smallRestaurateurImage" src={img_1}/>
                <Image className="smallRestaurateurImage" src={img_2}/>
                <Image className="smallRestaurateurImage" src={img_3}/>
            </Carousel>
        </div>
    }
}

export default RestaurateurCarousel
