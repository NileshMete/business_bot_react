import React from 'react';
import '../styles/styles.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"BusinessBot has revolutionized how we access and analyze our data."</p>
            <div className="testimonial-author">John Smith, CEO</div>
          </div>
          <div className="testimonial-card">
            <p>"The custom integration with our CRM has been a game-changer."</p>
            <div className="testimonial-author">Sarah Johnson, CTO</div>
          </div>
          <div className="testimonial-card">
            <p>"Incredibly accurate and easy to set up. Highly recommended!"</p>
            <div className="testimonial-author">Emily Davis, COO</div>
          </div>
          <div className="testimonial-card">
            <p>"The real-time analytics feature has saved us countless hours."</p>
            <div className="testimonial-author">Michael Brown, CFO</div>
          </div>
          <div className="testimonial-card">
            <p>"BusinessBot is a must-have for any data-driven business."</p>
            <div className="testimonial-author">Laura Wilson, CMO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;