import React from 'react'
import { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowmenu] = useState(true);
  return (
    <div className="flex flex-wrap justify-between md:items-center text-white p-2 bg-slate-900">
       <span className="text-3xl px-8 font-bold">Protfolio</span>
       <ul className={`${ menu ? "block" : "hidden" } mx-10 p-y2 mt-4 font-semibold  p-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
       <a href="#home"><li  className="text-md transition-all duration-300 p-1 md:p-0">Home</li></a>
       <a href ="#about"> <li  className="text-md transition-all duration-300 p-1 md:p-0">About</li> </a>
       <a href ="#projects"> <li  className="text-md transition-all duration-300 p-1 md:p-0">Projects</li> </a>
       <a href="#contact"> <li  className="text-md transition-all duration-300 p-1 md:p-0">Contact</li> </a>
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
