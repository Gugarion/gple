import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo className="footer-logo" height={32} />
          <div className="footer-company">Gary Paul Law Electric</div>
        </div>
        <div className="footer-contact">
          456 Desert Bloom Ln, Mesa, AZ 85201<br />
          (602) 555-0198<br />
          info@gplelectric.com
        </div>
        <div className="footer-social" aria-label="Social Links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h13V20h-4v-5h4v-3.7C16 7.6 18.4 5.5 22.2 5.5c1.6 0 3.2.1 3.6.2v4.2h-2.5c-2 0-2.4.9-2.4 2.3V15h5l-1 5h-4v12h7c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"/></svg>
          </a>
          <a href="mailto:info@gplelectric.com" aria-label="Email">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><path d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6zm24 0H6a2 2 0 0 0-2 2v.2l12 8.3 12-8.3V8a2 2 0 0 0-2-2zm2 4.7l-11.3 7.8a2 2 0 0 1-2.4 0L4 10.7V26a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10.7z"/></svg>
          </a>
          <a href="tel:6025550198" aria-label="Phone">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><path d="M6.6 2.7c.5-1.1 1.7-1.6 2.8-1.1l4.2 1.8c1.1.5 1.6 1.7 1.1 2.8l-1.2 2.7c-.4.9-.2 2 .5 2.7l3.7 3.7c.7.7 1.8.9 2.7.5l2.7-1.2c1.1-.5 2.3 0 2.8 1.1l1.8 4.2c.5 1.1 0 2.3-1.1 2.8-4.2 2-9.2 1.2-12.7-2.3-3.5-3.5-4.3-8.5-2.3-12.7z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" style={{opacity:0.5, pointerEvents:'none'}}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="14"/><circle cx="16" cy="16" r="7" fill="#fff"/><circle cx="24" cy="8" r="2" fill="#fff"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" style={{opacity:0.5, pointerEvents:'none'}}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect x="6" y="12" width="4" height="14"/><rect x="14" y="16" width="4" height="10"/><rect x="22" y="10" width="4" height="16"/></svg>
          </a>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link> | <Link to="/services">Services</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} GPLE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
