import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div
      className="
        w-full
      min-h-screen
      bg-gradient-to-r
      from-slate-700
      via-slate-800
      to-slate-900
      background-animate
      overflow-x-hidden
      "
    >
      <div className="pt-5">
        <NavBar></NavBar>
      </div>
      <div className="container mx-auto">
        <div className="bg-white my-5 bg-opacity-5 container mx-auto lg:h-[700px] md:h-screen w-full absolute rounded-md"></div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
