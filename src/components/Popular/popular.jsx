import React from 'react'
import './popular.css'
import products from '../Assests/Data'
import Item from '../Item/Item';

const popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN STORE</h1>
      <hr />
      <div className="popular-item">
        {products.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_item={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default popular
