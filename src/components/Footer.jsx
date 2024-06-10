import React, { useEffect, useRef } from "react";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "../data/mockData";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import logo from '../assets/logo.png';

const Footer = () => {
  const { darkMode } = useTheme();
  const tranform3d = useRef();

  useEffect(() => {
    effect3d();
  }, []);

  const effect3d = () => {
    tranform3d.current.style.transform = `translate3d(0, 0, 0)`;
  };

  const Item = ({ Links, title, imgSrc }) => {
    return (
      <ul>
        <div className="flex items-center gap-2">
          {imgSrc && <img src={imgSrc} className="w-6 h-7 pb-1" />}
          <p className="mb-2 font-semibold text-lg">{title}</p>
        </div>
        {Links.map((link) => (
          <div key={link.name}>
            <h2 className="text-xs">{link.pro}</h2>
            <li>
              <a
                className="dark:text-white -400 hover:underline duration-300 text-sm cursor-pointer leading-6"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <footer ref={tranform3d} className={`bg-silver dark:bg-gray-700 dark:text-silver ${darkMode && "dark"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={PRODUCTS} imgSrc={logo} title="Cartzilla" />
        <Item Links={RESOURCES} title="RESOURCES" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 dark:text-silver text-center pt-2 text-sm pb-8">
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex space-x-1 justify-center md:justify-start dark:text-white">
          <div className="p-2 cursor-pointer rounded-full text-xl duration-300">
            <FaFacebook />
          </div>
          <div className="p-2 cursor-pointer rounded-full text-xl duration-300">
            <FaInstagram />
          </div>
          <div className="p-2 cursor-pointer rounded-full text-xl duration-300">
            <FaXTwitter />
          </div>
          <div className="p-2 cursor-pointer rounded-full text-xl duration-300">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
