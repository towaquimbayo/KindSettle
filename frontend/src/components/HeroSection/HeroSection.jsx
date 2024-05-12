import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Child Support, Made Easy</h1>
        <p>Your platform for child support mediation. Find fair,<br/>
            straightforward agreements that benefit everyone.</p>
         
        <div className="cta-buttons">
          <button className="cta-button secondary">Start a claim</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
