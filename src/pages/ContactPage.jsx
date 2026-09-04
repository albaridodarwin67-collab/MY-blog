import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions, travel inquiries, or collaboration ideas? We'd love to hear from you.</p>
      </div>

      <div className="contact-card-container">
        {/* Left Column: Direct Info & Interactive Popping Bubbles */}
        <div className="contact-info-panel">
          <div>
            <h2>Contact Information</h2>
            <p className="info-subtitle">Reach out through any of these platforms:</p>

            <div className="info-list">
              <a href="mailto:darwin.albarido@gmail.com" className="info-item clickable">
                <span className="info-icon">📧</span>
                <div className="info-text">
                  <span className="info-label">EMAIL US</span>
                  <span className="info-value">darwin.albarido@gmail.com</span>
                </div>
              </a>

              <a href="tel:+639123456789" className="info-item clickable">
                <span className="info-icon">📱</span>
                <div className="info-text">
                  <span className="info-label">PHONE NUMBER</span>
                  <span className="info-value">+63 912 345 6789</span>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=Davao+City,+Philippines" 
                target="_blank" 
                rel="noreferrer" 
                className="info-item clickable"
              >
                <span className="info-icon">📍</span>
                <div className="info-text">
                  <span className="info-label">LOCATION</span>
                  <span className="info-value">Davao City, Philippines</span>
                </div>
              </a>
            </div>
          </div>

          <div className="social-links-section">
            <h3>Connect with Us</h3>
            <div className="social-bubbles">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-bubble facebook"
              >
                Facebook
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-bubble tiktok"
              >
                TikTok
              </a>
              <a 
                href="https://wa.me/639123456789" 
                target="_blank" 
                rel="noreferrer" 
                className="social-bubble whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Light Form */}
        <div className="contact-form-panel">
          {submitted ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We will respond to your email as soon as possible.</p>
              <button onClick={() => setSubmitted(false)} className="reset-btn">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pro-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Darwin Albarido"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="pro-submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}