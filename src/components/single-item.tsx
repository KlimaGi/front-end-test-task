import React, { useState } from 'react';
import { WineItemInterface } from '../types/main-types';
import SmallIcon from './small-icon';


type SingleItemProps = {
  item: WineItemInterface
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {

  const [color, setColor] = useState('black')

  return (
    <div className='card'>
      <h3 className='card__title'>{item.name}</h3>
      <span className='card__type'>{item.type}</span>
      <div className='card__image-box'>
        <img src='assets/vino-1.png' alt='bottle of wine' />
      </div>
      <div className='card__btn-container'>

        <button
          onMouseOver={() => setColor('bordo')}
          onMouseLeave={() => setColor('black')}
          className='card__btn'>
          <span>learn</span>
          <SmallIcon color={color} />
        </button>

        <button
          onMouseOver={() => setColor('bordo')}
          onMouseLeave={() => setColor('black')}
          className='card__btn'
        >
          <span>shop</span>
          <SmallIcon color={color} />
        </button>

      </div>
    </div>
  )
}

export default SingleItem;
