import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
