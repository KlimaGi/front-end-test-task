import React, { useState } from 'react';
import SmallIcon from './small-icon';

type ButtonProp = {
  text: String
}

const Button: React.FC<ButtonProp> = ({ text }) => {
  const [color, setColor] = useState('black')
  return (
    <button
      onMouseOver={() => setColor('bordo')}
      onMouseLeave={() => setColor('black')}
      className='card__btn'
    >
      <span>{text}</span>
      <SmallIcon color={color} />
    </button>
  )
}

export default Button;
