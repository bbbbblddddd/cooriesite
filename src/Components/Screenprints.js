import React, { useEffect } from "react";
import NavBar from "./NavBar";
// import { Link } from "react-router-dom";
import Showreel from "./Showreel";


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
    height: "1400px",

    
  };

  return (
    <section>
    <div>
      <div className="relative h-screen bg-cover" style={printImage}>
        <NavBar className="absolute top-0 left-0 right-0" />
        <h3 className="text-6xl font-semibold text-white text-center pl-96 pr-96 py-80 parallax">
          Screenprints. Professionally made by hand in Glasgow, Scotland.
        </h3>
        <h3 className="text-3xl text-white text-center pl-96 pr-96 py-32 parallax">
        Our Screenprints begin with a single black and white pinhole
              photograph that accompanies each video. We then develop these
              photographs at Street Level Photoworks in Glasgow. These images
              are then professionally screenprinted using traditional techniques
              at The Glasgow Print Studio.
        </h3>
      </div>
    </div>

    <div>
      <Showreel />
    </div>

      </section>

    
  );
};

export default Screenprints;
