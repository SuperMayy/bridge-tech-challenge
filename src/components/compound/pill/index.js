import React, { useState } from 'react'
import Tick from '../../atom/Tick'

const Pill = ({title, price, event, value, action }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    const amount = isSelected ? 0 : value;
    action(event, amount)
    setIsSelected(!isSelected)
  }

  return (
    <div className={`pill ${isSelected && 'selected'}`} onClick={handleClick}>
        <Tick />
        <p className="pill-title">{title}</p>
        <div className="price">
          <p className="estimate">ESTIMATE</p>
          <p className="price-number">£{price}</p>
        </div>
    </div>
  )
}

export default Pill