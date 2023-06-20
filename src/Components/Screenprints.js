import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import { useMediaQuery } from "react-responsive";

const Screenprints = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax");
      for (let element of parallaxElements) {
        const scrollPosition = window.pageYOffset;
        const elementPosition = element.offsetTop;
        const distance = scrollPosition - elementPosition;
        element.style.transform = `translateY(${distance * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const printImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/the+Cobbler+copy.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "1200px",
    width: "100%",
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
  const isMediumScreen = useMediaQuery({ query: breakpoints.medium });

  const printImageStyle = {
    ...printImage,
    ...containerStyle,
    height: isSmallScreen ? "450px" : "1200px",
  };

  return (
    <div>
      <section>
        <div
          className={`relative h-screen bg-cover sm:bg-auto ${
            isSmallScreen ? "transform-none" : "transform-y-1/2"
          }`}
          style={{ ...printImageStyle, ...containerStyle }}
        >
          <NavBar className="absolute top-0 left-0 right-0" />
          <h2
            className={`text-6xl font-semibold text-white text-center py-32 sm:py-80 px-20 parallax ${
              isSmallScreen
                ? "text-lg px-4"
                : isMediumScreen
                ? "text-1xl px-12 sm:py-52"
                : ""
            }`}
            style={{ textShadow: "0 0 1px black" }}
          >
            Screenprints. Professionally made by hand in Glasgow, Scotland.
          </h2>
          <h2
            className={`text-4xl font-light text-white text-center py-24 sm:py-72 parallax px-20 ${
              isSmallScreen
                ? "text-sm px-4"
                : isMediumScreen
                ? "text-1xl px-12 sm:py-52"
                : ""
            }`}
            style={{
              textShadow: "0 0 1px black",
              position: "absolute",
              top: "50%",
              transform: "translateY(-35%)",
            }}
          >
            Our Screenprints begin with a single black and white pinhole
            photograph that accompanies each video. We then develop these
            photographs at Street Level Photoworks in Glasgow. These images are
            then professionally screenprinted using traditional techniques at
            The Glasgow Print Studio.
          </h2>
        </div>
        <section>
          <img
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Artboard+1.png"
            alt="Artboard 1"
          />
          <img
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Artboard+2.png"
            alt="Artboard 2"
          />
          <img
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Artboard+3.png"
            alt="Artboard 3"
          />
          <img
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Artboard+4.png"
            alt="Artboard 4"
          />
          <img
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Artboard+5.png"
            alt="Artboard 5"
          />
        </section>

        <div className="flex flex-col justify-center items-center">
          <Gallery />
        </div>
      </section>

      <div className="flex flex-col justify-center items-center py-10 sm:py-20">
        <a
          href="https://dreichdesign.bigcartel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl font-light italic relative inline-block px-4 py-2 font-medium group"
        >
          <span
            className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0 ${
              isSmallScreen ? "scale-90" : ""
            }`}
          ></span>
          <span
            className={`absolute inset-0 w-full h-full border-4 border-black ${
              isSmallScreen ? "scale-y-90" : ""
            }`}
          ></span>
          <span
            className={`relative ${isSmallScreen ? "text-sm scale-90" : ""}`}
          >
            Visit Store
          </span>
        </a>
      </div>
    </div>
  );
};

export default Screenprints;
