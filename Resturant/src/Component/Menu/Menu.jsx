import React, { useState } from "react";
import { cat } from "./food.jsx";
import { foods } from "./food.jsx";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category selection
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.category === selectedCategory)
    : foods;
  return (
    <div className="overflow-hidden h-full p-2 bg-[#f9f6f0]  pt-10 sm:pt-32 dark:bg-black">
      <div
        data-aos="fade-up"
        className="flex flex-col w-full justify-center text-center items-center mb-12"
      >
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
      <div
        data-aos="fade-up"
        className="flex justify-center w-full gap-2 mb-10 items-center flex-wrap text-center flex-row container "
      >
        {cat.map((category) => (
          <h1
            onClick={() => handleCategoryClick(category.att)}
            key={category.id}
            className={`font-cairo font-bold drop-shadow-2xl cursor-pointer dark:text-gray-200 dark:hover:text-black hover:bg-primary hover:text-white duration-300 ease-in-out
              transition-all border-[2px] shadow-2xl text-lg sm:text-2xl rounded-md border-primary/50 p-1 md:p-2 tracking-wider ${
                selectedCategory === category.att
                  ? "bg-primary text-white dark:text-black"
                  : ""
              }`}
          >
            {category.name}
          </h1>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 container text-center">
        {filteredFoods.map((food) => (
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            key={food.id}
            className="group  hover:bg-primary/20  dark:hover:bg-primary/5 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden 
             hover:shadow-2xl transition-shadow hover:drop-shadow-2xl duration-300 flex flex-col justify-between"
          >
            <div className="relative  w-full h-full overflow-hidden">
              <img
                src={food.img}
                alt={food.name}
                className="w-full h-[300px] object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col space-y-2">
              <h2 className="text-primary text-lg font-cairo font-bold tracking-wide uppercase">
                {food.category}
              </h2>

              <h1 className="text-2xl font-cairo font-bold text-gray-900 dark:text-white">
                {food.name}
              </h1>
              <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
              <p className="text-gray-600 dark:text-gray-300 text-base font-cairo leading-relaxed">
                {food.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-cairo font-bold text-[#f42f25]">
                  Price:
                </span>
                <span className="text-primary text-xl font-cairo font-bold">
                  {food.price}
                </span>
              </div>
            </div>
            {/* <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
