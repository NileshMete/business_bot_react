import React from 'react';
import '../styles/styles.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img
        src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D"
        alt="AI Chatbot"
      />
      <div className="hero-content">
        <h1>Transform Your Business with AI-Powered Insights</h1>
        <p>Your custom business data, now accessible through intelligent conversation</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;