import React from 'react';
import './Hero.css';

export const Hero = ({ title, subtitle, badgeText, badgeValue, children, backgroundImage }) => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content fade-up">
                <h1 className="display-huge">{title}</h1>
                {(badgeText || badgeValue) && (
                    <div className="gstin-hero-badge">
                        {badgeText && <span className="gstin-label">{badgeText}</span>}
                        {badgeValue && <span className="gstin-number">{badgeValue}</span>}
                    </div>
                )}
                {subtitle && <p className="hero-subtitle body-large">{subtitle}</p>}
                {children}
            </div>
        </section>
    );
};
