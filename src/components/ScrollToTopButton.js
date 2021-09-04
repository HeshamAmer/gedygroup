import {useState} from 'react';
import './ScrollToTopButton.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'

const ScrollToTopButton = () => {
    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);
    return <button id="scrollToTopBtn" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleDoubleUp}/></button>
}
export default ScrollToTopButton
