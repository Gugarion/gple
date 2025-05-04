import React from 'react';
import '../pages/About.css';
import bestbuyLogo from '../media/bestbuy.svg';
import homedepotLogo from '../media/homedepot.svg';
import chandlerLogo from '../media/chandlerregional.svg';
import mesaLogo from '../media/cityofmesa.svg';
import genericLogo from '../media/genericclient.svg';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Our Family Story</h1>
      </section>
      <section className="about-story">
        <p>
          Gary Paul Law Electric (GPLE) was founded by Gary Paul Law, a Mesa native with a lifelong passion for electrical work. By age 42, Gary had already spent over 20 years mastering his craft, from humble beginnings as an apprentice to leading complex commercial projects across Arizona. His vision: to build a company where every client is treated like family, and every job—big or small—gets the same attention to detail and care.
        </p>
        <p>
          As a family-owned and operated business, GPLE is built on values of personal accountability, integrity, and a deep commitment to the local community. Our team believes in honest communication, transparent pricing, and delivering results that stand the test of time.
        </p>
      </section>
      <section className="about-values">
        <h2>Experience You Can Trust</h2>
        <ul>
          <li>20+ years of hands-on experience in residential, commercial, and technical electrical work</li>
          <li>Proven track record with projects ranging from custom homes to big box retail and medical facilities</li>
          <li>Commitment to safety, quality, and ongoing education in the latest industry standards</li>
        </ul>
        <p>
          Whether you need a simple repair or a complex installation, GPLE brings the expertise and personal touch you deserve. We’re proud to serve Mesa and the greater Phoenix area, and we look forward to earning your trust.
        </p>
      </section>
      <section className="about-testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          <blockquote className="testimonial">
            <p>"Gary and his team handled our office build-out with professionalism and care. The results exceeded our expectations!"</p>
            <footer>- Lisa G., Small Business Owner</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"We needed a fast panel upgrade for our new appliances. GPLE delivered on time and on budget."</p>
            <footer>- The Johnson Family</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"GPLE’s attention to detail and safety on our medical facility project was outstanding. Highly recommended for technical work."</p>
            <footer>- Dr. Patel, Mesa Medical Center</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"Professional, honest, and always on time. We trust GPLE for all our commercial electrical needs."</p>
            <footer>- Tom R., Best Buy Store Manager</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"Gary’s team was courteous and explained everything. The new lighting in our home is perfect!"</p>
            <footer>- Sarah M., Homeowner</footer>
          </blockquote>
        </div>
      </section>
      <section className="trusted-by">
        <h2>Trusted By</h2>
        <div className="trusted-logos">
          <img src={bestbuyLogo} alt="Best Buy company logo" />
          <img src={homedepotLogo} alt="Home Depot company logo" />
          <img src={chandlerLogo} alt="Chandler Regional Medical Center logo" />
          <img src={mesaLogo} alt="City of Mesa logo" />
          <img src={genericLogo} alt="Generic Commercial Client logo" />
        </div>
      </section>
    </div>
  );
}

export default About;
