import React from 'react';
import { WineItemInterface } from '../types/main-types';
import Button from './button';

type SingleItemProps = {
  item: WineItemInterface
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {
  return (
    <div className='card'>
      <h3 className='card__title'>{item.name}</h3>
      <span className='card__type'>{item.type}</span>
      <div className='card__image-box'>
        <img src='assets/vino-1.png' alt='bottle of wine' />
      </div>
      <div className='card__btn-container'>
        <Button text='learn' />
        <Button text='shop' />
      </div>
    </div>
  )
}

export default SingleItem;
