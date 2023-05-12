import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  const backgroundImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const coorieLogo = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Coorie+Video+Logo+White.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "700px",
    height: "700px",
    position: "absolute",
    top: "58%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <body>
      
      <div className="relative h-screen bg-cover" style={backgroundImage}>
        <NavBar className="absolute top-0 left-0 right-0" />
        <div style={coorieLogo}></div>
      </div>

      <div class="relative px-60 bg-gray-200">
        <h1 class="text-6xl font-light italic text-center p-10 px-10">
          COORIE / ku:ri / `&gt;`{" "}
        </h1>

        <h2 class="text-6xl font-bold tracking-tight text-center p-10 px-10">
          The Scottish art of deriving comfort, wellbeing and energy from wild
          landscapes.
        </h2>

        <h3 class="text-6xl font-light tracking-tight text-center p-20">
          The aim of The Coorie Project is to create an online platform to
          highlight the beauty of the natural world, and help protect it by
          raising awareness and funds for climate change science and curated
          sustainability projects.
        </h3>
        <div className="flex flex-col justify-center items-center">
          <Link
            className="text-6xl font-light italic"
            to="/mission-statement"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="px-20 bg-gray-200">

      <div className="flex flex-col justify-center items-center text-6xl font-light italic p-10 bg-gray-200">What We Do</div>

      <div className="grid grid-cols-3 grid-rows-3 bg-gray-200 justify-items-center align-items-center py-5">
        <div className="col-start-1 row-start-3 text-4xl font-light italic text-center">
          Monetised Youtube
        </div>
        <div className="col-start-2 row-start-3 text-4xl font-light italic text-center">
          ScreenPrints
        </div>
        <div className="col-start-3 row-start-3 text-4xl font-light italic text-center">
          Sponsorship/ Patreon
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 bg-gray-200 justify-items-center align-items-center gap-8">
        <div
          className="col-start-1 row-start-1"
          style={{
            backgroundImage:
              "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Giants+Graves+3+INSTA.jpg')",
            position: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "500px",
            height: "350px",
          }}
        ></div>
        <div
          className="col-start-2 row-start-1"
          style={{
            backgroundImage:
              "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lower+q.jpeg')",
            position: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "500px",
            height: "350px",
          }}
        ></div>
        <div
          className="col-start-3 row-start-1"
          style={{
            backgroundImage:
              "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Zero-Image-135-Back-to-Nature-Pinhole-Camera-Front+(1).jpg')",
            position: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "500px",
            height: "350px",
          }}
        ></div>
        <div className="col-start-1 row-start-2 text-center text-lg">
          For every location we visit, a high quality video will be shot and
          made available to view on our channel. Through a monetised YouTube
          channel, funds can be generated from clicks and views, rather than
          donations.
        </div>
        <div className="col-start-2 row-start-2 text-center text-lg">
          For every YouTube video we publish, there will also be a pinhole
          camera photograph taken from the same vantage point. These will then
          be screenprinted using traditional techniques at The Glasgow Print
          Studio.
        </div>
        <div className="col-start-3 row-start-2 text-center text-lg">
          As we grow, you may wish to have your relevant products featured or
          discussed on our online platforms. Simply contact us via email. Also,
          Anyone wishing to donate to The Coorie Project need only visit our
          Patreon account .
        </div>
      </div>
      </div>
    </body>
  );
};

export default Home;
