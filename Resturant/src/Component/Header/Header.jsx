import React, { useState } from "react";
import logo from "../../assets/burger.png";
import bg from "../../assets/header-bg.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink, Link, Navigate } from "react-router-dom";
import bg2 from "../../assets/Landing/banner.jpg";
import DarkMode from "../DarkMode";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
      }}
    >
      {/* <div className="w-full h-full z-0 absolute bg-black opacity-40"></div> */}

      {/* Main header */}
      <div className="flex flex-row justify-between sm:justify-between border-b-[1px] border-black/50 dark:bg-black items-center p-4 relative z-10">
        {/* Logo and title */}
        <div className="flex flex-row items-center justify-center p-2 gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="font-cairo tracking-normal  text-white font-bold text-xl sm:text-4xl">
            Foodie <span className="w-fit text-[#ff8d29] text-3xl">.</span>
          </h1>
        </div>

        {/* Desktop navigation */}
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex font-[650] tracking-wide font-cairo text-white text-xl gap-4">
            <li className="hover:text-[#ff8d29] cursor-pointer">
              <ScrollLink
                to="landing"
                smooth={true}
                duration={1000}
                className="hover:text-[#ff8d29] cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li className="hover:text-[#ff8d29] cursor-pointer">
              {" "}
              <ScrollLink
                to="menu"
                smooth={true}
                duration={2000}
                className="hover:text-[#ff8d29] cursor-pointer"
              >
                Menu
              </ScrollLink>
            </li>
            <li className="hover:text-[#ff8d29] cursor-pointer">
              {" "}
              <ScrollLink
                to="reserve"
                smooth={true}
                duration={2000}
                className="hover:text-[#ff8d29] cursor-pointer"
              >
                Reserve
              </ScrollLink>
            </li>
            <li className="hover:text-[#ff8d29] cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="hidden sm:block">
          <DarkMode />
        </div>

        {/* Mobile menu icon */}
        <div className="sm:hidden text-white">
          <IoMenu
            className="w-10 h-10 cursor-pointer hover:text-[#ff8d29]"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 dark:bg-black opacity-70 z-10"
          onClick={() => setOpen(!open)}
        ></div>
      )}

      {/* Mobile navigation menu */}
      <div
        className={`fixed top-0 right-0 z-20 w-[75%] h-full dark:text-white bg-white dark:bg-black shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out sm:hidden`}
      >
        <div className="flex justify-between items-end p-4">
          <div className="flex flex-row items-center justify-center p-2 gap-2">
            <img src={logo} alt="logo" className="w-5 h-5" />
            <h1 className="font-cairo font-bold text-xl">
              Foodie <span className="text-[#ff8d29] text-xl">.</span>
            </h1>
          </div>
          <IoCloseSharp
            className="w-10 h-10 hover:text-[#ff8d29] cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className="flex flex-col font-[600] tracking-wide font-cairo  dark:text-white text-black items-start pl-8 pt-4 space-y-4 text-xl">
          <li className="hover:text-[#ff8d29] cursor-pointer">Home</li>
          <li
            className="hover:text-[#ff8d29] cursor-pointer"
            onClick={() => handleScroll("menu")}
          >
            Menu
          </li>
          <li
            className="hover:text-[#ff8d29] cursor-pointer"
            onClick={() => handleScroll("reserve")}
          >
            Reserve
          </li>
          <li className="hover:text-[#ff8d29] cursor-pointer">Contact Us</li>
        </ul>
        <div className="absolute bottom-0 right-0 p-4">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
