import React from "react";
import BuyTop from '../assets/buytop.png'
import Learning from '../assets/learning.png'
import Dentisia from '../assets/dentisia.png'

const Projects = () => {
  return (
    <div className="relative pt-10 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 h-[700px] items-center justify-items-center">
      <div data-aos="fade-right" className="max-w-xl">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <span href="#">
            <img
              className="rounded-t-lg"
              src={BuyTop}
              alt=""
            />
          </span>
          <div className="p-5">
            <span href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                BuyTop
              </h5>
            </span>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <span
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="max-w-xl">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <span href="#">
            <img
              className="rounded-t-lg"
              src={Learning}
              alt=""
            />
          </span>
          <div className="p-5">
            <span href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                Learning Point
              </h5>
            </span>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <span
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="max-w-xl">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <span href="#">
            <img
              className="rounded-t-lg"
              src={Dentisia}
              alt=""
            />
          </span>
          <div className="p-5">
            <span href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                Dentisia
              </h5>
            </span>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <span
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
