import React from 'react';
import '../styles/ServiceItem.css';

// SVG icon map for blue/yellow theme
const iconMap = {
  'Custom Home Wiring': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Home Wiring" style={{display:'block'}}>
      <rect x="4" y="14" width="24" height="12" rx="2" fill="#004080"/>
      <polygon points="16,4 28,14 4,14" fill="#ffc107"/>
      <rect x="12" y="20" width="4" height="6" fill="#fff"/>
    </svg>
  ),
  'Service Panel Upgrades': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Panel Upgrade"><rect x="8" y="8" width="16" height="16" rx="2" fill="#004080"/><rect x="14" y="14" width="4" height="8" fill="#ffc107"/></svg>
  ),
  'Lighting Design & Installation': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Lighting"><circle cx="16" cy="16" r="10" fill="#ffc107" stroke="#004080" strokeWidth="2"/><rect x="14" y="22" width="4" height="6" fill="#004080"/></svg>
  ),
  'Smart Home Technology Integration': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Smart Home"><rect x="8" y="14" width="16" height="10" rx="2" fill="#004080"/><circle cx="16" cy="19" r="3" fill="#ffc107"/></svg>
  ),
  'Dedicated Circuits': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Circuits"><rect x="10" y="10" width="12" height="12" rx="3" fill="#004080"/><rect x="15" y="15" width="2" height="7" fill="#ffc107"/></svg>
  ),
  'Troubleshooting & GFCI/AFCI Issues': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Troubleshooting"><circle cx="16" cy="16" r="12" fill="#004080"/><polygon points="16,8 20,20 12,20" fill="#ffc107"/></svg>
  ),
  'Electrical Safety Inspections': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Safety"><rect x="8" y="8" width="16" height="16" rx="8" fill="#ffc107" stroke="#004080" strokeWidth="2"/><rect x="14" y="14" width="4" height="8" fill="#004080"/></svg>
  ),
  'Ceiling Fan & Fixture Installation': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Fan"><circle cx="16" cy="16" r="4" fill="#ffc107"/><rect x="15" y="2" width="2" height="8" fill="#004080"/><rect x="15" y="22" width="2" height="8" fill="#004080"/><rect x="2" y="15" width="8" height="2" fill="#004080"/><rect x="22" y="15" width="8" height="2" fill="#004080"/></svg>
  ),
  'Surge Protection': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Surge"><rect x="8" y="8" width="16" height="16" rx="8" fill="#004080"/><polygon points="16,12 20,20 12,20" fill="#ffc107"/></svg>
  ),
  'Retail/Big Box Store Electrical': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Retail"><rect x="4" y="14" width="24" height="10" rx="2" fill="#004080"/><rect x="10" y="18" width="4" height="6" fill="#ffc107"/><rect x="18" y="18" width="4" height="6" fill="#ffc107"/></svg>
  ),
  'Medical Facility Electrical': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Medical"><rect x="8" y="8" width="16" height="16" rx="8" fill="#004080"/><rect x="14" y="14" width="4" height="8" fill="#ffc107"/><rect x="10" y="18" width="12" height="2" fill="#ffc107"/></svg>
  ),
  'Office & Tenant Improvement Wiring': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Office"><rect x="6" y="10" width="20" height="12" rx="2" fill="#004080"/><rect x="12" y="16" width="8" height="6" fill="#ffc107"/></svg>
  ),
  'Industrial Equipment Connections': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Industrial"><rect x="8" y="8" width="16" height="16" rx="4" fill="#004080"/><rect x="14" y="14" width="4" height="8" fill="#ffc107"/></svg>
  ),
  'Backup Generator Systems': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Generator"><rect x="8" y="14" width="16" height="8" rx="2" fill="#004080"/><rect x="14" y="18" width="4" height="4" fill="#ffc107"/></svg>
  ),
  'Electrical System Maintenance & Code Compliance': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Maintenance"><rect x="8" y="8" width="16" height="16" rx="8" fill="#ffc107" stroke="#004080" strokeWidth="2"/><rect x="14" y="14" width="4" height="8" fill="#004080"/></svg>
  ),
  'Data & Low Voltage Wiring': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Data"><rect x="8" y="14" width="16" height="6" rx="2" fill="#004080"/><rect x="12" y="18" width="8" height="2" fill="#ffc107"/></svg>
  ),
  'Lighting Retrofits & Energy Efficiency': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Retrofit"><circle cx="16" cy="16" r="10" fill="#ffc107" stroke="#004080" strokeWidth="2"/><rect x="14" y="22" width="4" height="6" fill="#004080"/></svg>
  ),
  'Parking Lot & Exterior Lighting': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Parking Lot"><rect x="4" y="18" width="24" height="6" rx="2" fill="#004080"/><rect x="14" y="10" width="4" height="8" fill="#ffc107"/></svg>
  ),
};

function ServiceItem({ title, description, icon }) {
  const themedIcon = iconMap[title] || (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Service"><circle cx="16" cy="16" r="14" fill="#004080"/><polygon points="16,8 24,24 8,24" fill="#ffc107"/></svg>
  );
  return (
    <div className="service-item">
      <div className="service-icon">{themedIcon}</div>
      <div className="service-details">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
