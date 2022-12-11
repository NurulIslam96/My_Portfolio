import React from 'react';
import { Slide } from 'react-slideshow-image';
import image1 from '../assets/projects/dentisia/dentisia-client-side.web.app_ (1).png';
import image2 from '../assets/projects/dentisia/dentisia-client-side.web.app_addservice.png';
import image3 from '../assets/projects/dentisia/dentisia-client-side.web.app_services_6369703d4d083ca9ccdc3652.png';

const Dentisia = () => {
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
          <ul className="list-disc md:list-none ml-5">
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
      </div>
    </div>
    );
};

export default Dentisia;