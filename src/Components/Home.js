import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Home = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const logoElement = logoRef.current;
      const scrollPosition = window.pageYOffset;
      const elementPosition = logoElement.offsetTop;
      const distance = scrollPosition - elementPosition;
      logoElement.style.transform = `translateY(${distance * 0.5}px)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const waterfallImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "1200px",
    width: "100%",
  };

  const coorieLogo = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Coorie+Video+Logo+White.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "700px",
    height: "700px",
    position: "absolute",
    top: "calc(50% + 150px)",
    left: "50%",
    transform: "translate(-50%, -70px)",
  };

  const containerStyle = {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const breakpoints = {
    small: "(max-width: 639px)",
    medium: "(min-width: 640px) and (max-width: 1023px)",
    large: "(min-width: 1024px)",
  };

  const isSmallScreen = useMediaQuery({ query: breakpoints.small });
  // const isMediumScreen = useMediaQuery({ query: breakpoints.medium });
  // const isLargeScreen = useMediaQuery({ query: breakpoints.large });

  const waterfallImageStyle = {
    ...waterfallImage,
    ...containerStyle,
    height: isSmallScreen ? "450px" : "1200px",
  };

  const coorieLogoStyle = {
    ...coorieLogo,
    top: isSmallScreen ? "calc(50% + 50px)" : "calc(50% + 150px)",
    height: isSmallScreen ? "220px" : "700px",
    transform: isSmallScreen
      ? "translate(-15%, 20%)"
      : "translate(-50%, 100px)",
  };

  const pageContainerStyle = {
    maxWidth: "100%",
    overflowX: "hidden",
  };

  const titleStyle = {
    fontSize: isSmallScreen ? "1rem" : "3rem",
  };

  return (
    <section>
      <div className="relative bg-cover" style={waterfallImageStyle}>
        <NavBar className="absolute top-0 left-0 right-0" />
        <div className="parallax text-center mt-10" ref={logoRef}>
          <div style={coorieLogoStyle}></div>
        </div>
      </div>

      <div style={pageContainerStyle}>
        <div
          style={{
            ...pageContainerStyle,
            paddingLeft: isSmallScreen ? "10px" : "50px",
            paddingRight: isSmallScreen ? "10px" : "50px",
          }}
        >
          <h1
            className={`text-2xl font-light text-center text-customGray ${
              isSmallScreen ? "p-4" : "p-10"
            }`}
            style={titleStyle}
          >
            COORIE / ku:ri /
          </h1>
          <h1
            className={`text-6xl font-light italic text-center text-customGray ${
              isSmallScreen ? "p-2" : "p-10"
            }`}
            style={titleStyle}
          >
            "The Scottish art of deriving comfort, wellbeing and energy from
            wild landscapes."
          </h1>
          <h1
            className={`text-6xl font-demi-bold text-center text-customGray ${
              isSmallScreen ? "p-5" : "p-10"
            }`}
            style={titleStyle}
          >
            The aim of The Coorie Project is to create an online platform to
            highlight the beauty of the natural world, and help protect it by
            raising awareness and funds for climate change science and curated
            sustainability projects.
          </h1>
          <h1
            className={`text-6xl font-light text-center text-customGray ${
              isSmallScreen ? "p-2" : "p-20"
            }`}
            style={titleStyle}
          >
            How do we do this?
          </h1>
        </div>

        <div className="">
          <img
            className={`mx-auto ${isSmallScreen ? "pt-6" : ""}`}
            style={{ maxWidth: "15%", display: "block" }}
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/wave.png"
            alt="wave line page breaker"
          />
        </div>

        <div
          className={`flex flex-col items-center justify-center ${
            isSmallScreen ? "p-1" : "p-10"
          }`}
        >
          <div
            className={`flex ${
              isSmallScreen ? "flex-col" : "justify-between"
            } mb-4`}
          >
            <div className="flex flex-col items-center w-full">
              <h1
                className={`text-${
                  isSmallScreen ? "4xl" : "5xl"
                } font-light text-center text-customGray ${
                  isSmallScreen ? "p-4 pt-20" : "p-10"
                }`}
              >
                Youtube
              </h1>

              <div className={`px-10 ${isSmallScreen ? "px-1" : ""}`}>
                <img
                  className="w-full"
                  src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Giants+Graves+3+INSTA.jpg"
                  alt="explainer 2"
                />
              </div>
              <p
                className={`text-2xl font-light text-center text-customGray ${
                  isSmallScreen ? "p-4 text-sm" : "p-10"
                }`}
              >
                For every location we visit, a high quality video will be shot
                and made available to view on our channel. Through a monetized
                YouTube channel, funds can be generated from clicks and views,
                rather than donations.
              </p>
              <Link
                to="/youtube"
                className={`relative px-6 py-3 font-bold text-black group ${
                  isSmallScreen ? "p-1" : ""
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Subscribe</span>
              </Link>
            </div>
            {isSmallScreen && <div className="h-4"></div>}
            <div className="flex flex-col items-center w-full">
              <h1
                className={`text-${
                  isSmallScreen ? "4xl" : "5xl"
                } font-light text-center text-customGray ${
                  isSmallScreen ? "p-4 pt-20" : "p-10"
                }`}
              >
                Screenprints
              </h1>

              <div className={`px-10 ${isSmallScreen ? "px-1" : ""}`}>
                <img
                  className="w-full"
                  src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lower+q.jpeg"
                  alt="explainer 2"
                />
              </div>
              <p
                className={`text-2xl font-light text-center text-customGray ${
                  isSmallScreen ? "p-4 text-sm" : "p-10"
                }`}
              >
                For every YouTube video we publish, there will also be a pinhole
                camera photograph taken from the same vantage point. These will
                then be professionally screenprinted by the artist using
                traditional techniques at The Glasgow Print Studio.
              </p>
              <Link
                to="/screenprints"
                className={`relative px-6 py-3 font-bold text-black group ${
                  isSmallScreen ? "p-1" : ""
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Screenprints</span>
              </Link>
            </div>
            {isSmallScreen && <div className="h-4"></div>}
            <div className="flex flex-col items-center w-full">
              <h1
                className={`text-${
                  isSmallScreen ? "4xl" : "5xl"
                } font-light text-center text-customGray ${
                  isSmallScreen ? "p-4 pt-20" : "p-10"
                }`}
              >
                Sponsorship
              </h1>
              <div className={`px-10 ${isSmallScreen ? "px-1" : ""}`}>
                <img
                  className="w-full"
                  src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/zeroimagedetail.png"
                  alt="explainer3"
                />
              </div>
              <p
                className={`text-2xl font-light text-center text-customGray ${
                  isSmallScreen ? "p-4 text-sm" : "p-10"
                }`}
              >
                As we grow, companies may wish to have your relevant products
                featured or discussed on our online platforms. Simply contact us
                via email to discuss. Also, anyone wishing to simply support The
                Coorie Project need only visit our Patreon account.
              </p>
              <a
                href="#"
                className={`relative px-6 py-3 font-bold text-black group ${
                  isSmallScreen ? "p-1" : ""
                }`}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Support</span>
              </a>
            </div>
            {isSmallScreen && <div className="h-4"></div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
