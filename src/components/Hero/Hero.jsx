// import React from 'react'
// import './Hero.css'
// // import Carousel  from '../Carousel'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import image1 from '../Assests/image1.png'
// import image2 from '../Assests/image2.png'
// import image3 from '../Assests/image3.png'

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// // import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// const Hero = () => {

//   return (
//     <div className='hero'>
//         <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={image1} alt='' /></SwiperSlide>
//         <SwiperSlide><img src={image2} alt='' /></SwiperSlide>
//         <SwiperSlide><img src={image3} alt='' /></SwiperSlide>
//         {/* <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//       </Swiper>
//     </div>
//   )
// }

// export default Hero





import React from 'react'
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
  return (
    <div className='hero'>
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
        <SwiperSlide><img src={image1} alt='' style={{width: '100%', height: '100%', objectFit:"contain"}} /></SwiperSlide>
        <SwiperSlide><img src={image2} alt='' style={{width: '100%', height: '100%', objectFit:"contain"}} /></SwiperSlide>
        <SwiperSlide><img src={image3} alt='' style={{width: '100%', height: '100%', objectFit:"contain"}} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySlider;
