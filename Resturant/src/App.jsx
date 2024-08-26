import { useState } from "react";
import React, { useEffect } from "react";
import Sign from "./Component/Sign";
import Header from "./Component/Header/Header";
import Landing from "./Component/Landing/Landing";
import Services from "./Component/Services/Services";
import Categories from "./Component/Categories/Categories";
import Menu from "./Component/Menu/Menu";
function App() {
  return (
    <div className="">
      {/* <Sign /> */}
      <Header />
      <Landing />
      <Services />
      <Categories />
      <Menu />
    </div>
  );
}

export default App;
