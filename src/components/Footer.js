import React from 'react';
import './Footer.css';
import {Card} from "react-bootstrap";


const FooterPage = () => {
  return (

    <Card className="footer border-0">
      <div className="footer-copyright text-center py-3">
                <a href="/contact-us">Contact Us</a>
                <br/>
                <a href="/Imprint">Imprint</a>
                <br/>
          &copy; {new Date().getFullYear()} Gedygroup LLC
      </div>
    </Card>
  );
};

export default FooterPage;
