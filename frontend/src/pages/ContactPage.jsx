import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';
import './ContactPage.css';

export const ContactPage = () => {

  const contactMethods = [
    {
      icon: <Phone size={32} />,
      title: 'Phone',
      details: '+91 81109 25990',
      action: 'tel:+918110925990',
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp',
      details: '+91 81109 25990',
      action: 'https://wa.me/918110925990',
      description: 'Chat with us on WhatsApp for quick support'
    },
    {
      icon: <Mail size={32} />,
      title: 'Email',
      details: 'lktstechnicalservices@gmail.com',
      action: 'mailto:lktstechnicalservices@gmail.com',
      description: 'Send us an email for detailed inquiries'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Location',
      details: 'Tamil Nadu, India',
      action: null,
      description: 'Visit us at our service center'
    }
  ];

  return (
    <div className="contact-page">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our expert team for reliable CNC machine services and support"
        badgeText="GSTIN VERIFIED"
        badgeValue="33RXHPS6816R1Z6"
        backgroundImage="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjdXN0b21lciUyMHNlcnZpY2V8ZW58MHx8fHwxNzY2NTYwMTYwfDA&ixlib=rb-4.1.0&q=85"
      />

      {/* Contact Methods Section */}
      <section className="contact-methods-section">
        <div className="contact-methods-container">
          <h2 className="display-medium text-center">Get In Touch</h2>
          <p className="body-large text-center" style={{ marginBottom: '60px', color: 'var(--text-secondary)' }}>
            Choose your preferred way to reach us
          </p>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card dark-transition">
                <div className="method-icon" style={{ color: 'var(--brand-primary)' }}>
                  {method.icon}
                </div>
                <h3 className="heading-2">{method.title}</h3>
                <p
                  className={method.title === 'Email' ? "body-medium" : "body-large"}
                  style={{
                    color: 'var(--brand-orange)',
                    fontWeight: '500',
                    margin: '12px 0',
                    fontSize: method.title === 'Email' ? '13px' : undefined,
                    whiteSpace: method.title === 'Email' ? 'nowrap' : 'normal',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {method.details}
                </p>
                <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {method.description}
                </p>
                {method.action && (
                  <a
                    href={method.action}
                    className="btn-secondary"
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.title === 'WhatsApp' ? 'Chat Now' : method.title === 'Phone' ? 'Call Now' : 'Send Email'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions-section">
        <div className="quick-actions-container">
          <h2 className="display-medium text-center">Quick Contact Options</h2>
          <div className="quick-actions-buttons">
            <a href="tel:+918110925990" className="btn-primary btn-large">
              <Phone size={24} />
              Call Now
            </a>
            <a href="https://wa.me/918110925990" className="btn-orange btn-large" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} />
              WhatsApp
            </a>
            <a href="mailto:lktstechnicalservices@gmail.com" className="btn-secondary btn-large">
              <Mail size={24} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-info-panel">
            <div className="info-header">
              <h2 className="display-medium">LK Technical Services</h2>
              <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
                Your trusted partner for complete CNC machine support
              </p>
            </div>

            <div className="gstin-info-badge">
              <span className="gstin-label">GSTIN:</span>
              <span className="gstin-number">33RXHPS6816R1Z6</span>
            </div>

            <div className="info-list">
              <div className="info-item">
                <Phone size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <h4 className="body-large">Phone</h4>
                  <a href="tel:+918110925990" className="body-medium" style={{ color: 'var(--text-secondary)' }}>+91 81109 25990</a>
                </div>
              </div>

              <div className="info-item">
                <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <h4 className="body-large">Email</h4>
                  <a href="mailto:lktstechnicalservices@gmail.com" className="body-medium" style={{ color: 'var(--text-secondary)' }}>lktstechnicalservices@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <h4 className="body-large">Location</h4>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>Tamil Nadu, India</p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <h4 className="body-large">Working Hours</h4>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>24/7 Emergency Support Available</p>
                  <p className="body-small" style={{ color: 'var(--text-muted)' }}>Office: Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h4 className="heading-2" style={{ marginBottom: '16px' }}>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            <div className="contact-image">
              <img
                src="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjdXN0b21lciUyMHNlcnZpY2V8ZW58MHx8fHwxNzY2NTYwMTYwfDA&ixlib=rb-4.1.0&q=85"
                alt="Customer Support"
                className="contact-img"
              />
            </div>
          </div>

          <div className="contact-form-panel">
            <h3 className="heading-1">Send Us a Message</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Fill out the form below and we'll get back to you as soon as possible
            </p>
            <ServiceContactForm type="contact" />
          </div>
        </div>
      </section>
    </div>
  );
};