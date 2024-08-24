import React from "react";
import bg from "../../assets/Landing/banner.jpg";
import bg2 from "../../assets/Landing/darkmode.png";
import bg3 from "../../assets/Landing/bgelements.png";
import off1 from "../../assets/Landing/offerpng.png";
import off2 from "../../assets/Landing/offer2.png";
import off3 from "../../assets/Landing/offer3.png";
import off4 from "../../assets/Landing/offer4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Landing = () => {
  const images = [
    {
      id: 1,
      img: off1,
      title: "Most delicious Burger in town!",
      des: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus corrupti deleniti consequuntur id, rem dolor incidunt recusandae accusamus impedit modi dolorem. Doloribus, quam! Reprehenderit repellat quae sequi adipisci eius.",
    },
    {
      id: 2,
      img: off2,
      title: "Enjoy Your Food at Foodie",
      des: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus corrupti deleniti consequuntur id, rem dolor incidunt recusandae accusamus impedit modi dolorem. Doloribus, quam! Reprehenderit repellat quae sequi adipisci eius.",
    },
    {
      id: 3,
      img: off3,
      title: "Best Burgers and  Pizzas in Town!",
      des: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus corrupti deleniti consequuntur id, rem dolor incidunt recusandae accusamus impedit modi dolorem. Doloribus, quam! Reprehenderit repellat quae sequi adipisci eius.",
    },
    {
      id: 4,
      img: off4,
      title: "Foodie Have Excellent  Foods Quality!",
      des: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus corrupti deleniti consequuntur id, rem dolor incidunt recusandae accusamus impedit modi dolorem. Doloribus, quam! Reprehenderit repellat quae sequi adipisci eius.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: false,
  };

  return (
    <div className="relative  box-border shadow-2xl shadow-black rounded-b-sm dark:bg-black overflow-hidden  flex  w-full h-fit">
      {/* Background images */}
      <div className="absolute w-full h-full">
        <img
          src={bg}
          alt=""
          className="dark:hidden w-full h-full object-cover"
        />
        <img
          src={bg2}
          alt=""
          className="absolute top-0 w-full h-full object-cover"
        />
        <img
          src={bg3}
          alt=""
          className="absolute top-0 right-0 h-[50%] w-full sm:w-[50%] sm:h-full object-cover"
        />
      </div>

      {/* Slider */}
      <Slider
        {...settings}
        className=" self-start sm:self-center right-0 h-fit w-full flex container  z-10"
      >
        {images.map((data) => (
          <div key={data.id} className="w-full h-full">
            <div className="grid grid-cols-1 self-end sm:grid-cols-2 gap-2  mx-4  sm:gap-52 px-2  h-full">
              <div className="flex flex-col justify-center gap-4 tracking-wider pt-2 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-5xl text-white font-cairo font-bold sm:text-6xl lg:text-7xl">
                  {data.title}
                </h1>
                <p className="text-lg  text-white font-cairo">{data.des}</p>
                <div>
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:bg-none hover:scale-105 transition ease-in-out duration-500
                   text-white text-2xl hover:text-[#ed8900] border-2 border-[#ed8900] font-cairo p-3 my-2  rounded-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
              <div className="order-1 sm:order-2 z-10 flex justify-center items-center">
                <img
                  className="w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] sm:scale-105 lg:scale-120  object-contain"
                  src={data.img}
                  alt="image"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Landing;
