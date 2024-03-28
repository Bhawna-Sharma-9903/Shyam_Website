import React, { useEffect } from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../Assests/image1.png';
import image2 from '../Assests/image2.png';
import image3 from '../Assests/image3.png';

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
        <h6>||  jīveṣu karuṇā cāpi maitrī teṣu vidhīyatām ||  - Be compassionate and friendly to all living beings.​ ।</h6>
      </div>
     <Carousel>
      <Carousel.Item>
        <img src={image1} alt="ganesh chaturthi" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="diwali" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="home decor" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MySlider;
