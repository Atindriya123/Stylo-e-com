import React from 'react'
import BannerImg from "../../assets/banner.png";
import {GrSecure} from "react-icons/gr";
import { FaTruckFast } from "react-icons/fa6";
//import {GiFoodTruck} from "react-icons/gi"

const Banner = () => {
  return (
    <div className='min-h-[550px] flex
    justify-center items-center py-12
    sm:py-0'>
        <div className='container'>
           <div className='grid grid-cols-1 
           sm:grid-cols-2 gap-6 items-center'>
            {/*image section*/}
              <div data-aos="zoom-in ">
              <img src={BannerImg} alt="" 
              className='max-w-[400px] h-[350px] pt-4 
              mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
              
              /> 
              </div>
            {/* text details section*/}
            <div className='flex flex-col justify-center
            gap-6 sm:pt-0'>
               
               <h1
               className='text-3xl sm:text-4xl font-bold'
               >Summer Sale upto 50% off</h1>
               <p className='text-sm text-gray-500
               tracking-wide leading-5'>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Cum dicta deserunt similique 
                quos dolore id nobis dolor. Fugit facere magni 
                exercitationem doloremque iste sapiente
                 iusto, quaerat tempora quis omnis eveniet?</p>
                 <div className='flex flex-col gap-4'>
                  <div
                  data-aos="fade-up" 
                  className='flex items-center  gap-6'
                  >
                    <GrSecure
                    className='text-4xl h-12 w-12 shadow-sm 
                    p-4 rounded-full bg-violet-400'
                    />
                    <p>Quality Products</p>
                  </div>
                  <div data-aos="fade-up" className='flex
                  items-center gap-6'>
                  <FaTruckFast className='text-4xl h-12 w-12 shadow-sm p-4
                  rounded-full bg-orange-400
                  dark:bg-orange-500'/>
                    <p>Fast Delivery</p>
                  </div>
                  
                  <div
                  data-aos="fade-up" 
                  className='flex items-center  gap-6'
                  >
                    <GrSecure
                    className='text-4xl h-12 w-12 shadow-sm 
                    p-4 rounded-full bg-green-400'
                    />
                    <p>Easy Payment</p>
                  </div>
                  <div data-aos="fade-up" className='flex
                  items-center gap-6'>
                  <FaTruckFast className='text-4xl h-12 w-12 shadow-sm p-4
                  rounded-full bg-purple-800
                  dark:bg-orange-500'/>
                    <p>Get offer</p>
                  </div>
                 </div>
               </div> 
            </div>
        </div>
    </div>
  )
}

export default Banner