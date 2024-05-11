

import { React, useState } from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown,FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { useState } from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/Home",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/Service",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/KidsWear",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/MensWear",
    submenu: [
      {
        id: 1,
        name: "Trending Products",
        link: "/Trending Products",
      },
      {
        id: 2,
        name: "Best Selling",
        link: "/Best Selling",
      },
      {
        id: 3,
        name: "Top Rated",
        link: "/Top Rated",
      },
    ],
  },
  {
    id: 5,
    name: "Womens Wear",
    link: "/WomensWear",
  },

  {
    id: 6,
    name: "Log in",
    link: "/Login",
  },
  {
    id: 7,
    name: "Trending",
    link: "#",
    submenu: [
      {
        id: 1,
        name: "Trending Products",
        link: "/Trending Products",
      },
      {
        id: 2,
        name: "Best Selling",
        link: "/Best Selling",
      },
      {
        id: 3,
        name: "Top Rated",
        link: "/Top Rated",
      },
    ],
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobilemenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text_white duration-200 relative z-40">
      {/*upper navbar*/}
      <div className="bg-primary/60 py-3">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Stylo
            </Link>
          </div>
          {/* Mobile menu button*/}

          <div className="block sm:hidden">
          <button onClick={toggleMobilemenu}>
            {isMobileMenuOpen?<FaTimes/> : <FaBars/>}

          </button>
          </div>

          {/* search bar and order button*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block md:5">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute w-7 mb- top1/2 -translate-y-1/2  right-3 bottom-0" />
            </div>
          </div>
          {/*order button*/}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
          </button>
          {/*Darkmode*/}
          <div>
            <DarkMode />
          </div>

        </div>
      </div>
      {/*Mobile Menu*/}

      {/* lower Navbar*/}
      <div className="flex justify-center text-gray-800">
        <ul className="sm:flex hidden items-center gap-4 text-white  ">
          {/* {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200 text-gray-800"
              >
                {data.name}
              </Link>
            </li>
          ))} */}
          {/*Simple Dropdown and Links*/}
          {Menu.map((data, index) => (
            <li className="group relative cursor-pointer" key={data.id}>
              <div className="flex items-center gap-[2px] py-2">
                <Link
                  to={data.link}
                  className="inline-block px-4 hover:text-primary duration-200 text-gray-800 dark:text-white"
                >
                  {data.name}
                </Link>
                {data.submenu && (
                  <span>
                    <FaCaretDown className="transition-all duration-200 text-black dark:text-white group-hover:rotate-180" />
                  </span>
                )}
              </div>
              {data.submenu && (
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {data.submenu.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          to={item.link}
                          className="inline-block w-full rounded-md p-3 hover: bg-primary/10"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </li>
          ))}
        </ul>
      </div>
    </div>

  );
 };

export default Navbar;

// import React from "react";
// import Logo from "../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import DarkMode from "./DarkMode";

// import { FaCaretDown } from "react-icons/fa";

// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/Home",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/Service",
//   },
//   {
//     id: 3,
//     name: "Kids Wear",
//     link: "/#",
//   },
//   {
//     id: 4,
//     name: "Mens Wear",
//     link: "/#",
//   },
//   {
//     id: 5,
//     name: "Womens Wear",
//     link: "/#",
//   },
//   {
//     id: 6,
//     name: "Sign up",
//     link: "/#",
//   },
//   {
//     id: 6,
//     name: "Log in",
//     link: "/Login",
//   },
// ];

// const DropdownLinks =[
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#"
//   }
// ]

// const Navbar = ({handleOrderPopup}) => {
//   return (
//     <div
//       className="shadow-md bg-white
//     dark:bg-gray-900 dark:text_white duration-200
//     relative z-40"
//     >
//       {/*upper navbar*/}
//       <div className="bg-primary/40 py-3">
//         <div
//           className="container flex justify-between
//           items-center"
//         >
//           <div>
//             <a
//               href="#"
//               className="font-bold
//                 text-2xl sm:text-3xl flex gap-2"
//             >
//               <img src={Logo} alt="Logo" className="w-10 uppercase" />
//               Stylo
//             </a>
//           </div>
//           {/* search bar and order button*/}
//           <div
//             className="flex justify-between
//             items-center gap-4  "
//           >
//             <div
//               className="relative group hidden
//                 sm:block md:5"
//             >
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w[200px]
//                     group-hover:w-[300px] transition-all
//                     duration-300 rounded-full border
//                     border-gray-300 px-2 py-1 focus:outline-none
//                     focus:border-1 focus:border-primary
//                     dark:border-gray-500
//                     dark:bg-gray-800
//                       "
//               />
//               <IoMdSearch
//                 className="text-gray-500
//                     group-hover:text-primary absolute w-7 mb- top1/2 -translate-y-1/2  right-3 bottom-0 "
//               />
//             </div>
//           </div>
//           {/*order button*/}
//           <button
//             onClick={() => handleOrderPopup()}
//             className="bg-gradient-to-r from-primary
//             to-secondary transition-all duration-200
//             text-white py-1 px-4 rounded-full flex
//             items-center gap-3 group "
//           >
//             <span
//               className="group-hover:block
//               hidden transition-all duration-200"
//             >
//               Order
//             </span>
//             <FaCartShopping
//               className="text-xl drop-shadow-sm
//                 cursor-pointer"
//             />
//           </button>
//           {/*Darkmode*/}
//           <div>
//             <DarkMode />
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar*/}
//       <div className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4 ">
//           {Menu.map((data) => (
//             <li  key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary
//             duration-200 text-gray-800"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/*Simple Dropdown and Links*/}
//           <li className="group relative
//           cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown
//                   className="transition-all
//               duration-200
//               group-hover:rotate-180"
//                 />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden
//             group-hover:block w-[150px] rounded-md
//             bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                     href={data.link}
//                     className="inline-block w-full
//                     rounded-md p-3
//                     hover: bg-primary/10 "
//                     >{data.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
