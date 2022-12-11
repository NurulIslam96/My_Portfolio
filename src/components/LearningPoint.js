import React from "react";
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
      <div className="w-96">
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
      </div>
    </div>
  );
};

export default LearningPoint;
