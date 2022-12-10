import React, { useState } from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/Nurul_Islam_Front_End_Resume.pdf";
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative">
      <div className="md:block hidden">
        <nav className="text-white bg-white bg-opacity-5 relative rounded-md px-5 container mx-auto flex items-center justify-between py-8">
          <div className="h-16 lg:w-64 md:w-32  flex justify-center items-center">
            <Link className="h-16 lg:w-64 md:w-32  bg-gradient-to-br from-yellow-600 to-yellow-700 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></Link>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
              MD. NURUL ISLAM
            </span>
          </div>
          <div className="flex lg:gap-10 gap-2">
            <div className="mx-auto h-16 md:w-32   lg:w-64 flex justify-center items-center">
              <Link
                to={"/"}
                className="h-16 lg:w-64 md:w-32  bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
              ></Link>
              <span className="text-center text-white font-semibold z-10 pointer-events-none">
                Home
              </span>
            </div>
            <div className="mx-auto h-16 md:w-32  lg:w-64 flex justify-center items-center">
              <Link
                to={"/projects"}
                className="h-16 lg:w-64 md:w-32  bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
              ></Link>
              <span className="text-center text-white font-semibold z-10 pointer-events-none">
                Projects
              </span>
            </div>
            <div className="mx-auto h-16 md:w-32  lg:w-64 flex justify-center items-center">
              <Link
                to={"/contact"}
                className="h-16 lg:w-64 md:w-32  bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
              ></Link>
              <span className="text-center text-white font-semibold z-10 pointer-events-none">
                Contact
              </span>
            </div>
          </div>
          <div className="h-16 lg:w-64 md:w-32  flex  justify-center items-center">
            <a
              href={pdf}
              download="myFile.pdf"
              className="h-16 lg:w-64 md:w-32  bg-gradient-to-br from-yellow-600 to-yellow-700 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
              Download Resume
            </span>
          </div>
        </nav>
      </div>
      {/* Mobile Device */}
      <div className="md:hidden block">
        <nav className=" text-white bg-white bg-opacity-5 rounded-md px-5 container mx-auto flex items-center justify-between py-8">
          <div className="flex justify-center items-center">
            <Link
              to={"/"}
            ><span className="text-center text-white font-semibold z-10 pointer-events-none">
            <img src={logo} className="w-14" alt="" />
          </span>
            </Link>
          </div>
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-blue-500  px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                onClick={()=>setOpenMenu(!openMenu)}
              >
                <FaBars className="text-blue-300"/>
              </button>
            </div>
            {
              openMenu && 
              <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <Link
                  to={'/'}
                  class="text-gray-700 block px-4 py-2 text-sm"
                >
                  Home
                </Link>
                <Link
                  to={'/projects'}
                  class="text-gray-700 block px-4 py-2 text-sm"
                >
                  Projects
                </Link>
                <Link
                  to={'/'}
                  class="text-gray-700 block px-4 py-2 text-sm"
                >
                  Download Resume
                </Link>
              </div>
            </div>
            }
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
