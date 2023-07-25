"use client";
// import React, { useState } from "react";
// import Image from "next/image";
import logo from "../../public/assets/logo-2.png";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => {
//     console.log("Mobile button clicked");
//     console.log("mobileMenuOpen:", mobileMenuOpen);
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <nav className="bg-white">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div>
//           <Link href="/" passHref>
//             <div className="cursor-pointer">
//               <Image src={logo} alt="Logo" width={100} height={100} />
//             </div>
//           </Link>
//         </div>
//         {/* Mobile Button */}
//         <div className="md:hidden">
//           <div onClick={() => alert("backeb")}>
//             <button id="myBtn" className="pr-5">
//               {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
//           <ul className="flex flex-col space-y-6">
//             <li>
//               <Link href="/" passHref>
//                 <span className="text-black">Navbar</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" passHref>
//                 <span className="text-black">Teenused</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/booking" passHref>
//                 <span className="text-black">Broneerimine</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex flex-grow justify-center">
//           <ul className="flex space-x-6">
//             <li>
//               <Link className="text-black" href="/" passHref>
//                 Avaleht
//               </Link>
//             </li>
//             <li>
//               <Link className="text-black" href="/services" passHref>
//                 Teenused
//               </Link>
//             </li>
//             <li>
//               <Link className="text-black" href="/booking" passHref>
//                 Broneerimine
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";

function Navbar1() {
  const handleClick = () => {
    console.log("navbar before click:", navbar);
    setNavbar(!navbar);
    console.log("navbar after click:", !navbar);
  };
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white top-0 left-0 right-0 z-10">
        <div className="flex align-center "></div>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              {/* <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
              </Link> */}
              <div className="flex">
                <AiFillInstagram size={30} color="black" />
                <TbMailFilled size={30} />
              </div>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-black-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <FaBars size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <Link className="ml-5" href="/">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-yellow-600  border-yellow-900  md:hover:text-yellow-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-400  border-black  md:hover:text-yellow-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Avaleht
                  </Link>
                </li>
                <li
                  className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-400  border-yellow
                -900  md:hover:text-yellow-600 md:hover:bg-transparent"
                >
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    Teenused
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-400  border-yellow-900  md:hover:text-yellow-600 md:hover:bg-transparent">
                  <Link href="/booking" onClick={() => setNavbar(!navbar)}>
                    Broneerimine
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <AiOutlineSearch className="mr-3" size={25} />
            <AiOutlineShoppingCart className="mr-3" size={25} />
            <BiSolidUser className="mr-3" size={25} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
