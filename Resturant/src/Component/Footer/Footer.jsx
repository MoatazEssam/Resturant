import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import vidark from "../../assets/Footer/4489678-uhd_3840_2160_25fps.mp4";
import vilight from "../../assets/Footer/white.mp4";
const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="6000"
      data-aos-easing="linear"
      className="relative h-full bg-white dark:bg-black w-full overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover block dark:hidden"
        src={vilight}
        autoPlay
        loop
        muted
      />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden dark:block"
        src={vidark}
        autoPlay
        loop
        muted
      />

      {/* Black Overlay */}
      <div className="absolute top-0  left-0 w-full h-full bg-black opacity-90"></div>

      {/* Content Container */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-once="true"
        className="relative z-10 dark:bg-black/40 overflow-hidden  px-[3rem] py-10"
      >
        <div className="grid grid-cols-1 col-span-6 gap-5 sm:gap-20 md:pl-10 lg:grid-cols-4">
          <div className="flex flex-col self-start w-full h-full text-left ">
            <h1 className="font-cairo w-fit  text-gray-200 dark:text-gray-200 font-bold text-3xl sm:text-5xl">
              Foodie <span className="text-[#ff8d29] text-5xl">.</span>
            </h1>
            <p className="font-cairo font-semibold pb-3 dark:text-gray-200 text-gray-400">
              Welcome to Foodie, where we bring the flavors of the world to your
              table! Nestled in the heart of Cairo, our restaurant offers a
              unique dining experience that combines traditional recipes with
              modern culinary techniques. Whether you're in the mood for a cozy
              family dinner or a lively night out with friends, Foodie is the
              perfect place to indulge in delicious food, exceptional service,
              and a warm, welcoming atmosphere.
            </p>
            <div className="flex gap-x-5 flex-row">
              <div
                className="w-12  group transition-all duration-300 ease-linear hover:bg-primary h-12 p-2 rounded-[18px]
              cursor-pointer border-[1px] border-gray-200/40 hover:scale-125 dark:border-gray-200"
              >
                <FaFacebookF className="w-full dark:group-hover:text-black group-hover:text-gray-200 h-full text-primary" />
              </div>
              <div
                className="w-12  group transition-all duration-300 ease-linear hover:bg-primary h-12 p-2 rounded-[18px]
              cursor-pointer border-[1px] border-gray-200/40 hover:scale-125 dark:border-gray-200"
              >
                <FaInstagram className="w-full dark:group-hover:text-black group-hover:text-gray-200 h-full text-primary" />
              </div>
              <div
                className="w-12  group transition-all duration-300 ease-linear hover:bg-primary h-12 p-2 rounded-[18px]
              cursor-pointer border-[1px] border-gray-200/40 hover:scale-125  dark:border-gray-200"
              >
                <RiTwitterXLine className="w-full dark:group-hover:text-black group-hover:text-gray-200 h-full text-primary" />
              </div>
            </div>
          </div>
          {/* contant info */}
          <div className="flex flex-col flex-wrap ">
            <h1 className="font-cairo text-gray-200 dark:text-gray-200 font-bold text-2xl sm:text-4xl">
              Contact Info <span className="text-primary text-5xl">:</span>
            </h1>
            <div className="gap-5 mt-5 flex items-start text-start justify-start flex-col ">
              <div className="flex flex-row text-2xl font-cairo font-semiboldtext-gray-200 dark:text-gray-200 items- gap-1">
                <FaLocationDot className="text-primary self-center  md:self-start text-2xl sm:text-4xl mr-3 " />
                <p className="text-gray-200 dark:text-gray-200">
                  203 Eltahrer st. downtown, cairo, Egypt
                </p>
              </div>
              <div className="flex flex-row text-2xl font-cairo font-semibold text-black dark:text-gray-200 items- gap-1">
                <FaPhone className="text-primary text-2xl  md:self-start self-center sm:text-3xl mr-3 " />
                <p className="text-gray-200 dark:text-gray-200">
                  +20 1148956841
                </p>
              </div>
              <div className="flex flex-row text-2xl font-cairo font-semibold text-black dark:text-gray-200 items- gap-1">
                <FaPhone className="text-primary text-2xl  md:self-start self-center sm:text-3xl mr-3 " />
                <p className="text-gray-200 dark:text-gray-200">
                  +20 1013230960
                </p>
              </div>
              <div className="flex flex-row text-2xl font-cairo font-semibold text-black dark:text-gray-200 items- gap-1">
                <MdEmail className="text-primary self-center md:self-start text-2xl sm:text-3xl mr-3 " />
                <p className="text-gray-200 dark:text-gray-200">
                  Foodie@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* openhours    */}
          <div className="flex flex-col flex-wrap  w-full h-full text-left  ">
            <h1 className="font-cairo pb-5  text-gray-200 dark:text-gray-200 font-bold text-2xl sm:text-4xl">
              Opening Hours <span className="text-primary text-5xl">:</span>
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-start gap-4 text-left">
              <h1 className="font-cairo text-gray-200 dark:text-gray-200 font-[600] text-xl sm:text-2xl">
                Monday-Friday: 08:00-22:00
              </h1>

              <h1 className="font-cairo text-gray-200 dark:text-gray-200 font-[600] text-xl sm:text-2xl">
                Tuesday 4PM: Till Mid Night
              </h1>

              <h1 className="font-cairo text-gray-200 dark:text-gray-200 font-[600] text-xl sm:text-2xl">
                Saturday: 10:00-16:00
              </h1>
            </div>
          </div>
          {/* important link */}
          <div className="flex flex-col flex-wrap  w-full h-full text-left  ">
            <h1 className="font-cairo pb-5 text-gray-200 dark:text-gray-200 font-bold text-2xl sm:text-4xl">
              Important Links <span className="text-primary text-5xl">:</span>
            </h1>
            <ul className="flex flex-col font-[600] justify-start tracking-wide font-cairo  dark:text-white text-gray-200 items-start  text-xl sm:text-3xl">
              <li
                className="hover:text-[#ff8d29]  hover:translate-x-2 transition-all duration-300 ease-linear cursor-pointer"
                onClick={() => handleScroll("landing")}
              >
                Home
              </li>
              <li
                className="hover:text-[#ff8d29]  hover:translate-x-2 transition-all duration-300 ease-linear cursor-pointer"
                onClick={() => handleScroll("menu")}
              >
                Menu
              </li>
              <li
                className="hover:text-[#ff8d29]  hover:translate-x-2 transition-all duration-300 ease-linear cursor-pointer"
                onClick={() => handleScroll("reserve")}
              >
                Reserve
              </li>
              <li className="hover:text-[#ff8d29] hover:translate-x-2 transition-all duration-300 ease-linear cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center font-cairo text-gray-200 font-semibold mt-10 sm:mt-20  items-center  text-xl sm:text-3xl">
          <h1>
            Copyright ©2024 All rights reserved | This template is made with by
            <span className="text-secondary px-2 font-extrabold">Moataz</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
