import React, { useState } from 'react';

type FilterButtonProp = {
  text: String
}

const FilterButton: React.FC<FilterButtonProp> = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  const color = toggle ? 'bordo' : 'grey';

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className='check-btn'
    >
      <div className={`check-div check-div--${color}`}></div>
      <span className='check-btn__title'>{text}</span>
    </button>
  )
}

export default FilterButton;
