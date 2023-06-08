import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import NavBar from "./NavBar";

const Home = () => {
  const logoRef = useRef(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

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
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "500px",
    padding: "0 10px",
    margin: "20px 0",
    textAlign: "center",
  };

  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-cover" style={waterfallImage}>
          <NavBar className="absolute top-0 left-0 right-0" />
          <div className="parallax text-center mt-10" ref={logoRef}>
            <div style={coorieLogo}></div>
          </div>
        </div>

        <div className="flex flex-col items-center" style={containerStyle}>
          <div className="flex flex-wrap justify-center mt-20">
            <div className="flex flex-col items-center" style={contentStyle}>
              <h1 className="text-xl">Title 1</h1>
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
            <div className="flex flex-col items-center" style={contentStyle}>
              <h1 className="text-xl">Title 2</h1>
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
            <div className="flex flex-col items-center" style={contentStyle}>
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
