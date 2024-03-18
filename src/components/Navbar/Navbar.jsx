import React, { useState } from 'react'
import './Navbar.css'
import ShyamLogo from '../Assests/ShyamLogo.svg'
// import search from '../Assests/search_icon.svg'
// import user from '../Assests/profile_icon.svg'
import cart from '../Assests/Cart_icon.svg'
// import close from '../Assests/close.svg'
import {Link} from 'react-router-dom'



const Navbar = () => {

  const [menu, setMenu] =  useState("home");
  // const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">

      <img src={ShyamLogo} alt="Shyam Logo" className="navbar-logo" /> 
      
      <ul className="nav-list">

        <li onClick={() => {setMenu("home")}} className="nav-item" >
          <Link to="/" style={menu === "home" ? { color: "#A63030" } : { color: "black" }}>HOME</Link>
        </li>
        <li onClick={() => {setMenu("new")}} className="nav-item">
          <Link to= "/new" style={menu === "new" ? { color: "#A63030" } : { color: "black" }}>NEW </Link> 
        </li>
        <li onClick={() => {setMenu("daily_items")}} className="nav-item flexible-item"> 
          <Link to="/daily_items" style={menu === "daily_items" ? { color: "#A63030" } : { color: "black" }}>DAILY ITEMS </Link>
        </li>
        <li onClick={() => {setMenu("festivals")}} className="nav-item">
          <Link to= "/festivals" style={menu === "festivals" ? { color: "#A63030" } : { color: "black" }}>FESTIVALS </Link>
        </li>
        <li onClick={() => {setMenu("healing_items")}} className="nav-item flexible-item">
          <Link to="/healing_items" style={menu === "healing_items" ? { color: "#A63030" } : { color: "black" }}>HEALING ITEMS </Link></li>
        <li onClick={() => {setMenu("about_us")}} className="nav-item">
          <Link to="/about" style={menu === "about_us" ? { color: "#A63030" } : { color: "black" }}>ABOUT US</Link>
        </li>

      </ul>


      <div className="nav-icons">
         <Link to="/login_signUp"><button className="login-button">Login</button></Link>

          {/* <img className="icon-search" src={search} alt="Search Icon" />
          <img className="icon-user" src ={user} alt="User Icon" /> */}
        
          <Link to="/Cart"><img className="icon-cart" src={cart} alt="Cart Icon" /></Link>
          <div className="cart_count">0</div>
      </div>
      
         {/* <div  className = 'sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={()=> setToggle(!toggle)}
           /> */}
           {/* </div> */}


    </nav>
  );
}

export default Navbar


