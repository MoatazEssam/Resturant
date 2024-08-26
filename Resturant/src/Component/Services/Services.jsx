import React from "react";
import s1 from "../../assets/Services/badge.png";
import s2 from "../../assets/Services/fast-delivery.png";
import s3 from "../../assets/Services/fast-food.png";
import s4 from "../../assets/Services/pizza.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: s1,
      title: "Good Quality",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 2,
      img: s2,
      title: "Fast Delivery",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 3,
      img: s3,
      title: "Food Variate",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
    {
      id: 4,
      img: s4,
      title: "Original Recipes",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate.",
    },
  ];
  return (
    <div className=" overflow-hidden pt-10 sm:pt-32 dark:bg-black ">
      <div className=" flex flex-col w-full  justify-center  items-center ">
        <div className="bg-primary h-2  w-[80%] sm:w-[40%]"></div>
      </div>
      <div className="flex flex-col mx-auto text-center w-full  my-10 sm:my-20 justify-center items-center ">
        <h1 className="text-4xl tracking-wider text-black dark:text-white sm:text-8xl font-cairo font-bold">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="break-words w-[80%] sm:w-[50%] whitespace-normal font-cairo text-base  text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          quaerat et recusandae, sed tempora tempore est suscipit error? Harum
          perferendis ex deserunt iusto architecto modi molestiae quos libero,
          error autem.
        </p>
      </div>
      <div className="grid  grid-cols-1 w-full h-fit gap-10 sm:grid-cols-4 ">
        {services.map((data) => (
          <div
            key={data.id}
            className="relative gap-3 group flex flex-col items-center text-center"
          >
            <div className="relative w-fit h-fit mb-5 bg-transparent">
              <div className="absolute inset-0 border-2 rounded-lg border-primary transition-transform duration-500 ease-in-out group-hover:bg-primary group-hover:rotate-45"></div>
              <img
                src={data.img}
                alt=""
                className="w-[150px] h-[150px] stroke-current p-6  object-cover relative z-10 transition duration-500 ease-in-out 
                dark:invert dark:filter dark:brightness-0 dark:sepia dark:hue-rotate-[180deg] dark:saturate-200
                "
              />
            </div>

            <h1 className="text-2xl dark:text-white font-cairo font-bold">
              {data.title}
            </h1>
            <p className="text-lg font-cairo text-gray-500">{data.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
