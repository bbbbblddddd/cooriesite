import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import SoundCloudPlayer from "./SoundCloudPlayer";

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
    height: "1600px",
  };

  const containerStyle = {
    overflow: "hidden", // Prevents content from overflowing outside the container
  };

  return (
    <div>
    <section>
      <div className="relative h-screen bg-cover" style={{ ...printImage, ...containerStyle }}>
        <NavBar className="absolute top-0 left-0 right-0" />
        <h3 className="text-6xl font-semibold text-white text-center pl-96 pr-96 py-80 parallax">
          Screenprints. Professionally made by hand in Glasgow, Scotland.
        </h3>
        <h3 className="text-3xl text-white text-center pl-96 pr-96 py-32 parallax">
          Our Screenprints begin with a single black and white pinhole photograph that accompanies each video.
          We then develop these photographs at Street Level Photoworks in Glasgow.
          These images are then professionally screenprinted using traditional techniques at The Glasgow Print Studio.
        </h3>
      </div>

      <div class="flex flex-col justify-center items-center">
        <Gallery />
      </div>

      <div>
        <SoundCloudPlayer />
      </div>
    </section>

    <div className="flex flex-col justify-center items-center py-40">
      <a
        href="https://dreichdesign.bigcartel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-5xl font-light italic relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Visit Store
        </span>
      </a>
    </div>

    </div>
  );
};

export default Screenprints;
