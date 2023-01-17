import React, { useState } from 'react';
import '../styles/carousel.css';

type BigIconProp = {
  side: string,
  color: string
}

const BigIcon: React.FC<BigIconProp> = ({ color, side }) => {
  const arrowStyle = side === 'left' ? '' : ' arrow--right';


  return (
    <div
      className={`arrow ${arrowStyle} icon--${color}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
        <path d="M2.66397 0L0 2.7025L8.65317 11.5L0 20.2975L2.66397 23L14 11.5L2.66397 0Z" />
      </svg>
    </div>
  )
}

export default BigIcon
