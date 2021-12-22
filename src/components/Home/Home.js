import React from "react";
import BrandLogo from "./BrandLogo";
import Categories from "./Categories";
import CoffeeCards from "./CoffeeCards";
import LoggedUser from "./LoggedUser";
import Search from "./Search";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <BrandLogo />
      <LoggedUser />
      <Search />
      <CoffeeCards />
      <Categories />
    </div>
  );
};

export default Home;
