import React from "react";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import image1 from "../assets/projects/learningpoint/learning-point-client-26788.web.app_ (1).png";
import image2 from "../assets/projects/learningpoint/learning-point-client-26788.web.app_courses.png";
import image3 from "../assets/projects/learningpoint/learning-point-client-26788.web.app_courseSummary_04 (1).png";
import image4 from "../assets/projects/learningpoint/learning-point-client-26788.web.app_courseSummary_04 (2).png";
import image5 from "../assets/projects/learningpoint/learning-point-client-26788.web.app_courseSummary_04.png";

const LearningPoint = () => {
  return (
    <div
      data-aos="fade-left"
      className="flex lg:flex-row flex-col gap-10 lg:justify-center justify-self-auto items-center lg:h-[700px] mg:px-0 px-5"
    >
      <div className="w-96 mt-5">
        <Slide>
          <div className="each-slide">
            <img src={image1} className="object-fit h-96 w-96" alt="" />
          </div>
          <div className="each-slide">
            <img src={image2} className="object-fit h-96" alt="" />
          </div>
          <div className="each-slide">
            <img src={image3} className="object-fit h-96" alt="" />
          </div>
          <div className="each-slide">
            <img src={image4} className="object-fit h-96" alt="" />
          </div>
          <div className="each-slide">
            <img src={image5} className="object-fit h-96" alt="" />
          </div>
        </Slide>
      </div>
      <div className="lg:w-1/2 lg:text-start md:text-center text-white space-y-5">
        <h2 className="font-bold text-3xl">Learning Point</h2>
        <p>
          This Project was build from focusing on E-learning. There are many
          courses where an user can enroll.
        </p>
        <div>
          <span className="text-xl font-semibold">Features:</span>
          <ul className="lg:list-disc md:list-none lg:ml-5">
            <li>Light/dark mode toggle</li>
            <li>Mobile Compatibility</li>
            <li>Fullscreen mode</li>
            <li>Cross platform</li>
            <li>Swiper Slider</li>
            <li>React Toasts</li>
            <li>Firebase Authentication</li>
            <li>Custom Error 404 Page</li>
            <li>User Friendly UI</li>
            <li>Custom API</li>
            <li>PDF download Option for available Options</li>
          </ul>
        </div>
        <h2>
          <span className="text-xl font-semibold">Technologies Used:</span>{" "}
          ReactJS, Tailwind, MongoDB, Firebase, React-loader-spinner, React-to-pdf, React-toastify, Swiper-slider, React-icons.
        </h2>
        <div className="flex md:flex-row flex-col gap-5 lg:justify-start md:justify-center ">
          <div className="h-16 md:w-52 flex justify-center items-center">
            <a
              href="https://learning-point-client-26788.web.app/"
              target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <button className="text-center text-white font-semibold z-10 pointer-events-none">
              Live Link
            </button>
          </div>
          <div className="h-16 md:w-52 flex justify-center items-center">
            <a
              href="https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-NurulIslam96"
              target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
              Client-Repository
            </span>
          </div>
          <div className="h-16  md:w-52 flex justify-center items-center">
            <a
              href="https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-NurulIslam96"
              target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
            Server-Repository
            </span>
          </div>
        </div>
      </div>
      <Link to={'/projects'} className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white cursor-pointer px-5 py-2 rounded-md"><FaBackward/></Link>
    </div>
  );
};

export default LearningPoint;
