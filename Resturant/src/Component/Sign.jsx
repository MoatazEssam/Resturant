import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img from "../assets/Copy of Happy Culinarians Day! by Slidesgo.pptx.png";
import { FaFacebook, FaInstagram, FaGooglePlus } from "react-icons/fa";

const Sign = () => {
  const [isMoved, setIsMoved] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: signInErrors },
  } = useForm();

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: signUpErrors },
  } = useForm();

  // Navigate to Home page on successful sign in
  const onSubmitSignIn = (data) => {
    console.log("Sign In Data:", data);
    navigate("/Home"); // Navigate to Home page
  };

  // Navigate to Home page on successful sign up
  const onSubmitSignUp = (data) => {
    console.log("Sign Up Data:", data);
    navigate("/Home"); // Navigate to Home page
  };

  return (
    <div className="flex bg-gray-300 justify-center items-center h-screen">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
        className={`flex flex-col  md:flex-row justify-center h-fit sm:h-[60%] p-5   z-10  relative items-center gap-14 drop-shadow-2xl border-4 bg-url(${img}) shadow-2xl rounded-2xl p-8 overflow-hidden`}
      >
        <div className="w-full h-full -z-10 absolute bg-black opacity-70 "></div>
        {/* Sign In Form */}
        <form
          onSubmit={handleSubmitSignIn(onSubmitSignIn)}
          className="w-full flex flex-col justify-center  items-center px-2 py-2"
        >
          <h2 className="text-4xl font-cairo text-white font-bold mb-4 text-center">
            Sign In
          </h2>
          <div className="flex items-center  text-gray-200  text-2xl justify-center gap-8 flex-row">
            <FaFacebook className="hover:text-[#ff550c]  duration-300 ease-in-out  cursor-pointer" />
            <FaInstagram className="hover:text-[#ff550c] duration-300 ease-in-out cursor-pointer" />
            <FaGooglePlus className="hover:text-[#ff550c] duration-300 ease-in-out cursor-pointer" />
          </div>
          <div className="my-4">
            <input
              id="username-signin"
              placeholder="Username"
              type="text"
              {...registerSignIn("username", {
                required: "Username is required",
              })}
              className={`shadow appearance-none border rounded w-[300px]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                signInErrors.username ? "border-red-500" : ""
              }`}
            />
            {signInErrors.username && (
              <p className="text-red-500 text-xs italic">
                {signInErrors.username.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <input
              placeholder="Password"
              id="password-signin"
              type="password"
              {...registerSignIn("password", {
                required: "Password is required",
              })}
              className={`shadow appearance-none border rounded w-[300px]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                signInErrors.password ? "border-red-500" : ""
              }`}
            />
            {signInErrors.password && (
              <p className="text-red-500 text-xs italic">
                {signInErrors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#cc6318] font-cairo hover:bg-[#ff550c] w-40 text-white font-semibold  py-2 rounded-3xl focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Form */}
        <form
          onSubmit={handleSubmitSignUp(onSubmitSignUp)}
          className="w-full flex flex-col justify-center  items-center px-2 py-2"
        >
          <h2 className="text-2xl font-cairo text-white font-bold mb-2 text-center">
            Create Account
          </h2>
          <div className="flex items-center  text-gray-200  text-2xl justify-center gap-8 flex-row">
            <FaFacebook className="hover:text-[#ff550c]  duration-300 ease-in-out  cursor-pointer" />
            <FaInstagram className="hover:text-[#ff550c] duration-300 ease-in-out cursor-pointer" />
            <FaGooglePlus className="hover:text-[#ff550c] duration-300 ease-in-out cursor-pointer" />
          </div>
          <div className="my-4">
            <input
              id="username-signup"
              placeholder="Username"
              type="text"
              {...registerSignUp("username", {
                required: "Username is required",
              })}
              className={`shadow appearance-none border rounded w-[300px]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                signUpErrors.username ? "border-red-500" : ""
              }`}
            />
            {signUpErrors.username && (
              <p className="text-red-500 text-xs italic">
                {signUpErrors.username.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <input
              placeholder="Password"
              id="password-signup"
              type="password"
              {...registerSignUp("password", {
                required: "Password is required",
              })}
              className={`shadow appearance-none border rounded w-[300px]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                signUpErrors.password ? "border-red-500" : ""
              }`}
            />
            {signUpErrors.password && (
              <p className="text-red-500 text-xs italic">
                {signUpErrors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center text-center">
            <button
              type="submit"
              className="bg-[#cc6318] font-cairo  hover:bg-[#ff550c] w-40 text-white font-semibold  py-2 rounded-3xl focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Clickable Absolute Div */}
        <div
          className={`bg-gradient-to-t px-5 from-[#ff3b00] to-[#ff9d2e] absolute flex flex-col  ease-in-out justify-center items-center top-0 left-0 w-full sm:w-1/2 h-1/2 sm:h-full transform transition-transform duration-500 ${
            isMoved
              ? " translate-y-full sm:translate-y-0 sm:translate-x-full"
              : ""
          }`}
        >
          <h1 className="text-4xl tracking-widest text-white font-cairo  w-full font-extrabold mb-2 text-center">
            {isMoved ? "Hello , Friend !" : "Welcome Back !"}
          </h1>
          <p className="text-sm text-gray-500 font-cairo  w-full font-extrabold mb-2 text-center">
            {isMoved
              ? "Enter Your Personal Informations To Start Your Journey In our Resturant With us"
              : "To Keep Connected With Us Please Login With Your Personal Informations"}
          </p>
          <button
            className="bg-[#ff550c] w-40 border-2 border-white  text-white font-semibold  py-2 rounded-3xl focus:outline-none focus:shadow-outline"
            onClick={() => setIsMoved(!isMoved)}
          >
            {isMoved ? "Sign UP" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
