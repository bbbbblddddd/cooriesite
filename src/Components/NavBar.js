import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul class="flex space-x-20 justify-center p-20" id="navbar">
        <li>
          <div className="flex flex-col justify-center items-center py-10">
            <Link className="text-2xl font-light italic" to="/">
              <a
                href="#_"
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
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
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
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
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Youtube
                </span>
              </a>
            </Link>
          </div>{" "}
        </li>
  
        <div className="flex flex-col justify-center items-center py-10">
            <Link className="text-2xl font-light italic" to="/radio">
              <a
                href="#_"
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Radio Show
                </span>
              </a>
            </Link>
          </div>

      
      </ul>
    </nav>
  );
};

export default NavBar;
