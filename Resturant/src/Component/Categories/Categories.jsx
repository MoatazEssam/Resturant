import React from "react";
import img from "../../assets/Landing/offer2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Categories = () => {
  const services = [
    {
      id: 1,
      title: "Pizza",
      img: img,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 2,
      title: "Breakfast",
      img: img,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 3,
      title: "Burger",
      img: img,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 4,
      title: "Salad",
      img: img,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 5,
      title: "Seafood",
      img: img,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
  ];

  return (
    <div className="overflow-hidden pt-10 sm:pt-32 dark:bg-black">
      {/* Header Section */}
      <div className="flex flex-col w-full justify-center items-center mb-12">
        <div className="bg-primary h-2 w-[80%] sm:w-[40%]"></div>
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
      <div className="container ">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {services.map((data) => (
            <SwiperSlide key={data.id} className="flex  justify-center">
              <div className="flex flex-col mx-auto items-center justify-center text-center bg-cyan-300 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 w-72 sm:w-80 md:w-96">
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-cover w-40 h-40 mb-4 shadow-md"
                />
                <h1 className="text-2xl font-bold text-black mb-2">
                  {data.title}
                </h1>
                <p className="text-sm text-gray-600 mb-4">{data.des}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
