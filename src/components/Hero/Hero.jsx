import React from "react";
import Image1 from "../../assets/hero/sale.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/women/women2.png";
import Slider from "react-slick";
import Popup from "../Popup/Popup";

const ImageList = [
  {
    id: 1,
    title: "75% off on all Products Sale",
    img: Image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum voluptas ullam accusamus accusantium blanditiis doloribus eos vitae laborum laudantium quidem exercitationem cupiditate quae repellat similique dolore, ipsa culpa rerum!",
  },
  {
    id: 2,
    title: "Upto 50% off on all Women's Wear",
    img: Image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum voluptas ullam accusamus accusantium blanditiis doloribus eos vitae laborum laudantium quidem exercitationem cupiditate quae repellat similique dolore, ipsa culpa rerum!",
  },
  {
    id: 3,
    title: "30% off on all Products",
    img: Image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum voluptas ullam accusamus accusantium blanditiis doloribus eos vitae laborum laudantium quidem exercitationem cupiditate quae repellat similique dolore, ipsa culpa rerum!",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseonFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100
     flex justify-center items-center dark:bg-gray-950 dark:text-white
     duration-200 
    "
    >
      {/* background pattern*/}
      <div
        className="h-[700px] w-[700px] bg-primary/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45
        -z-9"
      ></div>
      {/* hero section*/}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/*text content section*/}
                <div
                  className="flex flex-col justify-center gap-4
            pt-12 sm:pt-0 text-center sm:text-left 
            order-2 sm:order-1"
                >
                  <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                    className="text-5xl sm:text-4xl
                        lg:text-6xl font-bold"
                  >
                     {data.title}
                  </h1>
                  <p 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="text-sm lg:text-3xl">{data.description}</p>
                  <div>
                    <button
                    onClick={() => handleOrderPopup()}
                      className="bg-gradient-to-r
                                from-primary to-secondary hover:scale-105
                                duration-200 text-white py-2 px-4 
                                rounded-full "
                    >
                      order Now
                    </button>
                  </div>
                </div>
                {/*image content section*/}
                <div className="order-1 sm:order-2">
                  <div 
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[400px] h-[200px] sm:h-[450px] 
                    sm:w-[450px} sm:scale-105 lg-scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
