import React, { useContext, useEffect, useState } from 'react';
import { get } from '../plugins/http';
import { WineItemInterface } from '../types/main-types';
import FilterBlock from '../components/filter-block/filter-block';
import MainContext from '../context/main-context';
import CardSlider from '../components/card-slider';

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
            ? <CardSlider slides={filteredData} />
            : <CardSlider slides={items} />
        }
      </div>

    </div>
  )
}


// todo: library pritaikymas su media query skirtingi elementai esant skirtingam dydziui

export default AllItemsPage;
