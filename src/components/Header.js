import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';
import Logo from './Logo';

function Header() {
  return (
    <header className="header" aria-label="Site Header">
      <div className="logo-area">
        <Logo className="logo-img" height={48} />
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
