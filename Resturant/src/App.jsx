import { useState } from "react";
import React, { useEffect } from "react";
import Sign from "./Component/Sign";
import Header from "./Component/Header/Header";
import Landing from "./Component/Landing/Landing";
function App() {
  return (
    <div>
      {/* <Sign /> */}
      <Header />
      <Landing />
    </div>
  );
}

export default App;
