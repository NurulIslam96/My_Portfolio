import React from "react";
import "../App.css";
import image from '../assets/Group 8446 (1).png'
const Home = () => {
  return (
    <div data-aos="fade-left">
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center h-[700px] mx-2">
        <div className="lg:w-1/2 lg:mt-0">
          <h2 className="md:text-7xl lg:text-left text-center font-semibold text-white">Hi, I am </h2>
          <h2 className="md:text-7xl lg:text-left text-center font-semibold text-white">Md. Nurul Islam</h2>
          <h2 className="md:text-5xl lg:text-left text-center font-semibold text-blue-300 py-5">Front-End Developer</h2>
          <p className="text-slate-200 lg:text-left text-center text-justify">
            Hard-Working Web Developer With A Flair For Creating Elegant
            Solutions In The Least Amount Of Time. With A Proven Ability To
            Adapt To Both Self-Starting And Collaborative Environments While
            Staying Focused On Achieving High-Quality Results Under Strict
            Deadlines. Eager To Obtain A Challenging Position At A Prestigious
            Company That Will Expand My Learning And Builds Upon My Developer
            Skills.
          </p>
        </div>
        <img src={image} className="h-96 mt-5" alt="" />
      </div>
    </div>
  );
};

export default Home;
