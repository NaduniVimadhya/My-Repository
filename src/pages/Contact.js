import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Use an inline success toast or alert state rather than raw browser popup
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    
    // Auto-clear success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page page-transition">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        {/* Left column: Contact Info card */}
        <div className="contact-info-panel">
          <h3>Get In Touch</h3>
          <p className="contact-intro">
            Have an open role, project idea, or just want to connect? Drop a message, and I'll get back to you as soon as possible.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="info-content">
                <span className="info-label">Email</span>
                <a href="mailto:nadunivimadhya6@gmail.com" className="info-link">nadunivimadhya6@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="info-content">
                <span className="info-label">Phone</span>
                <a href="tel:0702722879" className="info-link">0702722879</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-text">Institute of Technology, University of Moratuwa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="contact-form-panel">
          {submitted && (
            <div className="success-alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="form-name">Name</label>
              <input 
                id="form-name"
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-email">Email</label>
              <input 
                id="form-email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="yourname@gmail.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-message">Message</label>
              <textarea 
                id="form-message"
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Write your message here..." 
                rows="6"
                required 
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;