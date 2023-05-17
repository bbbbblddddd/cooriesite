import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {

  
  const backgroundImage = {
    backgroundImage:
      "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "1200px",
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
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <body>
      <div className="relative h-screen bg-cover" style={backgroundImage}>
        <NavBar className="absolute top-0 left-0 right-0" />
        <div style={coorieLogo}></div>
      </div>

      <div class="relative bg-gray-200 px-80">
        <h1 class="text-3xl font-light italic text-center p-10 px-10">
          COORIE / ku:ri / `&gt;`{" "}
        </h1>

        <h2 class="text-2xl font-bold tracking-tight text-center px-10">
          The Scottish art of deriving comfort, wellbeing and energy from wild
          landscapes.
        </h2>

        <h3 class="text-2xl font-light tracking-tight text-center p-10">
          The aim of The Coorie Project is to create an online platform to
          highlight the beauty of the natural world, and help protect it by
          raising awareness and funds for climate change science and curated
          sustainability projects.
        </h3>
        {/* <div className="flex flex-col justify-center items-center">
          <Link
            className="text-6xl font-light italic"
            to="/mission-statement"
          >
            Learn More
          </Link>
        </div> */}
      </div>

      <div className="px-20 bg-gray-200">
        <div className="flex flex-col justify-center items-center text-6xl font-light italic p-20 y-10 bg-gray-200">
          What We Do
        </div>

        {/* <div className="grid grid-cols-3 grid-rows-4 bg-gray-200 justify-items-center align-items-center py-5">
          <div className="col-start-1 row-start-3 text-4xl font-light italic text-center">
            Monetised Youtube
          </div>
          <div className="col-start-2 row-start-3 text-4xl font-light italic text-center">
            ScreenPrints
          </div>
          <div className="col-start-3 row-start-3 text-4xl font-light italic text-center">
            Sponsorship/ Patreon
          </div>
        </div> */}

        <div className="grid grid-cols-3 grid-rows-2 bg-gray-200 justify-items-center align-items-center gap-8">
          <div
            className="col-start-1 row-start-1"
            style={{
              backgroundImage:
                "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Giants+Graves+3+INSTA.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className="col-start-2 row-start-1"
            style={{
              backgroundImage:
                "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lower+q.jpeg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className="col-start-3 row-start-1"
            style={{
              backgroundImage:
                "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Zero-Image-135-Back-to-Nature-Pinhole-Camera-Front+(1).jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div className="col-start-1 row-start-2 text-center text-lg">
            For every location we visit, a high quality video will be shot and
            made available to view on our channel. Through a monetised YouTube
            channel, funds can be generated from clicks and views, rather than
            donations.
            <div className="flex flex-col justify-center items-center py-10">
              <Link className="text-3xl font-light italic" to="/youtube">
                <a
                  href="#_"
                  class="relative inline-block px-4 py-2 font-medium group"
                >
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span class="relative text-black group-hover:text-white">
                    Youtube
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-start-2 row-start-2 text-center text-lg ">
            For every YouTube video we publish, there will also be a pinhole
            camera photograph taken from the same vantage point. These will then
            be screenprinted using traditional techniques at The Glasgow Print
            Studio.
            <div className="flex flex-col justify-center items-center py-10">
              <Link className="text-3xl font-light italic" to="/screenprints">
                <a
                  href="#_"
                  class="relative inline-block px-4 py-2 font-medium group"
                >
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span class="relative text-black group-hover:text-white">
                    Screenprints
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-start-3 row-start-2 text-center text-lg">
            As we grow, you may wish to have your relevant products featured or
            discussed on our online platforms. Simply contact us via email.
            Also, Anyone wishing to donate to The Coorie Project need only visit
            our Patreon account .
            <div className="flex flex-col justify-center items-center py-10">
              <Link className="text-3xl font-light italic" to="/screenprints">
                <a
                  href="#_"
                  class="relative inline-block px-4 py-2 font-medium group"
                >
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span class="relative text-black group-hover:text-white">
                    Sponsorship / Patreon
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-6 justify-center items-center text-center bg-gray-200">
          <div className="sm:col-start-1">
            <h3 className="text-2xl font-light justify-center items-center text-center py-10">
              Our Screenprints begin with a single black and white pinhole
              photograph that accompanies each video. We then develop these
              photographs at Street Level Photoworks in Glasgow. These images
              are then professionally screenprinted using traditional techniques
              at The Glasgow Print Studio.
            </h3>
          </div>
          <div
            className="row-start-2 bg-gray-200"
            style={{
              backgroundImage:
                "url(' https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Layer+1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              marginTop: "100px",
            }}
          ></div>
          <div
            className="row-start-2 bg-gray-200 "
            style={{
              backgroundImage:
                "url(' https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Layer+6.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              marginTop: "100px",
            }}
          ></div>
          <div
            className="row-start-2 bg-gray-200 "
            style={{
              backgroundImage:
                "url(' https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Layer+3.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              marginTop: "100px",
            }}
          ></div>
          <div
            className="row-start-3 bg-gray-200 "
            style={{
              backgroundImage:
                "url(' https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Layer+4.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              marginTop: "200px",
            }}
          ></div>
          <div
            className="row-start-3 bg-gray-200 "
            style={{
              backgroundImage:
                "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Layer+2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              marginTop: "200px",
            }}
          ></div>
          <div
            className="row-start-3 bg-gray-200 "
            style={{
              backgroundImage:
                "url(' https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Layer+1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              marginTop: "200px",
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-40 bg-gray-200">
        <Link className="text-5xl font-light italic" to="/screenprints">
          <a
            href="#_"
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white">
              Visit Store
            </span>
          </a>
        </Link>
      </div>
    </body>
  );
};

export default Home;
