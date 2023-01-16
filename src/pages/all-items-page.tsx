import React, { useContext, useEffect, useState } from 'react';
import { get } from '../plugins/http';
import { WineItemInterface } from '../types/main-types';
import SingleItem from '../components/single-item/single-item';
import FilterBlock from '../components/filter-block/filter-block';
import MainContext from '../context/main-context';

const AllItemsPage: React.FC = () => {
  const { items, setItems } = useContext(MainContext);

  const [filteredData, setFilteredData] = useState<WineItemInterface[]>(items);

  const [filterTypes, setFilterTypes] = useState([]);

  useEffect(() => {
    const allList = async () => {
      const res = await get('./list.json');

      if (res.length > 0) setItems(res);
      if (res.length === 0) console.log('there is no data');
    };
    allList();
  }, []);

  useEffect(() => {
    if (items.length !== 0) {
      const result = filterTypes.map(type => {
        const filteredData = items.filter((wine: WineItemInterface) => wine.type === type);
        return filteredData;
      }).flat();

      setFilteredData(result);
    }
  }, [filterTypes])

  return (
    <div>
      <FilterBlock filterTypes={filterTypes} setFilterTypes={setFilterTypes} />

      <div className='container'>
        {
          filterTypes.length > 0
            ? filteredData.map((item) => <SingleItem item={item} key={`${item.id}`} />)
            : items.map((item: WineItemInterface) => <SingleItem item={item} key={`${item.id}`} />)
        }
      </div>

    </div>
  )
}

// todo: one item page su react-params = pritaikyti solo elemento parodyma atskiram page
// todo: library pritaikymas su media query skirtingi elementai esant skirtingam dydziui

export default AllItemsPage;
