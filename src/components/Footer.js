import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import './Footer.css';


const FooterPage = () => {
  return (
    <MDBFooter className="footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
                <a href="/contact-us">Contact Us</a>
                <br/>
                <a href="/Imprint">Imprint</a>
                <br/>
          &copy; {new Date().getFullYear()} Gedygroup LLC
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
