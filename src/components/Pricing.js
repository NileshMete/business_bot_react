import React from 'react';
import '../styles/styles.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-cards">
          <div className="price-card">
            <h3>Starter</h3>
            <div className="price">₹149/mo</div>
            <ul>
              <li>Basic Features</li>
              <li>5 Users</li>
              <li>24/7 Support</li>
            </ul>
            <a href="#contact" className="cta-button">Choose Plan</a>
          </div>
          <div className="price-card">
            <h3>Professional</h3>
            <div className="price">₹499/mo</div>
            <ul>
              <li>Advanced Features</li>
              <li>15 Users</li>
              <li>Priority Support</li>
            </ul>
            <a href="#contact" className="cta-button">Choose Plan</a>
          </div>
          <div className="price-card">
            <h3>Enterprise</h3>
            <div className="price">₹899/mo</div>
            <ul>
              <li>Unlimited Features</li>
              <li>Unlimited Users</li>
              <li>Dedicated Account Manager</li>
            </ul>
            <a href="#contact" className="cta-button">Choose Plan</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;