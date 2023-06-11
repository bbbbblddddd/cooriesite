import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <nav>
      <ul
        className={`flex ${isSmallScreen ? "flex-col" : "space-x-20"} justify-center p-20`}
        id="navbar"
      >
        <li>
          <div className="flex flex-col justify-center items-center py-10">
            <Link className="text-2xl font-light italic" to="/">
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Home
                </span>
              </a>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-center py-10">
            <Link className="text-2xl font-light italic" to="/screenprints">
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Screenprints
                </span>
              </a>
            </Link>
          </div>{" "}
        </li>
        <li>
          <div className="flex flex-col justify-center items-center py-10">
            <Link className="text-2xl font-light italic" to="/youtube">
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Youtube
                </span>
              </a>
            </Link>
          </div>{" "}
        </li>
        <li>
          <div className="flex flex-col justify-center items-center py-10">
            <Link className="text-2xl font-light italic" to="/radio">
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Radio Show
                </span>
              </a>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
