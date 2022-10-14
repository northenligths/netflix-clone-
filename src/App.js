import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/UserSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route index element={<Login />} />
          ) : (
            <Route index element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
