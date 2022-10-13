import React, { useState } from "react";
import SignInScreen from "../../components/SignInScreen";
import SignUpScreen from "../../components/SignUpScreen";
import "./login.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
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
        {signIn ? (
          <SignInScreen signIn={signIn} setSignIn={setSignIn} />
        ) : (
          <SignUpScreen />
        )}
      </div>
      <div className="bg-gradient-to-t from-black h-full" />
    </div>
  );
};

export default Login;
