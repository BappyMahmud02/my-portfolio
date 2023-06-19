import React from 'react';
import './Card.css'

const Card = ({ emoji, heading, detail, color, html, bootstrap, tailwind, nodejs, mongodb, js, react }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <img src={html} alt="" />
      <img src={bootstrap} alt="" />
      <img src={js} alt="" />
      <img src={react} alt="" />
      <img src={tailwind} alt="" />
      <img src={nodejs} alt="" />
      <img src={mongodb} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;