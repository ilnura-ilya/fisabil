import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi';
import Home from './Home';
import AboutUs from './AboutUs';
import Business from './Business';
import ContactUs from './ContactUs';
import Shop from './Shop';
import Login from './Login';
import Cart from '../Cart/Cart';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import image from '../../logo.png'
import { useSelector } from 'react-redux';
import { getTotalArticles } from '../../redux/cartSlice';
import { useAuth0 } from '@auth0/auth0-react';


const Navigation = () => {

   const [isMobile, setIsMobile] = useState(false);
   const [isActive, setIsActive] = useState(true);
   const totalItems = useSelector(getTotalArticles);
   const [showTopBtn, setShowTopBtn] = useState(false);
   const {isLoading} = useAuth0();
  

useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
          setIsActive(true)
      } else {
          setShowTopBtn(false);
      
      }
  });
}, [showTopBtn]);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};

const toggleLogin = () => {
  setIsActive(!isActive);
}

const toggleMobile = () => {
  setIsMobile(false);
  setIsActive(true);
}

if (isLoading) return <h1>Wait....</h1>
  return (
    <div>
      <Router>
        <nav className='nav'>
           <Link to="/" className="brandName" onClick = {toggleMobile}>
           <img src={image} alt="logo" className='logo'/>
           </Link>

          <button className='hamburger'  onClick={() => {
          setIsMobile(!isMobile);
        }}>{isMobile ? <RiCloseLine/> : <RiMenu2Line/>}</button>
          <div className={
          isMobile ? "navigationMenu expanded" : "navigationMenu"
        } onClick = {() => setIsMobile(false)}>
          
             <ul>
             <Link to="/" className="link"  onClick = {toggleMobile}>
            Главная
          </Link>
          <Link to="/shop" className="link"  onClick = {toggleMobile}>
            Магазин
          </Link>
          <Link to="/aboutUs"  className="link"  onClick = {toggleMobile}>
            О Компании
          </Link>
          <Link to="/business" className="link"  onClick = {toggleMobile}>
            Для бизнеса
          </Link>
          <Link to="/contact"  className="link"  onClick = {toggleMobile}>
            Контакты
          </Link>
          
          </ul>
          </div>
         
          <div className="cartMenu" onClick = {() => setIsMobile(false)}>
            <div className="loginLink link" onClick = {toggleLogin}>
              <HiOutlineUser /> </div>
              <div className={isActive ? 'loginMenu close' : 'loginMenu open'}>
                <Login />
              </div>
              
            
          </div>
        
            <Link to="/cart" className="cartMenu" onClick = {toggleMobile}>
            <button className="cartLink link">
              
              <span className='cartIcon'><HiOutlineShoppingBag /></span>
              {totalItems > 0 &&
              <span className='totalItemsCart'>{totalItems}</span>
              }
            </button>
          </Link>
          
            
         
          
        </nav>

        <Routes>
          <Route path="/" element={<Home goToTop = {goToTop} showTopBtn = {showTopBtn} />} />
          <Route path="/shop" element={<Shop goToTop = {goToTop} showTopBtn = {showTopBtn} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/business" element={<Business  goToTop = {goToTop} showTopBtn = {showTopBtn} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
         
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
