import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignUp}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already registed? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
