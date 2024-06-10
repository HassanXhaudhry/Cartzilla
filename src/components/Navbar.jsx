import React, { useEffect, useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import percentage from "../assets/percentage.png";
import man from "../assets/man.png";
import { useTheme } from "../contexts/ThemeContext";
import cartimg from "../assets/cartimg.png";
import categories from "../assets/categories.png";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FaXmark from "../assets/cross.png"
import FaBars from "../assets/bars.png"
import { Tooltip } from "flowbite-react";
import Currency from '../data/Currencies.json'

const Navbar = ({ openDrawer }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isArrow, setIsArrow] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);
  const [icon, setIcon] = useState(darkMode ? FiSun : FiMoon);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');


  const tranform3d = useRef();
  useEffect(() => {
    effect3d();
  }, []);

  const effect3d = () => {
    tranform3d.current.style.transform = `translate3d(0, 0, 0)`;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsArrow(!isArrow);
  };

  const useBodyScrollLock = () => {
    const bodyStyle = document.body.style;

    useEffect(() => {
      bodyStyle.overflowY = scrollLock ? "hidden" : "auto";

      return () => {
        bodyStyle.overflowY = "auto";
      };
    }, [scrollLock]);
  };

  useBodyScrollLock();

  const togggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setScrollLock(!isMenuOpen);
  };

  const toggleIcon = () => {
    setIcon(darkMode ? FiMoon : FiSun);
  };

  const handleModeCombined = () => {
    toggleDarkMode();
    toggleIcon();
  };

const toggleCurrencyDropdown = () => {
  setIsCurrencyOpen(!isCurrencyOpen);
};

const selectCurrency = (currency) => {
  setSelectedCurrency(currency);
  setIsCurrencyOpen(false);
};

  return (
    <Fragment>
      <div
        ref={tranform3d}
        className={`bg-[#333D4C] md:h-[104px] h-[68px] flex flex-col fixed top-0 w-full z-50 ${
          darkMode && "dark"
        }`}
      >
      <div className="flex flex-col gap-3 px-2">
        <div className="pt-3 flex justify-around">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-6 h-6" />
            <p className="text-white font-Montserrat text-2xl">Cartzilla</p>
          </div>
          <div className="md:block hidden">
            <div className="relative h-9 flex w-full max-w-[22rem] border rounded-3xl ">
              <div className=" w-full ">
                <input
                  className="peer w-full h-full outline outline-0 text-white focus:outline-0 border-t-transparent focus:border-t-transparent text-sm pl-12 pr-3 py-2.5 rounded-3xl bg-transparent"
                  placeholder="Search the product"
                />
              </div>
              <button
                className="absolute left-0.5 top-[4.5px] rounded-2xl px-4 align-middle cursor-pointer"
                type="button"
              >
                <img src={search} alt="Search" className="pr-2" />
              </button>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="flex items-center gap-2 ">
              <img
                src={percentage}
                alt=""
                className="rounded-full bg-gray-500  w-7 h-7"
              />
              <div className="flex flex-col ">
                <p className="text-[10px] text-gray-300">Only this month</p>
                <p className="text-xs text-white">Super Sale 20%</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 mr-1 relative">
            <div
              className="rounded-full hover:bg-gray-500 cursor-pointer flex justify-center items-center w-9 h-9 text-white"
              onClick={handleModeCombined}
            >
              {icon}
            </div>
            <Tooltip content="Login" placement="bottom" style="light" className="w-16 text-xs text-center">
           <NavLink to='/login'> <img
              src={man}
              alt=""
              className="rounded-full hover:bg-gray-500 cursor-pointer w-9 h-9"
            /></NavLink></Tooltip>
            <div>
            <Tooltip content="Cart" placement="bottom" style="light" className="w-16 text-xs text-center">
              <img
                src={cartimg}
                alt=""
                className="rounded-full bg-gray-500 cursor-pointer w-9 h-9" onClick={openDrawer}
              /></Tooltip>
              <div className="absolute h-4 w-4 bg-green-400 rounded-full top-[-2px] right-[-4px]"></div>
            </div>
          </div>
          <button
            onClick={togggleMenu}
            className="md:hidden border-gray-600 border-[1.5px] w-[36px] h-[36px] rounded-full"
          >
            {isMenuOpen ? (
              <img src={FaXmark} alt="" className="pl-[9px] h-3 w-6" />
            ) : (
              <img src={FaBars} alt="" className="pl-[9px] h-3 w-6" />
            )}
          </button>
        </div>

        
        <div className="flex justify-around">
          <div className="relative w-52 xl:block hidden">
            <div
              className="flex justify-between bg-gray-600 w-full cursor-pointer rounded-t-lg h-9 items-center px-2 "
              onClick={toggleDropdown}
            >
              <div className="flex gap-2 items-center justify-center">
                <img src={categories} alt="Categories" className="h-3 w-3" />
                <p className="text-white text-xs">Categories</p>
              </div>
              {isArrow ? (
                <IoIosArrowDown className="text-white h-3 w-3" />
              ) : (
                <IoIosArrowUp className="text-white h-3 w-3" />
              )}
            </div>
            {isOpen && (
              <div className="top-full left-0 w-full xl:block hidden rounded-b-lg shadow-lg z-15">
                <ul className="flex flex-col">
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Computers & Accessories
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Smartphones & Tablets
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    TV, Video & Audio
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Speakers & Home Music
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Cameras, Photo & Video
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Printers & Ink
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Charging Stations
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Headphones
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    Wearable Electronics
                  </li>
                  <li className="px-4 py-[11px] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs cursor-pointer">
                    HDD/SSD Data Storage
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="md:block hidden">
          <div className="flex gap-12 text-gray-300 text-sm font-semibold items-center justify-center pb-1">
            <p className="cursor-pointer ">Best Sellers</p>
            <p className="cursor-pointer">Today's Deals</p>
            <p className="cursor-pointer">New Arrivals</p>
            <p className="cursor-pointer">Gift Cards</p>
            <p className="cursor-pointer">Help Center</p>
          </div></div>

          <div className="md:block hidden">
          <div className="flex gap-6 text-white items-center justify-center text-xs">
            <div className="relative cursor-pointer flex items-center gap-2" onClick={toggleCurrencyDropdown}>
              <p className="relative pt-[4px]">{selectedCurrency}</p>
              {isCurrencyOpen ? (
                <IoIosArrowUp className="text-white h-4 w-4 pt-1" />
              ) : (
                <IoIosArrowDown className="text-white h-4 w-4 pt-1" />
              )}
              {isCurrencyOpen && (
                <div className="absolute left-0 mt-[20px] text-[#475467] text-xs top-full w-32 bg-white border border-gray-600 shadow-lg rounded-b-md overflow-y-auto max-h-44 h-40 z-10">
                  {Currency.map((post, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:text-white hover:bg-[#475467]"
                      onClick={() => selectCurrency(post.symbol)}
                    >
                      {post.symbol}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        


        </div>
        </div>

        {isMenuOpen && (
          <div className='mt-0 w-full h-screen top-0 left-0 bg-gray-700 text-gray-300 py-3 z-50'>
              <div className='mt-10 flex flex-col gap-2 cursor-pointer h-screen'>
                  <NavLink to='/' className='block hover:text-white py-2 mx-4 border-b-[1px] border-grey'>Best Sellers</NavLink>
                  <NavLink to='/' className='block hover:text-white py-2 mx-4 border-b-[1px] border-grey'>Today's Deals</NavLink>
                  <NavLink to='/' className='block hover:text-white py-2 mx-4 border-b-[1px] border-grey'>New Arrivals</NavLink>
                  <NavLink to='/' className='block hover:text-white py-2 mx-4 border-b-[1px] border-grey'>Gift Cards</NavLink>
                  <NavLink to='/' className='block hover:text-white py-2 mx-4 border-b-[1px] border-grey'>Help Center</NavLink>
              </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
