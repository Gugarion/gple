import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation({ onNavigate }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end onClick={onNavigate}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={onNavigate}>About Us</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={onNavigate}>Services</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={onNavigate}>Contact Us</NavLink>
    </nav>
  );
}

export default Navigation;
