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
        data-image="print2"
        ref={useRef(null)}
      >
        <img
          src="/images/print2.png"
          alt="Print 2"
          className={`gallery-image ${imageVisible["print2"] ? "show" : ""}`}
        />
        <br />
        <h1
          class={`text-6xl ${
            isSmallScreen ? "text-xl" : "text-customGray"
          } font-light text-center px-6`}
        >
          The Devils Pulpit
        </h1>
        <br />
        <br />
        <h1
          className={`text-4xl ${
            isSmallScreen ? "text-sm" : "text-customGray"
          } font-light italic text-center ${isSmallScreen ? "px-8" : "px-32"}`}
        >
          This image was captured using a pinhole camera at the Devil’s Pulpit
          in Dumgoyne, Scotland. Due to the low light conditions at the Devils
          Pulpit, a long exposure of around six minutes was necessary, creating
          the sense of movement from the waterfalls captured.
        </h1>
      </section>
      <br />

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
        <br />
        <h1
          class={`text-6xl ${
            isSmallScreen ? "text-xl" : "text-customGray"
          } font-light text-center px-6`}
        >
          Arran Forest
        </h1>
        <br />
        <br />
        <h1
          className={`text-4xl ${
            isSmallScreen ? "text-sm" : "text-customGray"
          } font-light italic text-center ${isSmallScreen ? "px-8" : "px-32"}`}
        >
          This image was captured on the Isle of Arran, often referred to as "Scotland in Miniature". This image shows a
          section of forest up the trail that leads to the highest point on the
          island, the mountain Goatfell. The image depicts a scene of a forest, with a section of fallen trees.
        </h1>
      </section>
       <br />

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
        <br />
        <h1
          class={`text-6xl ${
            isSmallScreen ? "text-xl" : "text-customGray"
          } font-light text-center px-6`}
        >
          The Falls of Falloch
        </h1>
        <br />
        <br />
        <h1
          className={`text-4xl ${
            isSmallScreen ? "text-sm" : "text-customGray"
          } font-light italic text-center ${isSmallScreen ? "px-8" : "px-32"}`}
        >
          This image was captured using a pinhole camera at the The Falls of
          Falloch at the northernmost tip of Loch Lomond. This involved a sixty
          mile round trip cycle from Balloch. This location also goes by the
          name ‘Rob Roy’s Bathtub’ and is renowned for being one of the best
          enclosed spots for wild swimming in Scotland. Fantastic light
          conditions on the day meant a fairly short exposure time was required
          to catch the movement of the waterfall.
        </h1>
      </section>
      <br />

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
        <h1
          class={`text-6xl ${
            isSmallScreen ? "text-xl" : "text-customGray"
          } font-light text-center px-6`}
        >
          The Giant's Causeway
        </h1>
        <br />
        <br />
        <h1
          className={`text-4xl ${
            isSmallScreen ? "text-sm" : "text-customGray"
          } font-light italic text-center ${isSmallScreen ? "px-8" : "px-32"}`}
        >
          This image was captured using a pinhole camera at The Giants Causeway
          in Country Antrim, Northern Ireland. While the Coorie Project aims to
          highlight the beauty of the natural world here in Scotland, a trip to
          the Giant’s Causeway while in Belfast could not be ignored.
        </h1>
      </section>
      <br />

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
        <br />
        <h1
          class={`text-6xl ${
            isSmallScreen ? "text-xl" : "text-customGray"
          } font-light text-center px-6`}
        >
          The Giant's Causeway
        </h1>
        <br />
        <br />
        <h1
          className={`text-4xl ${
            isSmallScreen ? "text-sm" : "text-customGray"
          } font-light italic text-center ${isSmallScreen ? "px-8" : "px-32"}`}
        >
          Another image from my trip to The Giants Causeway. The polygonal rock
          formations captured here stretch across the Irish Sea and reappear in
          Fingal’s Cave off the west coast of Scotland on the Isle of Staffa,
          formed by the same ancient lava flow. This location, teaming with
          tourists, was able to be captured through a combination of luck,
          timing and a reckless disregard for the artist’s own personal safety.
        </h1>
      </section>
    </div>
  );
};

export default Gallery;
