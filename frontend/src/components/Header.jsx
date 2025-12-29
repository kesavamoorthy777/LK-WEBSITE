import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="dark-header">
      <Link to="/" className="logo-link">
        <img
          src="https://customer-assets.emergentagent.com/job_cnc-services/artifacts/daz29nh5_logo.png"
          alt="LK Technical Services"
          className="dark-logo"
        />
      </Link>

      <nav className="dark-nav">
        <Link to="/" className="dark-nav-link">Home</Link>
        <Link to="/services" className="dark-nav-link active">Services</Link>
        <Link to="/about" className="dark-nav-link">About</Link>
        <Link to="/contact" className="dark-nav-link">Contact</Link>
      </nav>

      <div className="header-cta">
        <a href="tel:+918110925990" className="btn-primary">
          Call Now
        </a>
      </div>
    </header>
  );
};