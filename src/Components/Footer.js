import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className=" relative text-white w-full overflow-hidden bg-orange-400">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class=" relative fill-white block"
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-5  p-10">
            <h1 className="text-3xl text-amber-900  ">Logo</h1>
            <p className=" cursor-default">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              asperiores nobis, sequi voluptate className= "text-white
              hover:text-amber-950 transition-all duration-150 ease"{" "}
            </p>
          </div>

          <div className="flex flex-col gap-5 p-10">
            <ul>
              <li className="text-[22px] list-none font-semibold py-2 uppercase text-amber-900">
                Design
              </li>
              <li className="my-4 list-none cursor-pointer hover:text-amber-950 ">
                GuideLine & Ideas
              </li>
              <li className="my-4 list-none cursor-pointer hover:text-amber-950 ">
                Tips and Tricks
              </li>
              <li className="my-4 list-none cursor-pointer hover:text-amber-950 ">
                Photography
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 p-10">
          <ul>
              <li className="text-[22px] list-none font-semibold py-2 uppercase text-amber-900  cursor-pointer hover:text-amber-950 ">
                Creativity
              </li>
              <li className="my-4 list-none ">Website and GuideLine</li>
              <li className="my-4 list-none ">Tips and Tricks</li>
              <li className="my-4 list-none ">Photography</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 p-10">
        
            <ul>
              <li className="text-[22px] list-none font-semibold py-2 uppercase text-amber-900">
                Contact
              </li>
              <li className="my-4 list-none cursor-pointer hover:text-amber-950 und">
                Email:moizmirza212@gmail.com
              </li>
              <li className="my-4 list-none cursor-pointer hover:text-amber-950">
                Phone: +92-3471382964
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                className="text-white hover:text-amber-950 transition-all duration-150 ease-in-out transform hover:scale-150"
                href=""
              >
                <FaGithub />
              </a>
              <a
                className="text-white hover:text-amber-950 transition-all duration-150 ease-in-out transform hover:scale-150"
                href=""
              >
                <FaLinkedin />
              </a>
              <a
                className="text-white hover:text-amber-950 transition-all duration-150 ease-in-out transform hover:scale-150"
                href=""
              >
                <FaTwitter />
              </a>
              <a
                className="text-white hover:text-amber-950 transition-all duration-150 ease-in-out transform hover:scale-150"
                href=""
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
          <div className="mt-20">
            <div className="h-full flex items-center justify-center mb-5">
                <form className="w-96 relative" action="">
                    <input placeholder="Enter Message" className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border border-orange-900" type="text" />
                    <button className="bg-orange-900 px-8 py-2 rounded-full text-white absolute top-0 right-0" type="submit">Submit</button>
                </form>
            </div>
            <h6 className="text-center text-black font-semibold">&copy; Copyright CC 2024</h6>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
