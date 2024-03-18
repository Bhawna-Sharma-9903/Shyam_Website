import React, { useState,useEffect } from 'react'
import './Hero.css'
// import Carousel  from '../Carousel'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../Assests/image1.png'
import image2 from '../Assests/image2.png'
import image3 from '../Assests/image3.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



function MySlider() {

  // const[quote,setquote] = useState([]);
  const fetchQuote= async()=>{
    const data=await fetch('https://shloka.onrender.com/api/v1/bahgavad_gita/random')
    const quote= await data.json();
    console.log(quote[0]);
    // setquote(quote[0])
  }

  useEffect(() =>{
    fetchQuote();
  });

  return (
    <div className='hero'>
      <div className="daily_gyaan">
        <h5>||  jīveṣu karuṇā cāpi maitrī teṣu vidhīyatām ||  - Be compassionate and friendly to all living beings.​ ।</h5>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt='' style={{width: '100%', height: '100%'}} /></SwiperSlide>
        <SwiperSlide><img src={image2} alt='' style={{width: '100%', height: '100%'}} /></SwiperSlide>
        <SwiperSlide><img src={image3} alt='' style={{width: '100%', height: '100%'}} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySlider;
