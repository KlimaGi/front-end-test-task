import React, { useEffect, useState } from 'react';
import { get } from '../plugins/http';
import { WineItemInterface } from '../types/main-types';
import SingleItem from './single-item';

const AllItems: React.FC = () => {
  const [data, setData] = useState<WineItemInterface[] | null>(null);

  useEffect(() => {
    const allList = async () => {
      const res = await get('./list.json');
      console.log('res', res);
      if (res.length > 0) setData(res);
      if (res.length === 0) console.log('there is no data');
    };
    allList();
  }, []);

  return (
    <div className='container'>
      {
        data && data.map((item) => <SingleItem item={item} key={`${item.id}`} />)
      }
    </div>
  )
}

export default AllItems;
