import React from "react";
import { cat } from "./food.jsx";
import { foods } from "./food.jsx";

const Menu = () => {
  return (
    <div className="overflow-hidden h-full bg-[#f9f6f0]  pt-10 sm:pt-32 dark:bg-black">
      <div className="flex flex-col w-full justify-center text-center items-center mb-12">
        <div className="bg-primary mb-5 h-2 w-[80%] sm:w-[40%]"></div>
        <h1 className="text-4xl tracking-wider text-black dark:text-white mb-2 sm:text-6xl font-cairo font-bold">
          Our Delicious <span className="text-primary">Foods</span>
        </h1>
        <p className="w-[80%] sm:w-[50%] font-cairo text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          quaerat et recusandae, sed tempora tempore est suscipit error? Harum
          perferendis ex deserunt iusto architecto modi molestiae quos libero,
          error autem.
        </p>
      </div>
      <div className="flex justify-center w-full gap-2 mb-10 items-center flex-wrap text-center flex-row container ">
        {cat.map((category) => (
          <h1
            key={category.id}
            className="font-cairo font-bold drop-shadow-2xl cursor-pointer dark:text-gray-200 dark:hover:text-black hover:bg-primary hover:text-white duration-300 ease-in-out
            transition-all  border-[1px] shadow-2xlxl text-sm sm:text-2xl  rounded-md border-primary/50 p-1 md:p-2 tracking-wider "
          >
            {category.name}
          </h1>
        ))}
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-2  text-center  container ">
        {foods.map((food) => (
          <div
            key={food.id}
            className="h-full gap-3 w-full shadow-2xl drop-shadow-2xl dark:bg-black  flex text-left flex-col py-4 px-4  bg-white rounded-xl"
          >
            <img
              src={food.img}
              alt=""
              className="w-[300px] object-cover rounded-2xl h-[300px]"
            />
            <h2 className="text-gray-600 text-xl font-cairo font-bold">
              {food.category}
            </h2>
            <h1 className="text-black dark:text-white text-3xl font-cairo font-bold">
              {food.name}
            </h1>
            <p className="text-gray-600 text-xl font-cairo font-bold">
              {food.description}
            </p>
            <h1 className="text-[#f42f25] text-xl font-cairo font-bold">
              Price : <span className="text-primary">{food.price}</span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
