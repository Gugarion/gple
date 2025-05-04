import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header" aria-label="Site Header">
      <div className="logo-area">
        <img src="/branding/GPL2.png" alt="GPLE Logo" className="logo-img" height="48" onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_Icon.png'; }} style={{background:'#fff'}} />
        <div className="logo-text">
          <div className="logo-main">Gary Paul Law Electric</div>
          <div className="logo-tagline">Family Owned & Operated</div>
        </div>
      </div>
      <Navigation />
      <a href="/contact" className="cta-btn header-cta" aria-label="Book Service">
        Book Service
      </a>
    </header>
  );
}

export default Header;
