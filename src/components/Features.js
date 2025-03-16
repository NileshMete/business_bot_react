import React from 'react';
import '../styles/styles.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why Choose BusinessBot?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-brain feature-icon"></i>
            <h3>Advanced NLP</h3>
            <p>Understand complex business queries with precision</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-database feature-icon"></i>
            <h3>Custom Data Integration</h3>
            <p>Seamlessly connect with your business data sources</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-line feature-icon"></i>
            <h3>Real-time Analytics</h3>
            <p>Get instant insights and data-driven recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;