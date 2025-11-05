import React, { useState } from 'react';
import './contact.css';
import Navbar from '../../common/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your feedback!');
    setFormData({ name: '', message: '' });
  };

  return (
    <div className="contact-container">
      <Navbar/>
      {/* Contact Section */}
      <section className="contact-section">
        <h1>Contact & Emergency Info</h1>
        <hr />

        <div className="developer-contact">
          <h2>Admin Contact</h2>
          <p><strong>Name:</strong></p>
          <p><strong>Email:</strong> admin.help@touristsafe.com</p>
        </div>

        <div className="emergency-info">
          <h2>Emergency Numbers</h2>
          <ul>
            <li><strong>Police:</strong> 100</li>
            <li><strong>Ambulance:</strong> 102</li>
            <li><strong>Tourist Helpline:</strong> 1800-123-4567</li>
          </ul>
        </div>

        <div className="feedback-form">
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Contact Info | Privacy Policy | Social Links</p>
      </footer>
    </div>
  );
};

export default Contact;