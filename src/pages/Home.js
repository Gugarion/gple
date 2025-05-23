import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import ServiceItem from '../components/ServiceItem';
import { residentialServices, commercialServices } from '../data/services';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-years">Built on 20 Years of <span style={{color:'#004080', background:'#ffe066', padding:'0 0.3em', borderRadius:'4px'}}>Trust</span></div>
        <h1 className="hero-title">Expert Electrical Services</h1>
        <p className="hero-sub">Residential & Commercial Solutions for Mesa, AZ and Beyond</p>
        <Link to="/contact" className="cta-btn">Get a Quote</Link>
      </section>
      <section className="intro">
        <h2>Welcome to Gary Paul Law Electric</h2>
        <p>Family-owned and operated, GPLE brings decades of hands-on expertise to every project. From custom home wiring to complex commercial installations, we deliver safe, reliable, and innovative solutions with a personal touch.</p>
      </section>
      <section className="services-preview">
        <h2>Our Capabilities</h2>
        <div className="services-list">
          <ServiceItem {...residentialServices[0]} />
          <ServiceItem {...commercialServices[0]} />
          <ServiceItem {...residentialServices[1]} />
        </div>
        <Link to="/services" className="more-services-link">See All Services</Link>
      </section>
      <section className="values-area">
        <h2>Why Choose GPLE?</h2>
        <ul>
          <li>Family values: Personal care, accountability, and community focus</li>
          <li>Licensed, bonded, and insured for your peace of mind</li>
          <li>Serving Mesa, Gilbert, Chandler, Tempe, and the greater Phoenix area</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
