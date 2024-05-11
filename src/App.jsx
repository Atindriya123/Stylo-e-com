import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Popup from "./components/Popup/Popup";
import Login from "./Pages/Login";
import Kidswear from "./Pages/Kidswear";
import Home from "./Pages/Home";
import Menswear from "./Pages/Manswear";


import {  Route, Routes } from "react-router-dom";
import WomensWear from "./Pages/WomensWear";
import TopRated from "./Pages/TopRated";
import TrendingProducts from "./Pages/TrendingProducts";
import CopyRight from "./components/CopyRight/CopyRight";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-white dark:bg-gray-900
    dark:text-white duration-200"
    >
      <Navbar handleOrderPopup={handleOrderPopup} />
      {/* <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Kidswear" element={<Kidswear />} />
         <Route path="MensWear" element={<Menswear />} />
        <Route path="/WomensWear" element={<WomensWear />} />
        <Route path="/Service" element={<TopRated/>} />
        <Route path="/TrendingProduct" element={<TrendingProducts />} /> 
      </Routes>
      <Footer />
      <CopyRight/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    
    </div>
  );
};

export default App;
