 import React, { useState } from 'react'
 import { assets } from '../../assets/assets'
 const Navbar = () => {
   
   const [menu,setMenu] = useState("home")
   return (
     <div className="Navbar flex items-center justify-between p-4 bg-white shadow-md">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="hidden md:flex list-none gap-5 text-18px text-blue-500">
        <li onClick={() => setMenu("home")}   className={`cursor-pointer hover:border-b-2 border-blue-600 pb-1 ${menu === "home" ? "border-b-2" : ""}`}>Home</li>
        <li  onClick={() => setMenu("menu")} className={`cursor-pointer hover:border-b-2 border-blue-600 pb-1 ${menu === "menu" ? "border-b-2" : ""}`}> Menu</li>
        <li  onClick={() => setMenu("mobile-app")} className={`cursor-pointer hover:border-b-2 border-blue-600 pb-1 ${menu === "mobile-app" ? "border-b-2" : ""}`}>Mobile-App</li>
        <li  onClick={() => setMenu("contact-us")} className={`cursor-pointer hover:border-b-2 border-blue-600 pb-1 ${menu === "contact-us" ? "border-b-2" : ""}`}>Contact-Us</li>
      </ul>
      <div className='navbar-right flex items-center gap-6 '>
        <img src={assets.search_icon} alt='' className="w-5 cursor-pointer"></img>
        <div className="basket-icon relative">
          <img src={assets.basket_icon} alt='' className="w-5 cursor-pointer" />
          <div className="absolute top-[-6px] right-[-6px] w-[10px] h-[10px] bg-red-500 rounded-full"></div>
        </div>

        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition">Login</button>
      </div>

    </div>
   )
 }
 
 export default Navbar