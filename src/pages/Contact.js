import React from 'react';
import '../pages/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <section className="contact-details">
        <p><strong>Gary Paul Law Electric</strong></p>
        <p>456 Desert Bloom Ln, Mesa, AZ 85201</p>
        <p>(602) 555-0198</p>
        <p>info@gplelectric.com</p>
        <p>
          For quick questions or support, try our <strong>AI Chatbot</strong> (coming soon). For general inquiries, use the email form below or call us directly.
        </p>
      </section>
      <section className="contact-form-section">
        <h2>Email Inquiries</h2>
        {/*
          NOTE: Backend functionality required to process form submissions.
        */}
        <form className="contact-form">
          <label>Name:<input type="text" name="name" required /></label>
          <label>Email:<input type="email" name="email" required /></label>
          <label>Phone:<input type="tel" name="phone" /></label>
          <label>Subject:<input type="text" name="subject" /></label>
          <label>Message:<textarea name="message" required /></label>
          <button type="submit" disabled>Send (Demo Only)</button>
        </form>
        {/* Optional: Map placeholder */}
        {/* <div className="map-placeholder">[Map will be embedded here]</div> */}
      </section>
      <section className="contact-note">
        <p>Choose the contact method that suits your needs: Chatbot for urgent questions, phone for direct service, or the email form for general inquiries.</p>
      </section>
    </div>
  );
}

export default Contact;
