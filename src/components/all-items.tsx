import React, { useEffect, useState } from 'react';
import { get } from '../plugins/http';
import { WineItemInterface } from '../types/main-types';
import SingleItem from './single-item';
import FilterButton from './filter-button';

const AllItems: React.FC = () => {
  const [data, setData] = useState<WineItemInterface[]>([]);

  const [filteredData, setFilteredData] = useState<WineItemInterface[]>(data);

  const [filterTypes, setFilterTypes] = useState(['sweet', 'semi-dry']);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const allList = async () => {
      const res = await get('./list.json');
      console.log('res', res);
      if (res.length > 0) setData(res);
      if (res.length === 0) console.log('there is no data');
    };
    allList();
  }, []);
  console.log('data-po-1-eff', data);

  useEffect(() => {
    if (data.length !== 0) {
      console.log('data-eff-2', data);
      console.log('filterTypes', filterTypes);

      const result = filterTypes.map(type => {
        const filteredData = data.filter(wine => wine.type === type);
        return filteredData;
      }).flat();

      console.log('result', result);
      setFilteredData(result);
    }
    console.log('data is null');

  }, [changed])

  console.log('filteredData', filteredData);

  return (
    <div>
      <div className='d-flex'>
        <FilterButton text='dry' />
        <FilterButton text='semi-dry' />
        <FilterButton text='sweet' />
      </div>

      <button onClick={() => setChanged(!changed)}>active</button>

      <div className='container'>
        {
          data && data.map((item) => <SingleItem item={item} key={`${item.id}`} />)
        }

      </div>
      <div className='container'>

        {
          filteredData && filteredData.map((item) => <SingleItem item={item} key={`${item.id}`} />)
        }
      </div>
    </div>
  )
}
// todo: filter istraukti i isorinielementa
// todo: learn - shop iveiklinti su react-params
// todo: one item page su react-params = pritaikyti solo elemento parodyma atskiram page
// todo: library pritaikymas su media query skirtingi elementai esant skirtingam dydziui



export default AllItems;
