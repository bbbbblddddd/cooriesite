import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const logoElement = logoRef.current;
      const scrollPosition = window.pageYOffset;
      const distance = scrollPosition * 0.5;
      logoElement.style.transform = `translateY(${distance}px)`;
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
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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

  const waterfallImageStyle = {
    ...waterfallImage,
    ...containerStyle,
    height: isSmallScreen ? "450px" : "1200px",
  };

  const coorieLogoStyle = {
    ...coorieLogo,
    height: isSmallScreen ? "220px" : "700px",
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
        <div className="px-50">
          <h1
            className={`text-2xl font-light text-gray-700 text-center ${
              isSmallScreen ? "p-4" : "p-10"
            }`}
            style={titleStyle}
          >
            COORIE / ku:ri /
          </h1>
          <h1
            className={`text-6xl font-light italic text-gray-700 text-center ${
              isSmallScreen ? "p-2" : "p-10"
            }`}
            style={titleStyle}
          >
            "The Scottish art of deriving comfort, wellbeing and energy from wild
            landscapes."
          </h1>
          <h1
            className={`text-6xl font-demi-bold text-gray-700 text-center ${
              isSmallScreen ? "p-5" : "p-10"
            }`}
            style={titleStyle}
          >
            The aim of The Coorie Project is to create an online platform to
            highlight the beauty of the natural world, and help protect it by
            raising awareness and funds for climate change science and curated
            sustainability projects.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center h-screen">
          <div
            className={`flex ${
              isSmallScreen ? "flex-col" : "justify-between"
            } mb-4`}
          >
            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl">Title 3</h1>
              <div className="px-10">
                <img
                  className="w-full"
                  src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg"
                  alt="explainer 1"
                />
              </div>
              <a className="px-4 py-2 bg-gray-300 text-black" href="#">
                Button 1
              </a>
            </div>
            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl">Title 3</h1>
              <div className="px-10">
                <img
                  className="w-full"
                  src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg"
                  alt="explainer 2"
                />
              </div>
              <a className="px-4 py-2 bg-gray-300 text-black" href="#">
                Button 2
              </a>
            </div>
            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl">Title 3</h1>
              <div className="px-10">
                <img
                  className="w-full"
                  src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg"
                  alt="explainer3"
                />
              </div>
              <a className="px-4 py-2 bg-gray-300 text-black" href="#">
                Button 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
