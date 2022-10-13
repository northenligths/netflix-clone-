import React from "react";

const SignUpScreen = () => {
  return (
    <div className="bg-black py-10 px-8 rounded-md md:flex flex-col">
      <h1 className="text-white text-3xl font-bold">SignIn</h1>
      <input
        type="email"
        placeholder="email"
        className="text-black px-4 my-4 py-2 rounded-sm"
      />
      <input
        type="password"
        placeholder="*****"
        className="text-black px-4 py-2 rounded-sm"
      />
      <button className="px-28 py-2 bg-red-500 my-4 text-white rounded-md">
        SignIn
      </button>
      <div className="flex items-center gap-2 text-md sm:px-10 md:px-2">
        <p className="text-slate-400">New to Netflix?</p>
        <p className="text-white">Sign up now.</p>
      </div>
    </div>
  );
};

export default SignUpScreen;
