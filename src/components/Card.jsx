import React from "react";

function Card({ title, description, link, image }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Card;
