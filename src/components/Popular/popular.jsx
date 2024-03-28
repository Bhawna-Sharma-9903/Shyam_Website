import React from 'react'
import './popular.css'
import products from '../Assests/Data'
import Item from '../Item/Item';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const popular = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]};
  return (
      
      
      <div className="popular-item">
        <div className="heading">
          <h2>POPULAR IN STORE</h2>
           <hr />
        </div>
        <div className="pop-products">
          <>
            {products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.itemName} image={item.image} new_price={item.newPrice} old_price={item.oldPrice}/>
        })}
          </>
          
        </div>
        
      </div>
  
  )
}



export default popular

