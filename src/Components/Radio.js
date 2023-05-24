import React, { useEffect } from "react";
import SoundCloudPlayer from "./SoundCloudPlayer";
import NavBar from "./NavBar";

const Radio = () => {
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

  const clydeImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/clyde2.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "1400px",
  };

  const containerStyle = {
    overflow: "hidden",
  };

  

  return (
    <div>
      <section>
        <div
          className="relative h-screen bg-cover"
          style={{ ...clydeImage, ...containerStyle }}
        >
          <NavBar className="absolute top-0 left-0 right-0" />
          <h3 className="text-4xl text-white text-center pl-96 pr-96 py-80 parallax" style={{ textShadow: "0 0 1px black" }}>
            In 2021, I created a radio show for Clyde Built Radio with the
            purpose of promoting The Coorie Project aims.
            <br/>
            <br/>
            I decided to create a Scottish Nature Companion for anyone
            experiencing the outdoors here in Scotland. The show features some
            sage advice from legendary Scottish traveller Tom Weir, along with
            my own field recordings and a carefully curated selection of songs
            to enhance being out and about in Scotland.
          </h3>
        </div>
        <div>
        <img src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Listen.png" alt="listen_image" />
      </div>
      </section>

  
      <SoundCloudPlayer />
      <br/>
    </div>
    
  );
};

export default Radio;
