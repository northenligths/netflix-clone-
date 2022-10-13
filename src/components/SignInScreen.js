import React from "react";

const SignInScreen = ({ setSignIn, signIn }) => {
  return (
    <>
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
        <button
          onClick={() => setSignIn(true)}
          className="text-white font-bold whitespace-nowrap bg-red-500 py-1 px-2 rounded-sm sm:py-2 xl:px-6"
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default SignInScreen;
