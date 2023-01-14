import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WineItemInterface } from '../../types/main-types';
import ButtonWithSmallIconRow from './button-with-small-icon-row';

type SingleItemProps = {
  item: WineItemInterface
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {
  const nav = useNavigate();
  const handleLearnClick = () => nav(`/singleItem/${item.id}/learn`);
  const handleShopClick = () => nav(`/singleItem/${item.id}/shop`);

  return (
    <div className='card'>
      <h3 className='card__title'>{item.name}</h3>
      <span className='card__type'>{item.type}</span>
      <div className='card__image-box'>
        <img src='assets/vino-1.png' alt='bottle of wine' />
      </div>
      <div className='card__btn-container'>
        <ButtonWithSmallIconRow text='learn' func={handleLearnClick} />
        <ButtonWithSmallIconRow text='shop' func={handleShopClick} />
      </div>
    </div>
  )
}

export default SingleItem;
