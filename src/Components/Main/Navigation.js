import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Home from './Home';
import AboutUs from './AboutUs';
import Business from './Business';
import ContactUs from './ContactUs';
import Shop from './Shop';
import Cart from '../Cart/Cart';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import image from '../../logo.png'
import { useSelector } from 'react-redux';
import { getTotalArticles } from '../../redux/cartSlice';


const Navigation = () => {

   const [isMobile, setIsMobile] = useState(false);
   const totalItems = useSelector(getTotalArticles);
   const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
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



  return (
    <div className='main'>
      <Router>
        <nav className='nav'>
           <Link to="/" className="brandName" onClick = {() => setIsMobile(false)}>
          
           <img src={image} alt="logo" className='logo'/>
         
          </Link>
          <button className='hamburger'  onClick={() => {
          setIsMobile(!isMobile);
        }}>{isMobile ? <RiCloseLine/> : <RiMenu2Line/>}</button>
          <div className={
          isMobile ? "navigationMenu expanded" : "navigationMenu"
        } onClick = {() => setIsMobile(false)}>
             <ul>
             <Link to="/" className="link">
            Главная
          </Link>
          <Link to="/shop"className="link">
            Магазин
          </Link>
          <Link to="/aboutUs"  className="link">
            О Компании
          </Link>
          <Link to="/business" className="link">
            Для бизнеса
          </Link>
          <Link to="/contact"  className="link">
            Контакты
          </Link>
          
          </ul>
          </div>
         
            <Link to="/cart" className="cartMenu" onClick = {() => setIsMobile(false)}>
            <span className="cartLink link">
              <HiOutlineShoppingBag /> {totalItems > 0 &&
              <span>{totalItems}</span>
              } 
            </span>
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
