import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <img alt="card" src={props.cardImgSrc} />
      <span>{props.brandName}: {props.points}</span>
    </div>
  );
};

export default Card
