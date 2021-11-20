import {Image} from 'react-bootstrap';
import {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import './Carousel.css'

class RestaurateurCarousel extends Component {

    render() {
        console.log(this.props.images)
        return <div>
            
            <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                {this.props.images.map(image=>{
                    return <Image className="smallRestaurateurImage" src={image}/>
                }
                )
            }
            </Carousel>
        </div>
    }
}

export default RestaurateurCarousel
