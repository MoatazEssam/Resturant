import React from "react";
import { useForm } from "react-hook-form";

const Sign = () => {
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

  const onSubmitSignIn = (data) => {
    console.log("Sign In Data:", data);
  };

  const onSubmitSignUp = (data) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 border-2 bg-slate-100 shadow-2xl rounded-lg p-8  ">
        {/* Sign In Form */}
        <form
          onSubmit={handleSubmitSignIn(onSubmitSignIn)}
          className="w-full max-w-xs px-10 py-10 "
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <div className="mb-4">
            <input
              id="username-signin"
              placeholder="Username"
              type="text"
              {...registerSignIn("username", {
                required: "Username is required",
              })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
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
              className="bg-[#ff3b00]  hover:bg-blue-700 text-white font-semibold   w-full py-2  rounded-3xl focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Sign Up Form */}
        <form
          onSubmit={handleSubmitSignUp(onSubmitSignUp)}
          className="w-full max-w-xs px-10 py-10 "
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <div className="mb-4">
            <input
              id="username-signup"
              placeholder="Username"
              type="text"
              {...registerSignUp("username", {
                required: "Username is required",
              })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
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
              className="bg-[#ff3b00]  hover:bg-blue-700 text-white font-semibold   w-full py-2  rounded-3xl focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
