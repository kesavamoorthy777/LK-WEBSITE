import React from 'react';
import {
  Settings,
  Wrench,
  Package,
  Bot,
  Cpu,
  Flame,
  Zap,
  Factory,
  Wind,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';
import './ServicesPage.css';

export const ServicesPage = () => {

  const services = [
    {
      icon: <Settings size={40} />,
      title: 'CNC Machine Service',
      items: [
        'Turning Center service',
        'Vertical Machining Center (VMC)',
        'Horizontal Machining Center (HMC)',
        'Skilled technicians for ACE, AMS, LMW, BFW, YCM, Tsugami',
        'Preventive maintenance & breakdown support',
        'Machine reconditioning',
        'Troubleshooting major faults',
        'Mechanical + Electrical service'
      ]
    },
    {
      icon: <Wrench size={40} />,
      title: 'Conventional Machine Service',
      items: [
        'SPM Machines',
        'Assembly Machines'
      ]
    },
    {
      icon: <Package size={40} />,
      title: 'CNC Machine Spares Supply',
      items: [
        'Belts, Cables, Sensors, Bearings',
        'Hydraulic/Pneumatic spares',
        'Industrial spares',
        'All motors/drives service support',
        'AC motor / DC motor / Servo / Stepper motor rewinding/service'
      ]
    },
    {
      icon: <Bot size={40} />,
      title: 'Robotics Maintenance',
      items: [
        'Robotics troubleshooting: Fanuc, OTC, Nachi, ABB'
      ]
    },
    {
      icon: <Cpu size={40} />,
      title: 'PLC / HMI / SCADA Services',
      items: [
        'PLC programming and troubleshooting',
        'HMI troubleshooting',
        'SCADA interfacing and logic corrections',
        'VFD control panel wiring/modification'
      ]
    },
    {
      icon: <Flame size={40} />,
      title: 'Furnace Services',
      items: [
        'Gas/Electric furnaces up to 100T capacity',
        'Furnace preventive & breakdown maintenance'
      ]
    },
    {
      icon: <Zap size={40} />,
      title: 'Welding Machine Services',
      items: [
        'MIG / TIG / Gouging / Plasma machines',
        'Preventive & breakdown maintenance',
        'Brands: OTC, Mogora, LT, ESAB'
      ]
    },
    {
      icon: <Factory size={40} />,
      title: 'Foundry Machinery Support',
      items: [
        'Furnace / Blasting / Painting',
        'Welding / Rolling / Pressing / Cutting machines'
      ]
    },
    {
      icon: <Wind size={40} />,
      title: 'Compressor Services',
      items: [
        'Preventive & breakdown services up to 200 CFM',
        'Brands: Atlas Copco, Godrej, LG, Kaeser, Ingersoll Rand',
        'Air dryer maintenance'
      ]
    },
    {
      icon: <Users size={40} />,
      title: 'Manpower Support',
      items: [
        'Machine maintenance manpower',
        'Machine cleaners',
        'Operators',
        'Helpers: loaders, packers, cleaners'
      ]
    }
  ];

  const customers = [
    'Accurate Products Corporation Pvt Ltd',
    'Chamundi Die Casting Pvt Ltd',
    'Magha Engineers',
    'Gnutti Carlo India Pvt Ltd',
    'Aswin Cold Forge Pvt Ltd',
    'Vijayalakshmi Forging'
  ];

  const values = [
    'Perfection of work',
    'Following machine standards',
    'Delivering minimal cost and fast timelines'
  ];

  return (
    <div className="services-page">
      <Hero
        title="Our Services"
        subtitle="Complete CNC Machine Support – Service, Spares, Manpower & More"
        badgeText="VERIFIED"
        badgeValue="GSTIN: 33RXHPS6816R1Z6"
        backgroundImage="/cnc-tool-hero.jpg"
      />

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card dark-transition">
                <div className="service-icon" style={{ color: 'var(--brand-primary)' }}>
                  {service.icon}
                </div>
                <h3 className="heading-2">{service.title}</h3>
                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="body-small">
                      <CheckCircle size={16} style={{ color: 'var(--brand-orange)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="display-medium">Our Commitment</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />
                <p className="body-large">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="customers-section">
        <div className="customers-container">
          <h2 className="display-medium">Trusted By Industry Leaders</h2>
          <div className="customers-grid">
            {customers.map((customer, index) => (
              <div key={index} className="customer-card">
                <p className="body-medium">{customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="display-medium">Need CNC Service Support?</h2>
              <p className="body-large">
                Get in touch with our expert team for reliable CNC machine services and support.
              </p>

              <div className="gstin-contact-badge">
                <span className="gstin-label">GSTIN:</span>
                <span className="gstin-number">33RXHPS6816R1Z6</span>
              </div>

              <div className="quick-contact">
                <a href="tel:+918110925990" className="btn-primary">
                  <Phone size={20} />
                  Call Now
                </a>
                <a href="https://wa.me/918110925990" className="btn-orange" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a href="mailto:lktstechnicalservices@gmail.com" className="btn-secondary">
                  <Mail size={20} />
                  Email Us
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <ServiceContactForm type="service" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};