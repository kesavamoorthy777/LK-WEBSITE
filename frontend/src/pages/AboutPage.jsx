import React from 'react';
import { CheckCircle, Target, Eye, Award, Users } from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import './AboutPage.css';

export const AboutPage = () => {
  // ... (definitions remain the same)
  const values = [
    {
      icon: <Award size={40} />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every service we deliver, ensuring perfection in all our work.'
    },
    {
      icon: <Users size={40} />,
      title: 'Customer First',
      description: 'Our clients success is our priority. We provide 24/7 support to keep your operations running.'
    },
    {
      icon: <Target size={40} />,
      title: 'Precision Engineering',
      description: 'Following strict machine standards and technical specifications in every project.'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Reliability',
      description: 'Trusted by leading industries for consistent, dependable service delivery.'
    }
  ];

  const expertise = [
    'CNC Machine Service & Maintenance',
    'Industrial Spares Supply',
    'Robotics Troubleshooting',
    'PLC/HMI/SCADA Programming',
    'Furnace & Welding Services',
    'Compressor Maintenance',
    'Skilled Manpower Support',
    'Emergency Breakdown Services'
  ];

  const customers = [
    'Accurate Products Corporation Pvt Ltd',
    'Chamundi Die Casting Pvt Ltd',
    'Magha Engineers',
    'Gnutti Carlo India Pvt Ltd',
    'Aswin Cold Forge Pvt Ltd',
    'Vijayalakshmi Forging'
  ];

  return (
    <div className="about-page">
      <Hero
        title="About Us"
        subtitle="Leading Provider of Complete CNC Machine Solutions Across Tamil Nadu"
        badgeText="GSTIN VERIFIED"
        badgeValue="33RXHPS6816R1Z6"
        backgroundImage="https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB0ZWFtfGVufDB8fHx8MTc2NjU2MDE0NXww&ixlib=rb-4.1.0&q=85"
      />

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="display-medium">Our Story</h2>
              <p className="body-large">
                LK Technical Services has established itself as a trusted name in the industrial services sector across Tamil Nadu. We specialize in providing comprehensive CNC machine services, genuine spare parts supply, and skilled manpower solutions to major manufacturing companies.
              </p>
              <p className="body-medium">
                Our journey began with a commitment to excellence and a vision to become the most reliable technical service partner for industries. Today, we serve leading companies in die casting, forging, and manufacturing sectors, maintaining their critical machinery and ensuring uninterrupted production.
              </p>
              <p className="body-medium">
                With a team of highly skilled technicians and engineers, we handle everything from routine preventive maintenance to complex breakdown repairs. Our expertise spans across CNC turning centers, VMCs, HMCs, robotics, PLC systems, furnaces, welding machines, and compressors.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB0ZWFtfGVufDB8fHx8MTc2NjU2MDE0NXww&ixlib=rb-4.1.0&q=85"
                alt="Our Team"
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="mv-icon" style={{ color: 'var(--brand-primary)' }}>
              <Target size={48} />
            </div>
            <h2 className="heading-1">Our Mission</h2>
            <p className="body-large">
              To provide world-class technical services that keep industrial machinery running at peak performance, delivering minimal downtime and maximum productivity for our clients.
            </p>
          </div>

          <div className="vision-card">
            <div className="mv-icon" style={{ color: 'var(--brand-orange)' }}>
              <Eye size={48} />
            </div>
            <h2 className="heading-1">Our Vision</h2>
            <p className="body-large">
              To be the most trusted and preferred technical service partner for industries across India, recognized for our expertise, reliability, and commitment to customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="display-medium text-center">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card dark-transition">
                <div className="value-icon" style={{ color: 'var(--brand-primary)' }}>
                  {value.icon}
                </div>
                <h3 className="heading-2">{value.title}</h3>
                <p className="body-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="expertise-container">
          <h2 className="display-medium">Our Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-item">
                <CheckCircle size={24} style={{ color: 'var(--brand-orange)' }} />
                <span className="body-large">{item}</span>
              </div>
            ))}
          </div>

          <div className="expertise-highlight">
            <h3 className="heading-1">Machine Brands We Service</h3>
            <p className="body-large">
              ACE • AMS • LMW • BFW • YCM • Tsugami • Fanuc • OTC • Nachi • ABB • Atlas Copco • Godrej • LG • Kaeser • Ingersoll Rand • ESAB • Mogora
            </p>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="about-customers-section">
        <div className="about-customers-container">
          <h2 className="display-medium text-center">Trusted By Industry Leaders</h2>
          <p className="body-large text-center" style={{ marginBottom: '60px', color: 'var(--text-secondary)' }}>
            We're proud to serve some of the most respected names in manufacturing
          </p>
          <div className="about-customers-grid">
            {customers.map((customer, index) => (
              <div key={index} className="about-customer-card">
                <p className="body-medium">{customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="commitment-content">
          <h2 className="display-medium">Our Commitment</h2>
          <div className="commitment-points">
            <div className="commitment-point">
              <CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />
              <div>
                <h3 className="heading-2">Perfection of Work</h3>
                <p className="body-medium">Every project is executed with meticulous attention to detail and technical precision.</p>
              </div>
            </div>
            <div className="commitment-point">
              <CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />
              <div>
                <h3 className="heading-2">Following Standards</h3>
                <p className="body-medium">We strictly adhere to machine manufacturer standards and industry best practices.</p>
              </div>
            </div>
            <div className="commitment-point">
              <CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />
              <div>
                <h3 className="heading-2">Fast & Cost-Effective</h3>
                <p className="body-medium">Delivering quality service at minimal cost with fastest possible turnaround times.</p>
              </div>
            </div>
          </div>

          <div className="gstin-commitment-badge">
            <span className="gstin-label">GSTIN:</span>
            <span className="gstin-number">33RXHPS6816R1Z6</span>
          </div>
        </div>
      </section>
    </div>
  );
};