import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const [imageVisible, setImageVisible] = useState({});

  const breakpoints = {
    small: "(max-width: 639px)",
    medium: "(min-width: 640px) and (max-width: 1023px)",
    large: "(min-width: 1024px)",
  };

  const isSmallScreen = useMediaQuery({ query: breakpoints.small });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;
          const imageName = target.getAttribute("data-image");

          setImageVisible((prevState) => ({
            ...prevState,
            [imageName]: isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );
    

    const gallerySections = document.querySelectorAll(".gallery-section");
    gallerySections.forEach((section) => {
      const imageName = section.getAttribute("data-image");
      observer.observe(section);
      setImageVisible((prevState) => ({
        ...prevState,
        [imageName]: false,
      }));
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  

  return (
    <div class="align-items-center text-center justify-center items-center">
      <section
        className="gallery-section"
        data-image="print1"
        ref={useRef(null)}
      >
        <img
          src="/images/print1.png"
          alt="Print 1"
          className={`gallery-image ${imageVisible["print1"] ? "show" : ""}`}
        />
         <br />
         <h1 class={`text-6xl ${isSmallScreen ? 'text-xl' : 'text-customGray'} font-light text-center px-6`}>
  The Giant's Causeway
</h1>

        <br />
        <br />
        <h1
  className={`text-4xl ${
    isSmallScreen ? 'text-sm' : 'text-customGray'
  } font-light italic text-center ${
    isSmallScreen ? 'px-8' : 'px-32'
  }`}
>
  This image was captured using a pinhole camera at The Giants Causeway
  in Country Antrim, Northern Ireland. While the Coorie Project aims to
  highlight the beauty of the natural world here in Scotland, a trip to
  the Giant’s Causeway while in Belfast could not be ignored. After all,
  the very same polygonal rock formations appear in Fingal’s Cave off
  the west coast of Scotland on the Isle of Staffa, formed by the same
  ancient lava flow. This location, teaming with tourists, was able to
  be captured through a combination of luck, timing and a reckless
  disregard for the artist’s own personal safety.
</h1>

      </section>

      <section
        className="gallery-section"
        data-image="print2"
        ref={useRef(null)}
      >
        <img
          src="/images/print2.png"
          alt="Print 2"
          className={`gallery-image ${imageVisible["print2"] ? "show" : ""}`}
        />
        <h1 class="text-3xl text-gray-700 text-center">
          {" "}
          The Giant's Causeway
        </h1>
      </section>

      <section
        className="gallery-section"
        data-image="print3"
        ref={useRef(null)}
      >
        <img
          src="/images/print3.png"
          alt="Print 3"
          className={`gallery-image ${imageVisible["print3"] ? "show" : ""}`}
        />
        <h1 class="text-3xl text-gray-700 text-center">
          {" "}
          The Giant's Causeway
        </h1>
      </section>

      <section
        className="gallery-section"
        data-image="print4"
        ref={useRef(null)}
      >
        <img
          src="/images/print4.png"
          alt="Print 4"
          className={`gallery-image ${imageVisible["print4"] ? "show" : ""}`}
        />
        <h1 class="text-3xl text-gray-700 text-center">
          {" "}
          The Giant's Causeway
        </h1>
      </section>

      <section
        className="gallery-section"
        data-image="print5"
        ref={useRef(null)}
      >
        <img
          src="/images/print5.png"
          alt="Print 5"
          className={`gallery-image ${imageVisible["print5"] ? "show" : ""}`}
        />
        <h1 class="text-3xl text-gray-700 text-center">
          {" "}
          The Giant's Causeway
        </h1>
      </section>
    </div>
  );
};

export default Gallery;
