import React from 'react';
import './help.css';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const Help = () => {
  return (
    <div className="help-container">
      <Navbar/>
      {/* Help Section */}
      <section className="help-section">
        <h1>How to Use TouristSafe</h1>
        <hr />

        <div className="steps">
          <ol>
            <li>Login as Tourist</li>
            <li>Use Emergency Button for instant help</li>
            <li>View Nearby Help Centers</li>
            <li>Raise Complaint with location</li>
            <li>Track Complaint Status</li>
            <li>Upload travel documents for quick access</li>
          </ol>
        </div>

        <div className="note">
          <p><strong>Note:</strong> Verified service providers will guide you</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default Help;