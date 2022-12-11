import React from "react";
import { Slide } from "react-slideshow-image";
import image1 from "../assets/projects/dentisia/dentisia-client-side.web.app_ (1).png";
import image2 from "../assets/projects/dentisia/dentisia-client-side.web.app_addservice.png";
import image3 from "../assets/projects/dentisia/dentisia-client-side.web.app_services_6369703d4d083ca9ccdc3652.png";
import {FaBackward} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Dentisia = () => {
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
        </Slide>
      </div>
      <div className="lg:w-1/2 lg:text-start md:text-center text-white space-y-5">
        <h2 className="font-bold text-3xl">Dentisia</h2>
        <p>
          This Project was built by focusing on services of an Individual
          Dentist and services reviews. But a new user can also add their unique
          service and other users can review them.
        </p>
        <div>
          <span className="text-xl font-semibold">Features:</span>
          <ul className="lg:list-disc md:list-none lg:ml-5">
            <li>Mobile Compatibility</li>
            <li>Fullscreen mode</li>
            <li>Cross platform</li>
            <li>React Hot Toasts</li>
            <li>Firebase Authentication</li>
            <li>Custom Error 404 Page</li>
            <li>User Friendly UI</li>
            <li>Custom API</li>
            <li>Image Zoom on Click</li>
            <li>Review Page with Edit and Delete Function</li>
            <li>Reviews sorted by Timestamp</li>
            <li>Animation on Scroll</li>
          </ul>
        </div>
        <h2>
          <span className="text-xl font-semibold">Technologies Used:</span>{" "}
          ReactJS, Tailwind, MongoDB, Firebase, JWT, AOS, React-helmet,
          React-icons, React-image-viewer, React-router-dom.
        </h2>
        <div className="flex md:flex-row flex-col gap-5 lg:justify-start md:justify-center ">
          <div className="h-16 md:w-52 flex justify-center items-center">
            <a href="https://dentisia-client-side.web.app/"
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
              target={'_blank'}
              ></a>
            <button className="text-center text-white font-semibold z-10 pointer-events-none">
              Live Link
            </button>
          </div>
          <div className="h-16 md:w-52 flex justify-center items-center">
            <a
              href="https://github.com/NurulIslam96/Dentisia-ServiceAdd-Client"
              target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
              Client-Repository
            </span>
          </div>
          <div className="h-16  md:w-52 flex justify-center items-center">
            <a
              href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-NurulIslam96"
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

export default Dentisia;
