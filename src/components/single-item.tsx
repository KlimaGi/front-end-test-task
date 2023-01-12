import React from 'react';
import { WineItemInterface } from '../types/main-types';


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
        <button className='btn'>
          <span>learn</span>
          <span className='icon icon-row'></span>
        </button>
        <button className='grey'>shop</button>
      </div>
    </div>
  )
}

export default SingleItem;
