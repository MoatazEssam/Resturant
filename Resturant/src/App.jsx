import { useState } from "react";
import React, { useEffect } from "react";
import Sign from "./Component/Sign";
import Home from "./Component/Home/Home";
import ReactDOM from "react-dom/client";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Sign />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
