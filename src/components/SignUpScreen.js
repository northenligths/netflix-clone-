import React, { useRef } from "react";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const emailRef = useRef(); //using ref instead of useState for getting the values of input fields of email and password
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="bg-black py-10 px-8 rounded-md md:flex flex-col">
      <h1 className="text-white text-3xl font-bold">SignIn</h1>
      <input
        ref={emailRef}
        type="email"
        placeholder="email"
        className="text-black px-4 my-4 py-2 rounded-sm"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="*****"
        className="text-black px-4 py-2 rounded-sm"
      />
      <button
        className="px-28 py-2 bg-red-500 my-4 text-white rounded-md"
        onClick={signIn}
      >
        SignIn
      </button>
      <div className="flex items-center gap-2 text-md sm:px-10 md:px-2">
        <p className="text-slate-400">New to Netflix?</p>
        <p className="text-white" onClick={register}>
          Sign up now.
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
