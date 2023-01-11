import React from 'react';
import { WineItemInterface } from '../types/main-types';

type SingleItemProps = {
  item: WineItemInterface
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {
  console.log('item--', item);
  return (
    <div>
      <h3>{item.name}</h3>
      <span>{item.type}</span>
      <img />
      <div>
        <button>learn</button>
        <button>shop</button>
      </div>
    </div>
  )
}

export default SingleItem;
