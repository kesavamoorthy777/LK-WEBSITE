import React, { useState } from 'react';
import axios from 'axios';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const ServiceContactForm = ({ type = 'contact' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: type === 'service' ? 'Service Request' : '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            const endpoint = type === 'service' ? '/service-request' : '/contact';
            await axios.post(`${API_BASE_URL}${endpoint}`, formData);
            setStatus({ loading: false, error: null, success: true });
            setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus({ loading: false, error: 'Failed to send message. Please try again.', success: false });
        }
    };

    return (
        <div className="contact-form-wrapper">
            {status.success ? (
                <div className="success-message fade-up">
                    <h3 className="heading-1">Thank You!</h3>
                    <p className="body-large">Your message has been sent successfully. We'll get back to you soon.</p>
                    <button onClick={() => setStatus({ ...status, success: false })} className="btn-primary" style={{ marginTop: '20px' }}>
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name" className="body-medium">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="body-medium">Email Address *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="your@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="body-medium">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    {type === 'service' ? (
                        <div className="form-group">
                            <label htmlFor="service" className="body-medium">Service Needed *</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} required className="form-input">
                                <option value="">Select a service</option>
                                <option value="cnc-service">CNC Machine Service</option>
                                <option value="spares">Spares Supply</option>
                                <option value="robotics">Robotics Maintenance</option>
                                <option value="plc">PLC/HMI/SCADA</option>
                                <option value="manpower">Manpower Support</option>
                            </select>
                        </div>
                    ) : (
                        <div className="form-group">
                            <label htmlFor="subject" className="body-medium">Subject *</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-input" placeholder="How can we help?" />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="message" className="body-medium">Message *</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="form-input" placeholder="Details about your inquiry..."></textarea>
                    </div>

                    {status.error && <p className="error-text">{status.error}</p>}

                    <button type="submit" className="btn-primary" disabled={status.loading} style={{ width: '100%' }}>
                        {status.loading ? 'Sending...' : (
                            <>
                                <Send size={20} />
                                {type === 'service' ? 'Submit Request' : 'Send Message'}
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};
