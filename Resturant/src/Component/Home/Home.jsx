import React from "react";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import Categories from "../Categories/Categories";
import Menu from "../Menu/Menu";
import Rating from "../Rating/Rating";
import Reserve from "../Reserve/Reserve";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <div id="landing">
        <Landing />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="rating">
        <Rating />
      </div>
      <div id="reserve">
        <Reserve />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
