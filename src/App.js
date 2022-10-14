import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { auth } from "./firebase";

function App() {
  const user = true;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
      } else {
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
