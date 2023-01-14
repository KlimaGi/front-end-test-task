import React, { useState } from 'react';
import SmallIcon from './small-icon';

type ButtonProp = {
  text: String,
  func: Function
}

const ButtonWithSmallIconRow: React.FC<ButtonProp> = ({ text, func }) => {
  const [color, setColor] = useState('black')
  return (
    <button
      onClick={func}
      onMouseOver={() => setColor('bordo')}
      onMouseLeave={() => setColor('black')}
      className='card__btn'
    >
      <span>{text}</span>
      <SmallIcon color={color} />
    </button>
  )
}

export default ButtonWithSmallIconRow;
