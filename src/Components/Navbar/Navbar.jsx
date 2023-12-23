import React, { useEffect, useState } from 'react';
import './Navbar.css'
import {
    Navbar,
  
    Typography,

    IconButton,
    Collapse,
  } from "@material-tailwind/react";
 import logo from '../../../public/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Cart from '../Cart/Cart';
import { useCartStore } from '../../../store/productStore';
const NavbarContainer = () => {
  const path = useLocation().pathname;
    const [openNav, setOpenNav] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const cartItems = useCartStore(state => state.cartItems)
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1"
          >
            <Link to='/product'  className={`flex items-center ${path ==='/' || path==='/product'?"text-[#335dff]":""}`}>
              Product
            </Link>
          </Typography>
        
        </ul>
      );
    return (
        <Navbar className="sticky top-0 z-10 h-max w-[100%] px-4 py-2 lg:px-8 lg:py-4   text-gray-900 max-w-[1170px] mx-auto font-[700] bg-[#f8fafc] rounded-[10px]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 max-w-[180px] w-[100%]"
          >
              <Link to='/'>
              <img src={logo} className=' object-cover' />
                </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-2">
              <Link to='/login'
                className=" z-0 hidden lg:inline-block bg-[#335dff] text-[16px] text-white font-[500] py-[9px] px-[25px] rounded-[25px] relative button_hover overflow-hidden"
              >
                <span>Log In</span>
              </Link>
              <Link to='/register'
                className="hidden lg:inline-block bg-gray-300 text-[16px] text-[#335dff] font-[500] py-[9px] px-[25px] rounded-[25px] button_hover_regsiter relative overflow-hidden z-0 hover:text-white"
              >
                <span>Sign in</span>
              </Link>
              
                 <div className='  hidden lg:inline-block relative'>
                 <ShoppingCartIcon className='h-8 w-8 text-[#335dff] cursor-pointer' 
                  onClick={() => setOpenCart(!openCart)}
                 />
                 <span className=' absolute top-[-9px] left-[20px] text-white font-[900] text-[18px] w-[20px] h-[20px] bg-[#335dff] flex items-center justify-center rounded'>{
                    cartItems.length
                 }</span>
                 </div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-2">
            <Link to='/login'  className=" z-0  bg-[#335dff] text-[16px] text-white font-[500] py-[9px] px-[25px] rounded-[25px] relative button_hover overflow-hidden">
                <span>Log in</span>
            </Link>
            <Link to='/register'   className="bg-gray-300 text-[16px] text-[#335dff] font-[500] py-[9px] px-[25px] rounded-[25px] button_hover_regsiter relative overflow-hidden z-0 hover:text-white">
                <span>Sign in</span>
            </Link>
            <div className=' relative'>
                 <ShoppingCartIcon className='h-8 w-8 text-[#335dff] cursor-pointer' 
                  onClick={() => setOpenCart(!openCart)}
                 />
                 <span className=' absolute top-[-9px] left-[20px] text-white font-[900] text-[18px] w-[20px] h-[20px] bg-[#335dff] flex items-center justify-center rounded '>{
                    cartItems.length
                 
                 }</span>
                 </div>
          </div>
        </Collapse>
        {
          openCart && <Cart setOpenCart={setOpenCart} />
        }
      </Navbar>
    );
};

export default NavbarContainer;