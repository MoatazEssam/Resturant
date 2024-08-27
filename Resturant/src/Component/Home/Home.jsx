import React from "react";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import Categories from "../Categories/Categories";
import Menu from "../Menu/Menu";
import Rating from "../Rating/Rating";

const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Services />
      <Categories />
      <Menu />
      <Rating />
    </div>
  );
};

export default Home;
