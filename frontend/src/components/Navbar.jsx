import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between py-5 font-medium'>
        {/* Logo */}
        <img src={assets.logo} className='w-36' alt="Logo" />

        {/* Navigation Links (Desktop) */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <li>
            <NavLink to='/home' className='flex flex-col items-center gap-1'>
              <p>HOME</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
              <p>COLLECTION</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
              <p>ABOUT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
              <p>CONTACT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
          </li>
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

          <div className="group relative">
            <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
            <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-700 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-[20px]" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
          </Link>

          {/* Hamburger Menu Icon for small screens */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu"
          />
        </div>
      </div>

      {/* SliderBar Menu for small screens */}
      {visible && (
        <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-all duration-300 ease-in-out z-50">
          <div className="flex flex-col text-gray-600 h-full">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer border-b"
            >
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
              <p>Back</p>
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b hover:bg-gray-100"
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b hover:bg-gray-100"
              to="/collection"
            >
              Collection
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b hover:bg-gray-100"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b hover:bg-gray-100"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
