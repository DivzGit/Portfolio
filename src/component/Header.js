import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from 'react-scroll';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between  text-white">
        <a href="/">DP</a>
        <nav className="hidden md:block header_nav">
          <ul className="flex text-white">
            <li>
              <Link to="index" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="service" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                Project
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                Resume
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <nav className="block md:hidden moblie-nav">
            <ul className="flex flex-col bg-black text-white">
              <li>
                <Link to="index" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="service" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                  Project
                </Link>
              </li>
              <li>
                <Link to="resume" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} activeClass="text-red-500" className="cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <button className="block md:hidden" onClick={handleMenu}>
          <Bars3Icon className="text-white h-5" />
        </button>
      </header>
    </>
  );
};

export default Header;
