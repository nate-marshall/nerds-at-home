import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="fade-in">N E R D S @ H O M E</h1>
        <p className="fade-in">Create a stylish app landing page and highlight all the great things about your product!</p>
        <a href="#" className="btn btn-primary fade-in">Download App</a>
      </div>
    </section>
  );
};

export default HeroSection;
