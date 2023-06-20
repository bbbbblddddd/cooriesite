import React, { useEffect, useState } from "react";
import SoundCloudPlayer from "./SoundCloudPlayer";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";

const Radio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clydeImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/clyde2.jpg')",
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


  const clydeImageStyle = {
    ...clydeImage,
    ...containerStyle,
    height: isSmallScreen ? "550px" : "1200px",
    marginTop: isSmallScreen ? "-250px" : "0",
  };

  const translateValue = isSmallScreen ? scrollPosition * 0.5 : 0.2 * scrollPosition;

  const h3Style = {
    textShadow: "0 0 1px black",
    transform: `translateY(${translateValue}px)`,
    marginTop: isSmallScreen ? "80px" : "0",
  };

  return (
    <div>
      <section>
        <div
          className="relative h-screen bg-cover"
          style={{ ...clydeImageStyle, ...containerStyle }}
        >
          <NavBar className="absolute top-0 left-0 right-0" />
          <h3
            className={`text-4xl font-semi-bold text-white text-center sm:pl-6 sm:pr-6 py-24 sm:py-72 parallax ${
              isSmallScreen ? "text-sm px-6" : isMediumScreen ? "text-2xl" : ""
            }`}
            
            style={h3Style}
          >
            In 2021, I created a radio show for Clyde Built Radio with the
            purpose of promoting The Coorie Project aims.
            <br />
            <br />
            I decided to create a Scottish Nature Companion for anyone
            experiencing the outdoors here in Scotland. The show features some
            sage advice from legendary Scottish traveller Tom Weir, along with
            my own field recordings and a carefully curated selection of songs
            to enhance being out and about in Scotland.
          </h3>
        </div>
        <div>
          <img
            src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Listen.png"
            alt="listen_image"
          />
        </div>
      </section>
      <SoundCloudPlayer />
      <br />
    </div>
  );
};

export default Radio;
