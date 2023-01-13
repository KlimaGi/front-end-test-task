import React from 'react'

type SmallIconProp = {
  color: String
}

const SmallIcon: React.FC<SmallIconProp> = ({ color }) => {
  return (
    <div className={`icon--${color}`} >
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
        <path d="M1.89698 0L0.328232 1.5275L5.42389 6.5L0.328232 11.4725L1.89698 13L8.57251 6.5L1.89698 0Z" />
      </svg>
    </div >
  )
}

export default SmallIcon;
