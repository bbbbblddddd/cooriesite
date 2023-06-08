import React, { useState, useEffect, useRef } from "react";
import './Gallery.css';

const Gallery = () => {
  const [imageVisible, setImageVisible] = useState({});

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
  
    <div class= "align-items-center text-center justify-center items-center">
      <section
        className="gallery-section"
        data-image="print1"
        ref={useRef(null)}
      >
        <img
          src="/images/print1.png"
          alt="Print 1"
          className={`gallery-image ${
            imageVisible["print1"] ? "show" : ""
          }`}
          
        />
        <h1 class="text-3xl text-gray-700 text-center"> The Giant's Causeway</h1>
      </section>

      <br />

      <section
        className="gallery-section"
        data-image="print2"
        ref={useRef(null)}
      >
        <img
          src="/images/print2.png"
          alt="Print 2"
          className={`gallery-image ${
            imageVisible["print2"] ? "show" : ""
          }`}
        />
                <h1 class="text-3xl text-gray-700 text-center"> The Giant's Causeway</h1>

      </section>

      <section
        className="gallery-section"
        data-image="print3"
        ref={useRef(null)}
      >
        <img
          src="/images/print3.png"
          alt="Print 3"
          className={`gallery-image ${
            imageVisible["print3"] ? "show" : ""
          }`}
        />
                <h1 class="text-3xl text-gray-700 text-center"> The Giant's Causeway</h1>

      </section>

      <section
        className="gallery-section"
        data-image="print4"
        ref={useRef(null)}
      >
        <img
          src="/images/print4.png"
          alt="Print 4"
          className={`gallery-image ${
            imageVisible["print4"] ? "show" : ""
          }`}
        />
                <h1 class="text-3xl text-gray-700 text-center"> The Giant's Causeway</h1>

      </section>

      <section
        className="gallery-section"
        data-image="print5"
        ref={useRef(null)}
      >
        <img
          src="/images/print5.png"
          alt="Print 5"
          className={`gallery-image ${
            imageVisible["print5"] ? "show" : ""
          }`}
        />
                <h1 class="text-3xl text-gray-700 text-center"> The Giant's Causeway</h1>

      </section>
      </div>
  
  );
};

export default Gallery;

