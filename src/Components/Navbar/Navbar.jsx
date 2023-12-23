import React, { useEffect, useState } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Collapse,
  } from "@material-tailwind/react";
 import logo from '../../../public/logo.png'
const NavbarContainer = () => {
    const [openNav, setOpenNav] = useState(false);
 
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
            <a href="#" className="flex items-center">
              Product
            </a>
          </Typography>
        
      
        
        </ul>
      );
    return (
        <Navbar className="sticky top-0 z-10 h-max w-[100%] rounded-none px-4 py-2 lg:px-8 lg:py-4   text-gray-900 max-w-[1170px] mx-auto bg-transparent font-[700]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 max-w-[180px] w-[100%]"
          >
              <img src={logo} className=' object-cover' />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-2">
              <button
                className="hidden lg:inline-block bg-[#335dff] text-[16px] text-white font-[500] py-[9px] px-[25px] rounded-[25px]"
              >
                <span>Log In</span>
              </button>
              <button
                className="hidden lg:inline-block bg-gray-300 text-[16px] text-[#335dff] font-[500] py-[9px] px-[25px] rounded-[25px]"
              >
                <span>Sign in</span>
              </button>
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
            <Button fullWidth variant="text"  className=" bg-gray-300 text-[16px] text-[#335dff] font-[500] py-[9px] px-[25px] rounded-[25px]">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="text"  className="bg-[#335dff] text-[16px] text-white font-[500] py-[9px] px-[25px] rounded-[25px]">
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    );
};

export default NavbarContainer;