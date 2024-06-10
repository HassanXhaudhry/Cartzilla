import React, { Fragment, useEffect, useRef, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import person from "../assets/person.png";
import { motion } from "framer-motion";
import girl from "../assets/girl.png";
import girl2 from "../assets/girl2.png";
import girl3 from "../assets/girl3.png";
import Products from '../data/Products';
import Whatsapp from '../components/Whatsapp'
import { data } from '../data/mockData'
import MyDrawer from "../components/MyDrawer";

const Home = () => {
  const { darkMode } = useTheme();
  const [noOfElement, setnoOfElement] = useState(8);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const slice = Products.slice(0, noOfElement);

  const showMore = () => {
    setnoOfElement(noOfElement + 4);
  };
  
  const viewAll = () => {
    setnoOfElement(noOfElement * 12);
  };

  const tranform3d = useRef();
  useEffect(() => {
    effect3d();
  }, []);

  const effect3d = () => {
    tranform3d.current.style.transform = `translate3d(0, 0, 0)`;
  };

  const transition={type:"spring", duration:3}
  const mobile=window.innerWidth<=768? true: false;

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 230;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 220;
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <div ref={tranform3d} className={`${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} openDrawer={toggleDrawer} />
        <div className="dark:bg-dark h-[420px] flex justify-end">
          <div className="w-auto max-w-[900px] sm:m-10 m-4 z-0">
            <Carousel data-bs-theme="dark" className="mt-20">
              <Carousel.Item>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4 dark:bg-dark md:gap-36 gap-4 bg-gradient-to-r from-gradient1 to-gradient2 rounded-lg">
              <div className="flex flex-col justify-center items-center md:items-start mx-32 gap-2 pt-6 text-black">
                <p className="text-xs">Feel the real quality sound </p>
                <p className="text-4xl font-bold">
                  New fall <br />season 2024 
                </p>
                <div className="flex items-center gap-2 mt-6 text-white cursor-pointer bg-black w-28 justify-center h-10 rounded-md">
                  <button className="text-sm">Shop now</button>
                  <GoArrowUpRight className="mt-1" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start mx-6">
                <img
                  src={girl}
                  alt="Headphones ProMax"
                  className="w-[330px] h-[340px] mt-[10px]"
                />
              </div>
            </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 dark:bg-dark md:gap-36 gap-4 bg-gradient-to-r from-[#4f4c4c] to-[#2d2b33] rounded-lg">
                  <div className="flex flex-col justify-center items-center md:items-start mx-32 gap-2 pt-6 text-white">
                    <p className="text-xs">The new warm collection</p>
                    <p className="text-4xl font-bold">
                      New fall <br />season 2024 
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-black cursor-pointer bg-white w-28 justify-center h-10 rounded-md">
                      <button className="text-sm">Shop now</button>
                      <GoArrowUpRight className="mt-1" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center md:items-start mx-6">
                    <img
                      src={girl2}
                      alt="Headphones ProMax"
                      className="w-[330px] h-[340px] mt-[10px]"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 dark:bg-dark md:gap-36 gap-4 bg-gradient-to-r from-[#F3E7E9] to-[#DAD4EC] rounded-lg">
                  <div className="flex flex-col justify-center items-center md:items-start mx-32 gap-2 pt-6">
                    <p className="text-xs">The new stylish collection</p>
                    <p className="text-4xl font-bold">
                      New fall <br />season 2024 
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-white cursor-pointer bg-black w-28 justify-center h-10 rounded-md">
                      <button className="text-sm">Shop now</button>
                      <GoArrowUpRight className="mt-1" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center md:items-start mx-6">
                    <img
                      src={girl3}
                      alt="Headphones ProMax"
                      className="w-[330px] h-[340px] mt-[10px]"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

    <MyDrawer isOpen={isOpen} closeDrawer={toggleDrawer}/>
        <div className="dark:bg-dark h-auto dark:text-white py-20 pt-[350px] md:pt-28">
          <div className="flex justify-between sm:px-28 px-10 md:px-12 items-center">
            <p className="text-lg font-bold">Trending products</p>
            <h4 className='text-xs cursor-pointer' onClick={() => viewAll()}>View all</h4>
          </div>
          <div className="flex justify-center items-center py-6">
            <br /> <hr className="w-full border-gray-500 mx-28" />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 sm:grid-cols-2 grid-cols-1 sm:mx-28 mx-12">
            {slice.map((data, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex justify-center">
                  <img src={data.image} alt="" className="w-40 h-40" />
                </div>
                <h4 className="text-xs font-Poppins">{data.title}</h4>
                <h4 className="text-md font-Montserrat font-semibold">{data.price}</h4>
                <div className="flex items-center justify-center cursor-pointer gap-2 mx-10 bg-gray-300 dark:bg-white text-black rounded-3xl h-8 my-3">
                  <button className="text-xs font-semibold">Add to cart</button>
                  <img src={data.cart} alt="" className="h-4 w-4" />
                </div>
                {hoveredItem === index && (
                  <div className="absolute top-full left-0 mt-1 p-[7px] bg-gray-100 text-gray-800 rounded-md text-[10px] z-10">
                    {data.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-6">
            <br /> <hr className="w-full border-gray-500 mx-28" />
          </div>
          <button className='float-right pr-20 text-xs font-Montserrat' onClick={() => showMore()}>View More</button>
        </div>

        <div className='dark:bg-dark pb-5'>
        <h1 className='text-2xl pl-2 sm:pl-12 dark:text-white font-Poppins'>Special offers for you</h1>
        <div className='flex items-center justify-center mt-4 h-10 w-24 pr-1 pl-1 rounded-full bg-darksilver mx-auto'>
          <span className='flex gap-4'>
            <FaArrowAltCircleLeft className='cursor-pointer h-8 w-8' onClick={slideLeft} />
            <FaArrowAltCircleRight className='cursor-pointer h-8 w-8' onClick={slideRight} />
          </span>
        </div>
  
        <div
          id='slider'
          className='flex w-full overflow-x-scroll scroll-smooth py-2 scrollbar-hide'
        >
          {data.map((item) => (
            <div key={item.id} className='flex-shrink-0 mx-auto md:h-auto text-center items-center dark:text-white justify-center  overflow-y-hidden'>
              <img
                className='w-[220px] h-52 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full'
                src={item.img}
                alt='/'
              />
              <h4 className="text-2xl text-gray px-2">
                {item.title}
              </h4>
              <p className="text-sm text-lightblack dark:text-white py-2" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              <div className="w-36 h-10 py-2 px-2 bg-gray-500 dark:text-black cursor-pointer  text-white rounded-md mt-6 text-center mx-auto flex items-center justify-center">
                {item.button}
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className=' h-auto dark:bg-dark dark:text-white flex flex-col items-center md:flex-row pb-16 justify-center'>
    <div className=' pt-12 px-8 md:w-[600px]'>
    <h1 className='m-6 font-bold text-lg '>Let's contact us and make the best deal</h1>
    <p className='m-6 text-lightblack dark:text-white '>It is a long established fact that a reader will be distracted by
    the readable content of a page when looking at its layout. The point
    of using Lorem Ipsum </p>
    <span className='flex align-middle justify-center'>
    <Whatsapp />
    </span>
    </div>
    <div className="md:pl-6 md:pt-0 md:pr-0 md:pb-48">
    <motion.div className='items-start absolute '
        initial={{right:"-1rem"}}
        whileInView={{right:"8rem"}}
        transition={transition}
    >
        <img
            src={person}
            alt=""
            className="w-52 h-52 hidden lg:block"
        />
    </motion.div>
</div>

    </div>
  
  
    
        <Footer darkMode={darkMode} />
      </div>
    </Fragment>
  );
};

export default Home;
