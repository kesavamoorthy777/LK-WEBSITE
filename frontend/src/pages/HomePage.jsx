import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Settings,
  Wrench,
  Package,
  Bot,
  Hammer,
  Cog,
  Phone
} from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import './HomePage.css';

export const HomePage = () => {
  const features = [
    // ... same as before
    {
      icon: <Shield size={40} />,
      title: 'Trusted Expertise',
      description: 'Over years of experience serving major industrial clients across Tamil Nadu'
    },
    {
      icon: <Clock size={40} />,
      title: '24/7 Support',
      description: 'Round-the-clock emergency breakdown services for uninterrupted production'
    },
    {
      icon: <Award size={40} />,
      title: 'Certified Quality',
      description: 'GSTIN verified company following industry standards and best practices'
    }
  ];

  const services = [
    // ... same as before
    {
      icon: <Settings size={36} />,
      title: 'CNC Machine Service',
      description: 'Complete maintenance and repair for all CNC machines'
    },
    {
      icon: <Package size={36} />,
      title: 'Spares Supply',
      description: 'Genuine parts and components for industrial machinery'
    },
    {
      icon: <Bot size={36} />,
      title: 'Robotics Maintenance',
      description: 'Expert support for Fanuc, OTC, Nachi, ABB robots'
    },
    {
      icon: <Wrench size={36} />,
      title: 'Manpower Support',
      description: 'Skilled technicians and operators for your facility'
    }
  ];

  const achievements = [
    { number: '100+', label: 'Machines Serviced' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="home-page">
      <Hero
        title="LK Technical Services"
        subtitle="Your Trusted Partner for Complete CNC Machine Support – Service, Spares, Manpower & More"
        badgeText="GSTIN VERIFIED"
        badgeValue="33RXHPS6816R1Z6"
        backgroundImage="/hero-cnc-machine.png"
      >
        <div className="hero-cta-buttons">
          <Link to="/services" className="btn-primary">
            <Cog size={20} />
            Explore Services
          </Link>
          <Link to="/contact" className="btn-secondary">
            <Hammer size={20} />
            Contact Us
          </Link>
        </div>
      </Hero>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="display-medium text-center">Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card dark-transition">
                <div className="feature-icon" style={{ color: 'var(--brand-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="heading-2">{feature.title}</h3>
                <p className="body-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="about-preview-content">
          <div className="about-preview-text">
            <h2 className="display-medium">Excellence in Industrial Services</h2>
            <p className="body-large">
              LK Technical Services has been a leading provider of CNC machine services, spares, and manpower solutions across Tamil Nadu. We serve major industrial clients including die casting, forging, and manufacturing companies.
            </p>
            <ul className="about-list">
              <li className="body-medium">
                <CheckCircle size={20} style={{ color: 'var(--brand-orange)' }} />
                Perfection of work in every project
              </li>
              <li className="body-medium">
                <CheckCircle size={20} style={{ color: 'var(--brand-orange)' }} />
                Following strict machine standards
              </li>
              <li className="body-medium">
                <CheckCircle size={20} style={{ color: 'var(--brand-orange)' }} />
                Minimal cost and fast turnaround times
              </li>
              <li className="body-medium">
                <CheckCircle size={20} style={{ color: 'var(--brand-orange)' }} />
                24/7 emergency breakdown support
              </li>
            </ul>
            <Link to="/about" className="btn-primary">
              <Wrench size={20} />
              Learn More About Us
            </Link>
          </div>
          <div className="about-preview-image">
            <img
              src="/cnc-machining-process.jpg"
              alt="CNC Machining Process"
              className="preview-img"
            />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview-section">
        <div className="services-preview-container">
          <h2 className="display-medium text-center">Our Core Services</h2>
          <p className="body-large text-center" style={{ marginBottom: '60px', color: 'var(--text-secondary)' }}>
            Comprehensive solutions for all your industrial machinery needs
          </p>
          <div className="services-preview-grid">
            {services.map((service, index) => (
              <div key={index} className="service-preview-card dark-transition">
                <div className="service-preview-icon" style={{ color: 'var(--brand-primary)' }}>
                  {service.icon}
                </div>
                <h3 className="heading-2">{service.title}</h3>
                <p className="body-small">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '60px' }}>
            <Link to="/services" className="btn-primary">
              <Settings size={20} />
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <h3 className="display-large" style={{ color: 'var(--brand-primary)' }}>
                  {achievement.number}
                </h3>
                <p className="body-large">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="home-cta-content">
          <h2 className="display-medium">Need CNC Machine Support?</h2>
          <p className="body-large">
            Get expert assistance from our experienced team. We're here to keep your operations running smoothly.
          </p>
          <div className="gstin-cta-badge">
            <span className="gstin-label">GSTIN:</span>
            <span className="gstin-number">33RXHPS6816R1Z6</span>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              <Phone size={20} />
              Get In Touch
            </Link>
            <a href="tel:+918110925990" className="btn-secondary">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};