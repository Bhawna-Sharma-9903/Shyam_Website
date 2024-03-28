import React from 'react';
import './Item.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Item = (props) => {
  return (
    <>
    <div className='card' style={{ width: '14.5rem',height:'29rem' }}>
      <img src={props.image} className='card-img-top' alt='' />
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <div className='items-price'>
          <div className='items-price-old'>₹{props.old_price}</div>
          <div className='items-price-new'>₹{props.new_price}</div>
        </div>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href='#' className='btn'>
          ADD TO CART
        </a>
      </div>
    </div></>
    
  );
};

export default Item;
