import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/Header.css';
import Logo from './Logo';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="header" aria-label="Site Header" style={{position:'sticky',top:0,zIndex:100,background:'var(--primary-blue)'}}>
      <div className="logo-area">
        <Logo className="logo-img" height={48} />
        <div className="logo-text">
          <div className="logo-main">Gary Paul Law Electric</div>
          <div className="logo-tagline">Family Owned & Operated</div>
        </div>
      </div>
      <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={navOpen} onClick={() => setNavOpen(v => !v)}>
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <nav className={navOpen ? 'navigation navigation-open' : 'navigation'}>
        <Navigation onNavigate={() => setNavOpen(false)} />
      </nav>
      <Link to="/contact" className="cta-btn header-cta" aria-label="Book Service">
        Book Service
      </Link>
    </header>
  );
}

export default Header;
