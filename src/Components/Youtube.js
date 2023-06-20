import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";

const Youtube = () => {
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

  const fallochImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/falloch.jpg')",
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


  const fallochImageStyle = {
    ...fallochImage,
    ...containerStyle,
    height: isSmallScreen ? "450px" : "1200px",
  };

  const fallochImageContainerStyle = {
    ...fallochImageStyle,
    marginTop: isSmallScreen ? "-350px" : isMediumScreen ? "-200px" : "0",
  };

  return (
    <div>
      <div>
        <section>
          <div
            className="relative h-screen bg-cover"
            style={{ ...fallochImageContainerStyle }}
          >
            <NavBar className="absolute top-0 left-0 right-0" />

            <h1
              className={`text-4xl font-semibold text-white text-center  sm:py-80 px-20 parallax ${
                isSmallScreen
                ? "text-lg px-4"
                : isMediumScreen
                ? " px-20 sm:py-70"
                : ""
              }`}
              style={{ textShadow: "0 0 1px black" }}
            >
              All profits generated by the advertising revenue garnered from the
              Coorie Project Channel will be donated to climate change research
              charities or invested back into other climate change focused
              sustainability projects/exhibitions.
            </h1>
            <h1
              className={`text-3xl font-semibold text-white text-center  sm:py-70 px-20 parallax ${
                isSmallScreen
                ? "text-lg px-4"
                : isMediumScreen
                ? "text-1xl px-5 sm:py-80"
                : ""
              }`}
              style={{
                textShadow: "0 0 1px black",
                position: "absolute",
                top: "50%",
                transform: "translateY(-35%)",
              }}
            >
              Funds can be generated from clicks and views, rather than donations.
            </h1>
          </div>
        </section>

        <div style={{ position: "relative", paddingTop: "56.25%", height: 0 }}>
          <iframe
            className="mx-auto"
            style={{
              position: "absolute",
              top: isSmallScreen ? "-240px" : "0",
              left: 0,
              width: isSmallScreen ? "100%" : "100%",
              height: "100%",
              padding: "5%",
            }}
            src="https://www.youtube.com/embed/weIMOdI1OAk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-5">
      <a
  href="https://www.youtube.com/channel/UCULPVxk5Zjk2zje5drAou_Q?app=desktop&disable_polymer=true"
  target="_blank"
  rel="noopener noreferrer"
  className={`text-5xl font-light italic relative inline-block px-4 py-2 font-medium group ${
    isSmallScreen ? "absolute left-1/2 transform -translate-x-1/2" : ""
  }`}
  style={{
    position: isSmallScreen ? "absolute" : "relative",
    top: isSmallScreen ? "calc(120% + 10px)" : "",
    width: isSmallScreen ? "70%" : "",
    padding: isSmallScreen ? "5%" : "",
  }}
>
  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Subscribe</span>
</a>

      </div>
    </div>
  );
};

export default Youtube;
