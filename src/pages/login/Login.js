import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        minHeight: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <header className="flex justify-between items-center bg-gradient-to-b from-black">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="w-44"
        />
        <button className="text-white px-4 mr-4 sm:px-8 bg-red-600 mx-2 font-bold sm:py-3 py-2 text-xl rounded-sm">
          Sign In
        </button>
      </header>
      <div className="loginBody text-center">
        <h1 className="text-white whitespace-nowrap sm:text-[38px] lg:text-[62px] font-bold">
          Unlimited films,TV programmes and more
        </h1>
        <p className="text-white text-center sm:text-3xl my-2 xl:text-[40px]">
          Watch anywhere.Cancel at any time
        </p>
        <p className="text-white text-center my-5 sm:text-lg xl:text-2xl">
          Ready to watch ? Enter your email to create or restart your membership
        </p>
        <div className="flex items-center justify-center">
          <input
            placeholder="Email address"
            className="px-2 py-1 sm:w-96 sm:py-2 xl:w-[550px]"
          />
          <button className="text-white font-bold whitespace-nowrap bg-red-500 py-1 px-2 rounded-sm sm:py-2 xl:px-6">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-black h-full" />
    </div>
  );
};

export default Login;
