import React from 'react';
import FilterButton from './filter-button';

type filterByProp = {
  setFilterTypes: Function,
  filterTypes: string[]
}

const FilterBlock: React.FC<filterByProp> = ({ setFilterTypes, filterTypes }) => {
  const types = ['sweet', 'semi-dry', 'dry'];

  return (
    <div className='d-flex'>
      {
        types.map((type, i) => <FilterButton key={`k-${i}`} text={type} setFilterTypes={setFilterTypes} filterTypes={filterTypes} />)
      }
    </div>
  )
}

export default FilterBlock;
