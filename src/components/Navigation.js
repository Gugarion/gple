import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
    </nav>
  );
}

export default Navigation;
