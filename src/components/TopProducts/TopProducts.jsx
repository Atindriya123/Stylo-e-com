import React from 'react';
import Img1 from "../../assets/shirt/shirt1.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import {FaStar} from "react-icons/fa";




const ProductsData = [
    {
      id: 1,
      img:Img1,
      title: "casual wear",
      description: "lorem Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      id: 2,
      img:Img2,
      title: " Printed shirt",
      description: "lorem Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      id: 3,
      img:Img3,
      title: "women wear",
      description: "lorem Lorem ipsum dolor sit amet consectetur adipisicing."
    },
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container'>
            {/*Header section*/}

            <div
              className="text-left mb-24 
         "
        >
          <p data-aos="fadeup"className="text-sm text-primary">Top Rated Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-color-black">Best Products</h1>
          <p  data-aos="fade-up"className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            expedita minima iure.
          </p>
        </div>
        {/*Body section*/}
        <div className='grid grid-cols-1 sm:grid-cols-3
                    md:-cols-3 gap-20 md:gap-5 place-items-center'>
            {
                ProductsData.map((data,index)=>(
                    <div 
                    key= {index}
                    data-aos="zoom-in"
                    className='rounded-2xl bg-white dark:bg-gray-800
                    hover:bg-black/80 dark:hover:bg-primary
                    hover:text-white relative shadow-xl
                    duration-300 group max-w-[300px]'>
                      {/*image section*/}
                       <div className='h-[200px]'>
                         <img src={data.img} alt="" 
                         className='max-w-[140px] block mx-auto
                         transform-translate-y-20 group-hover:scale-105 duration-300
                         drop-shadow-md'
                         />
                       </div >
                       {/* details section*/}
                       <div className='p-4 text-center items-center
                       justify-center gap-1'>
                        {/*star rating*/}
                        <div className='w-full flex justify-center' >
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-yellow-500'/>
                          <FaStar className='text-yellow-500'/>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p
                        className='text-gray-500 group-hover:text-white 
                        duration-300 text-sm line-clamp-2'
                        >{data.description}</p>
                        <button className='bg-primary hover:scale-105
                        duration-300 text-white py-1 px-4
                        group-hover:text-primary rounded-2xl '
                        onClick={handleOrderPopup}
                        >
                          Order Now
                        </button>

                       </div>
                    </div>
                ))
            }
        </div>

        </div>
    </div>
  )
}

export default TopProducts