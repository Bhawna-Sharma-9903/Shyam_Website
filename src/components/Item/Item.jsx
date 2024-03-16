import React from 'react'
import './Item.css'

const item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt='' />
      <p>{props.name}</p>
      <div className='items-price'>
        <div className="items-price-new">
            {props.new_price}
        </div>
        <div className="items-price-old">
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default item
