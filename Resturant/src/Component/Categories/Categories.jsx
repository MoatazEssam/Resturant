import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import img from "../../assets/Landing/offer2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Cat/Breakfast.jpg";
import img2 from "../../assets/Cat/burger.jpg";
import img3 from "../../assets/Cat/drinks.jpg";
import img4 from "../../assets/Cat/pexels-sydney-troxell-223521-708587.jpg";
import img5 from "../../assets/Cat/seafood.jpg";
import img6 from "../../assets/Cat/salad.jpg";

const Categories = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
  const sliderRef = useRef(null);
  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth > 1024);
  }, []);
  useEffect(() => {
    const debounceResize = () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, [handleResize]);

  const settings = useMemo(
    () => ({
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      className: "center",
      centerPadding: "10px",
      autoplay: false,
      autoplaySpeed: 2000,
      cssEase: "ease-in-out",
      afterChange: (current) => setSlideIndex(current),
      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  const Categories = useMemo(
    () => [
      {
        id: 1,
        title: "Pizza",
        img: img4,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
        icon: (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M169.7.9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80h1.6c176.7 0 320 143.3 320 320v1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9zm230.1 409.3c.1-3.4.2-6.8.2-10.2 0-159.1-128.9-288-288-288-3.4 0-6.8.1-10.2.2L.5 491.9c-1.5 5.5.1 11.4 4.1 15.4s9.9 5.6 15.4 4.1l379.8-101.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-144 48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z" />
          </svg>
        ),
      },
      {
        id: 2,
        title: "Breakfast",
        img: img1,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
        icon: (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32z" />
          </svg>
        ),
      },
      {
        id: 3,
        title: "Burger",
        img: img2,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
        icon: (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6 0 16.1-13 29.1-29.1 29.1H61.1zm82.9-96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-16z" />
          </svg>
        ),
      },
      {
        id: 4,
        title: "Salad",
        img: img6,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
          >
            <path d="M7 21h10M12 21a9 9 0 009-9H3a9 9 0 009 9z" />
            <path d="M11.38 12a2.4 2.4 0 01-.4-4.77 2.4 2.4 0 013.2-2.77 2.4 2.4 0 013.47-.63 2.4 2.4 0 013.37 3.37 2.4 2.4 0 01-1.1 3.7 2.51 2.51 0 01.03 1.1M13 12l4-4" />
            <path d="M10.9 7.25A3.99 3.99 0 004 10c0 .73.2 1.41.54 2" />
          </svg>
        ),
      },
      {
        id: 5,
        title: "Seafood",
        img: img3,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
        icon: (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96s28.7 64 64 64h1c3.7 88.9 77 160 167 160h56V128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h400c8.8 0 16-7.2 16-16s-7.2-16-16-16H64zm160 424c0 13.3 10.7 24 24 24h72v-72.2l-64.1-22.4c-12.5-4.4-26.2 2.2-30.6 14.7s2.2 26.2 14.7 30.6l4.5 1.6C233 433.9 224 443.9 224 456zm128 23.3c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3v69.9zM472.6 415c24.6-30.3 39.4-68.9 39.4-111 0-12.3-1.3-24.3-3.7-35.9l-125.5 87c.8 3.4 1.2 7 1.2 10.6 0 4.6-.7 9-1.9 13.1l90.5 36.2zM336 128h-16v192h18.3c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128zm-120 64c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z" />
          </svg>
        ),
      },
      {
        id: 6,
        title: "Drinks",
        img: img5,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M20.832 4.555A1 1 0 0020 3H4a1 1 0 00-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445l-2 3H7.868l-2-3h12.264z" />
          </svg>
        ),
      },
    ],
    []
  );
  // Calculate progress width percentage based on screen size and slideIndex
  const progressWidth = isLargeScreen
    ? (slideIndex / 3) * 100
    : ((slideIndex + 1) / Categories.length) * 100;

  return (
    <div className="overflow-hidden h-full  pt-10 sm:pt-32 dark:bg-black">
      {/* Header Section */}
      <div className="flex flex-col w-full justify-center text-center items-center mb-12">
        <div className="bg-primary mb-5 h-2 w-[80%] sm:w-[40%]"></div>
        <h1 className="text-4xl tracking-wider text-black dark:text-white mb-2 sm:text-6xl font-cairo font-bold">
          Our <span className="text-primary">Categories</span>
        </h1>
        <p className="w-[80%] sm:w-[50%] font-cairo text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          quaerat et recusandae, sed tempora tempore est suscipit error? Harum
          perferendis ex deserunt iusto architecto modi molestiae quos libero,
          error autem.
        </p>
      </div>

      {/* Slider Section */}
      <div className="container  ">
        <div className="slider-container">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef.current = slider;
            }}
          >
            {Categories.map((data) => (
              <div key={data.id} className="px-2 sm:px-4 md:px-6">
                {/* Adjusted classes for margin and responsive spacing */}
                <div
                  className="flex group flex-col gap-4 py-2 px-auto text-center dark:bg-black relative mx-auto items-center w-fit drop-shadow-2xl shadow-2xl justify-center   
                hover:shadow-xl transition-shadow duration-300 rounded-2xl "
                >
                  <div
                    className="absolute duration-300 ease-in-out 
                  transition-all group-hover:h-full
                  -z-10
                   bottom-0 left-0 w-full h-[60%] rounded-2xl bg-primary opacity-80"
                  ></div>
                  <div
                    className="w-fit duration-300 ease-in-out 
                  transition-all text-primary group-hover:text-gray-200  dark:text-gray-200 dark:group-hover:text-black text-6xl stroke-current h-fit flex justify-center items-center"
                  >
                    {data.icon}
                  </div>
                  <h1
                    className="text-2xl duration-300 ease-in-out 
                  transition-all font-cairo dark:group-hover:text-black dark:text-gray-200 group-hover:text-white font-bold text-black mb-2"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-lg mx-auto duration-300 ease-in-out 
                  transition-all  dark:group-hover:text-black font-cairo mb-10 group-hover:text-white dark:text-gray-200 text-gray-600 "
                  >
                    {data.des}
                  </p>
                  <img
                    src={data.img}
                    alt={data.title}
                    className="object-cover rounded-full w-[250px] h-[250px]"
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Progress Bar */}
          <div className="flex justify-center mt-8">
            <div className="w-[50%] border-2 border-primary sm:w-[40%] md:w-[30%] h-2 bg-gray-300 rounded-full relative">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
