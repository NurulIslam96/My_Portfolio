import React from "react";
import { Slide } from "react-slideshow-image";
import image1 from "../assets/projects/buytop/buy-top-client.web.app_.png";
import image2 from "../assets/projects/buytop/buy-top-client.web.app_dashboard_allsellers (1).png";
import image3 from "../assets/projects/buytop/buy-top-client.web.app_dashboard_allsellers.png";

const BuyTop = () => {
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
        <h2 className="font-bold text-3xl">BuyTop</h2>
        <p>
          BuyTop allows all CRUD operations on Category and Dashboard items. It
          is built using MERN stack and utilizes certain other technologies. It
          also allows Sign In using Google.
        </p>
        <div>
          <span className="text-xl font-semibold">Features:</span>
          <ul className="lg:list-disc md:list-none lg:ml-5">
            <li>Mobile/Tab Responsiveness.</li>
            <li>Admin Dashboard.</li>
            <li>Seller can Add and Advertise their products.</li>
            <li>Buyer can buy or report any item.</li>
            <li>Admin can Manage all users as well as verify them.</li>
            <li>Payment Gateway Stripe.</li>
          </ul>
        </div>
        <h2>
          <span className="text-xl font-semibold">Technologies Used:</span>{" "}
          ReactJS, Tailwind, MongoDB, Firebase, JWT, Express JS, Axios,
          React-Query, Context API, Tailwind, React Hook form, Firebase, Swiper,
          Stripe, React-router-dom, React-date-picker, Date-fns, React-fa-icon,
          React-hot-toast.
        </h2>
        {/* Responsive Project Buttons */}
        <div className="flex md:flex-row flex-col gap-5 lg:justify-start md:justify-center ">
          <div className="h-16 md:w-52 flex justify-center items-center">
            <a
              href="https://buy-top-client.web.app"
              target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <button className="text-center text-white font-semibold z-10 pointer-events-none">
              Live Link
            </button>
          </div>
          <div className="h-16 md:w-52 flex justify-center items-center">
            <a
              href="https://github.com/NurulIslam96/BuyTop-Client"
              target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
              Client-Repository
            </span>
          </div>
          <div className="h-16  md:w-52 flex justify-center items-center">
            <a
            href="https://github.com/programming-hero-web-course-4/b612-used-products-resale-server-side-NurulIslam96"
            target={'_blank'}
              className="h-16 md:w-52 w-2/3 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></a>
            <span className="text-center text-white font-semibold z-10 pointer-events-none">
            Server-Repository
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTop;
