import React, { useState } from 'react';

type FilterButtonProp = {
  text: String,
  setFilterTypes: Function,
  filterTypes: String[]
}

const FilterButton: React.FC<FilterButtonProp> = ({ text, setFilterTypes, filterTypes }) => {
  const [toggle, setToggle] = useState(false);
  const color = toggle ? 'bordo' : 'grey';

  const handleClick = () => {
    setToggle(!toggle);

    if (!toggle) {
      filterTypes.push(text);
      setFilterTypes([...filterTypes]);
    } else {
      const arr = filterTypes.filter(item => item !== text);
      setFilterTypes([...arr]);
    }

  }


  return (
    <button
      onClick={() => handleClick()}
      className='check-btn'
    >
      <div className={`check-div check-div--${color}`}></div>
      <span className='check-btn__title'>{text}</span>
    </button>
  )
}

export default FilterButton;
