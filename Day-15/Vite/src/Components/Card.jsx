import React from "react";
import "./Card.css";

const Card = ({ title, price, thumbnail }) => {
  return (
    <div className="container">
    <div className="card">
      <img src={thumbnail} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </div>
    </div>
  );
};

export default Card;