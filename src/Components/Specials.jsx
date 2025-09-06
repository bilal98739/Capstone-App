import React from 'react';
import './Specials.css';
import greekSaladImg from '../asset/greek salad.jpg';
import lemonDessertImg from '../asset/lemon dessert.jpg';

function Specials() {
  const specials = [
    { 
      name: "Greek Salad", 
      description: "Fresh salad with feta cheese", 
      price: "$12",
      image: greekSaladImg
    },
    { 
      name: "Lemon Dessert", 
      description: "Tangy lemon cake", 
      price: "$8",
      image: lemonDessertImg
    },
  ];

  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-list">
        {specials.map((item, index) => (
          <div key={index} className="special-card">
            <img src={item.image} alt={item.name} className="special-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
