import {Button} from 'react-bootstrap';
import {Component} from 'react';
import {Link} from "react-router-dom";
import './GetInContactButton.css'

class GetInContactButton extends Component {
    render() {
        return <div className='get-in-contact'>
            <Link to="/contact-us">
                <Button className='glow-on-hover' type='button'>Get in contact now</Button>
            </Link>
        </div>
    }
}

export default GetInContactButton
