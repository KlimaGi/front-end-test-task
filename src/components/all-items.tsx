import React, { useEffect, useState } from 'react';
import { get } from '../plugins/http';
import { WineItemInterface } from '../types/main-types';
import SingleItem from './single-item';
import FilterBlock from './filter-block';

const AllItems: React.FC = () => {

  const [data, setData] = useState<WineItemInterface[]>([]);

  const [filteredData, setFilteredData] = useState<WineItemInterface[]>(data);

  const [filterTypes, setFilterTypes] = useState([]);

  useEffect(() => {
    const allList = async () => {
      const res = await get('./list.json');
      console.log('res', res);
      if (res.length > 0) setData(res);
      if (res.length === 0) console.log('there is no data');
    };
    allList();
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const result = filterTypes.map(type => {
        const filteredData = data.filter(wine => wine.type === type);
        return filteredData;
      }).flat();

      setFilteredData(result);
    }
    console.log('filterTypes', filterTypes);
  }, [filterTypes])

  return (
    <div>
      <FilterBlock filterTypes={filterTypes} setFilterTypes={setFilterTypes} />

      <div className='container'>
        {
          filterTypes.length > 0
            ? filteredData.map((item) => <SingleItem item={item} key={`${item.id}`} />)
            : data.map((item) => <SingleItem item={item} key={`${item.id}`} />)
        }
      </div>

    </div>
  )
}
// todo: filter istraukti i isorini elementa
// todo: learn - shop iveiklinti su react-params
// todo: one item page su react-params = pritaikyti solo elemento parodyma atskiram page
// todo: library pritaikymas su media query skirtingi elementai esant skirtingam dydziui

export default AllItems;
