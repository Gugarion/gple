import React from 'react';
import '../pages/Services.css';
import ServiceItem from '../components/ServiceItem';
import { residentialServices, commercialServices } from '../data/services';

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Comprehensive Electrical Services</h1>
      </section>
      <section className="services-section">
        <h2>Residential Solutions</h2>
        <div className="services-list">
          {residentialServices.map((service, idx) => (
            <ServiceItem key={idx} {...service} />
          ))}
        </div>
      </section>
      <section className="services-section">
        <h2>Commercial & Technical Expertise</h2>
        <div className="services-list">
          {commercialServices.map((service, idx) => (
            <ServiceItem key={idx} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
