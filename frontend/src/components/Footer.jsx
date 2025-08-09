import React from "react";
import "../App.css"; // ✔ Correct path from components to src
  // Import the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* About Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We help track and reward your environmental <br></br>impact through clean energy, EVs, and plantations.</p>
        </div> 

        

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@carboncredit.com</p>
          <p>Phone: +91 9876543210</p>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 CarbonCredit Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
