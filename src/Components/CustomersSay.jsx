import React from 'react';
import './CustomersSay.css';

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>"Amazing food and cozy atmosphere!"</p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial">
          <p>"Best Mediterranean cuisine in town."</p>
          <span>- Jane Smith</span>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
