import React from 'react';
import './Card.css';

const Card = ({cardInfo}) => {
  const { name, date, number, time, id } = cardInfo;
  return(
    <div className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{number}</p>
      <p>{time}</p>
    </div>
  )
}

export default Card;