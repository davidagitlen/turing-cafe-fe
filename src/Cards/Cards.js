import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({cardsArray}) => {
  let cardList = cardsArray.map(card => <Card cardInfo={card} key={card.id}/>)
  
  return (
    <>
      {cardList}
    </>
  )
}

export default Cards;