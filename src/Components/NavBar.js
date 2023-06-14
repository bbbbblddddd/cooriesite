import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="fixed top-0 left-0 z-50 w-full">
        <div className={`flex justify-between items-center px-4 py-2 ${isMenuOpen ? "bg-white bg-opacity-90" : ""}`}>
          <div
            className={`cursor-pointer ${
              isMenuOpen ? "text-black" : "text-gray-500"
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <img
                src="/images/hamburger.png"
                alt="Hamburger Logo"
                className="h-12 w-12"
              />
            )}
          </div>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col justify-center items-center p-20 space-y-10 bg-white bg-opacity-90">
            <li>
              <Link className="text-2xl font-light italic" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-2xl font-light italic" to="/screenprints">
                Screenprints
              </Link>
            </li>
            <li>
              <Link className="text-2xl font-light italic" to="/youtube">
                Youtube
              </Link>
            </li>
            <li>
              <Link className="text-2xl font-light italic" to="/radio">
                Radio Show
              </Link>
            </li>
            <div className="flex justify-center space-x-10">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCULPVxk5Zjk2zje5drAou_Q?app=desktop&disable_polymer=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/youtube.png"
                    alt="YouTube Logo"
                    className="h-6 w-6 cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/coorieproject/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/instagram.png"
                    alt="Instagram Logo"
                    className="h-6 w-6 cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:coorieproject@gmail.com">
                  <img
                    src="/images/email.png"
                    alt="Email Logo"
                    className="h-6 w-6 cursor-pointer"
                  />
                </a>
              </li>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
