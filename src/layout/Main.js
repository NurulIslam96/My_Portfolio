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
      <div className="container mx-auto space-y-10 py-5">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="relative">
          <div className="bg-white bg-opacity-5 container mx-auto lg:h-[700px] md:h-screen w-full absolute rounded-md"></div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
