
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product'
import Categories  from './Pages/Categories'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'  ;



function App() {
  return (
    <>
    <div className="container">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<Categories category='new'/>}/>
          <Route path='/daily_items' element={<Categories category= 'daily_items'/>}/>
          <Route path='/festivals' element={<Categories category= 'festivals'/>}/>
          <Route path='/healing_items' element={<Categories category= 'healing_items'/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/login_signUp' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </BrowserRouter>

      
  
      </div>
    </>
  );
}

export default App;
