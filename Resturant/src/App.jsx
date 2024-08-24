import { useState } from "react";
import React, { useEffect } from "react";
import Sign from "./Component/Sign";
import Header from "./Component/Header/Header";
import Landing from "./Component/Landing/Landing";
import Services from "./Component/Services/Services";
function App() {
  return (
    <div className="">
      {/* <Sign /> */}
      <Header />
      <Landing />
      <Services />
    </div>
  );
}

export default App;
