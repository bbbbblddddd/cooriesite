import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
// import { Link } from "react-router-dom";

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

  return (
    <section>
      <div
        className="relative bg-cover"
        style={{ ...waterfallImage, ...containerStyle }}
      >
        <NavBar className="absolute top-0 left-0 right-0" />
        <div className="parallax text-center mt-10" ref={logoRef}>
          <div style={coorieLogo}></div>
        </div>
      </div>

      <div>
        <h1 class="text-5xl text-gray-700 text-center p-20">
          COORIE / ku:ri /{" "}
        </h1>
        <h1 class="text-5xl text-gray-700 text-center p-20">
          The Scottish art of deriving comfort, wellbeing and energy from wild
          landscapes.
        </h1>
        <h1 class="text-5xl text-gray-700 text-center p-20">
          The aim of The Coorie Project is to create an online platform to
          highlight the beauty of the natural world, and help protect it by
          raising awareness and funds for climate change science and curated
          sustainability projects.
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex justify-between mb-4">
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
    </section>
  );
};
export default Home;
