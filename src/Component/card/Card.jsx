import React, { } from 'react';
import './Card.css'


const Card = ({ heading, detail, color, html, bootstrap, tailwind, nodejs, mongodb, js, react }) => {

  return (
    <div className="card" style={{ borderColor: { color } }}>

      <div className='grid grid-cols-3 mx-auto py-6 gap-6 h-[400px] w-[400px]'>
        
        <img src={html} alt="" />
        <img src={bootstrap} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={tailwind} alt="" />
        <img src={nodejs} alt="" />
        <img src={mongodb} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        
      </div>
    </div>
  );
};

export default Card;