import React from 'react';
import '../styles/ServiceItem.css';

function ServiceItem({ title, description, icon }) {
  return (
    <div className="service-item">
      <div className="service-icon">{icon || '[Icon]'}</div>
      <div className="service-details">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
