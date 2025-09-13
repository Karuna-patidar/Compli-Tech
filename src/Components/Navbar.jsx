import React from 'react'
import { useState } from 'react';
import logo from "../assets/logo.png";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowmenu] = useState(true);
  return (
    <div className="flex flex-wrap justify-between md:items-center text-black p-2 bg-white">
       <img className="w-28" src={logo} alt='logo'></img>
       <ul className={`${ menu ? "block" : "hidden" } mx-10 p-y2 mt-4 font-semibold  p-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
       <a href="#home"><li  className="text-md transition-all duration-300 p-1 md:p-0">Home</li></a>
       <a href ="#about"> <li  className="text-md transition-all duration-300 p-1 md:p-0">About Us</li> </a>
       <a href ="#projects"> <li  className="text-md transition-all duration-300 p-1 md:p-0">Servicesgit add .</li> </a>
       <a href="#contact"> <li  className="text-md transition-all duration-300 p-1 md:p-0">Contact Us</li> </a>
       </ul>
       {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-2 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-2 transition-all duration-300"
          onClick={()=>{openMenu(!menu); setShowmenu(!showMenu);}}
        />
      )}
    </div>
  )
}
export default Navbar
