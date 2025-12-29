import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="https://customer-assets.emergentagent.com/job_cnc-services/artifacts/daz29nh5_logo.png"
            alt="LK Technical Services"
            className="footer-logo"
          />
          <p className="footer-description">
            Complete CNC Machine Support – Service, Spares, Manpower & More
          </p>
          <div className="gstin-badge">
            <span className="gstin-label">GSTIN:</span>
            <span className="gstin-number">33RXHPS6816R1Z6</span>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#cnc-service">CNC Machine Service</a></li>
            <li><a href="#spares">Spares Supply</a></li>
            <li><a href="#robotics">Robotics Maintenance</a></li>
            <li><a href="#manpower">Manpower Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <Phone size={18} />
              <a href="tel:+918110925990">+91 81109 25990</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:lktstechnicalservices@gmail.com">lktstechnicalservices@gmail.com</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Tamil Nadu, India</span>
            </li>
          </ul>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 LK Technical Services. All rights reserved.</p>
      </div>
    </footer>
  );
};