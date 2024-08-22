import React from "react";
import logo from "../../assets/burger.png";
import DarkMode from "../DarkMode";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly dark:bg-black items-center  p-4">
        <div className="flex flex-row items-end text-end justify-center gap-2">
          <div>
            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>
          <h1 className="font-cairo  font-bold text-4xl">
            Foodie <span className="text-[#ff8d29] text-4xl">.</span>
          </h1>
        </div>
        <div className=" hidden sm:flex justify-center items-center">
          <ul className="flex font-medium font-cairo duration-500 ease-in-out transition-all  text-xl flex-row gap-4">
            <li className="hover:text-[#ff8d29]">Home</li>
            <li className="hover:text-[#ff8d29]">Menu</li>
            <li className="hover:text-[#ff8d29]">Services</li>
            <li className="hover:text-[#ff8d29]">Contact Us</li>
          </ul>
        </div>
        {/* <DarkMode /> */}
      </div>
    </div>
  );
};

export default Header;
