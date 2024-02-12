import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate.js";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-md bg-black p-12 w-3/12 my-44 mx-auto right-0 left-0 text-white bg-opacity-75 bg-gradient-to-b from-black "
      >
        <h1 className="text-4xl my-3 mx-2 font-bold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="name"
            className="w-full bg-gray-800 rounded-md my-4 p-3"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email address"
          className="my-4 p-3 w-full bg-gray-800 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-3 w-full bg-gray-800 rounded-md"
        />
        <p className="text-red-500 font-bold ">{errorMessage}</p>
        <button
          className="my-6 p-4 w-full bg-red-700 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="cursor-pointer" onClick={handleSignUp}>
          {isSignUp ? "Already registed? Sign In" : "New to Netflix? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
