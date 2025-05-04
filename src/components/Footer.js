import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">Gary Paul Law Electric</div>
        <div className="footer-contact">
          456 Desert Bloom Ln, Mesa, AZ 85201<br />
          (602) 555-0198<br />
          info@gplelectric.com
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link> | <Link to="/services">Services</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} GPLE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
