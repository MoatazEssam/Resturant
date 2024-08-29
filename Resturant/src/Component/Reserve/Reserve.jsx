import React from "react";
import img1 from "../../assets/Menu/pizza.png";
import img2 from "../../assets/Menu/Burger.png";
import { useForm } from "react-hook-form";

const Reserve = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `Mr. ${data.Name}, you reserved a table for ${data.People} persons at ${data.Date} ${data.Time}. We will send the details to ${data.Email}.`
    );
  };
  return (
    <div className=" overflow-hidden flex items-center py-20 justify-center pt-10 h-full dark:bg-black ">
      <div className="flex flex-col items-center relative  text-center w-full">
        <div data-aos="fade-up">
          <h1 className="text-2xl tracking-wider text-black dark:text-white sm:text-3xl font-cairo font-bold">
            RESERVATION
          </h1>
          <h1 className="text-4xl tracking-wider text-primary  sm:text-8xl font-cairo font-extrabold">
            BOOK YOUR TABLE
          </h1>
        </div>
        <img
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          src={img1}
          alt=""
          className="absolute z-0 opacity-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-[10%] -left-44"
        />
        <img
          src={img2}
          alt=""
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="absolute z-0 opacity-40  w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-[50%] -right-48"
        />
        <form
          data-aos="zoom-in"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[90%] md:max-w-[50%] self-center z-10 gap-4 w-full grid grid-cols-1 md:grid-cols-2 px-2 py-20"
        >
          <div className="text-left">
            <input
              id="Name"
              placeholder="Name"
              type="text"
              {...register("Name", {
                required: "Name is required",
              })}
              className={`shadow appearance-none  font-cairo focus:border-primary border-2 h-14 border-black rounded-sm w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.Name ? "border-red-500" : ""
              }`}
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">{errors.Name.message}</p>
            )}
          </div>
          <div className="text-left">
            <input
              id="Email"
              placeholder="Email"
              type="email"
              {...register("Email", {
                required: "Email is required",
              })}
              className={`shadow appearance-none font-cairo focus:border-primary border-2 h-14 border-black rounded-sm w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.Email ? "border-red-500" : ""
              }`}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </div>
          <div className="text-left">
            <input
              id="Date"
              placeholder="Date"
              type="Date"
              {...register("Date", {
                required: "Date is required",
              })}
              className={`shadow appearance-none font-cairo focus:border-primary border-2 h-14 border-black rounded-sm w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.Date ? "border-red-500" : ""
              }`}
            />
            {errors.Date && (
              <p className="text-red-500 text-sm">{errors.Date.message}</p>
            )}
          </div>
          <div className="text-left">
            <input
              id="Time"
              placeholder="Time"
              type="time"
              {...register("Time", {
                required: "Time is required",
              })}
              className={`shadow appearance-none font-cairo focus:border-primary border-2 h-14 border-black rounded-sm w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.Time ? "border-red-500" : ""
              }`}
            />
            {errors.Time && (
              <p className="text-red-500 text-sm">{errors.Time.message}</p>
            )}
          </div>
          <div className="text-left">
            <input
              id="People"
              placeholder="People"
              type="number"
              {...register("People", {
                required: "Number of People is required",
              })}
              className={`shadow appearance-none font-cairo focus:border-primary border-2 h-14 border-black rounded-sm w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.People ? "border-red-500" : ""
              }`}
            />
            {errors.People && (
              <p className="text-red-500 text-sm">{errors.People.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`shadow appearance-none text-xl hover:text-white font-bold font-cairo hover:bg-primary bg-primary/80 border-2 h-14 border-black rounded-sm w-full  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline 
            `}
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
