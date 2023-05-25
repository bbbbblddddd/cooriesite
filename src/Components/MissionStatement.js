// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
// import NavBar from "./NavBar";

// const MissionStatement = () => {
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const logoElement = logoRef.current;
//       const scrollPosition = window.pageYOffset;
//       const elementPosition = logoElement.offsetTop;
//       const distance = scrollPosition - elementPosition;
//       logoElement.style.transform = `translateY(${distance * 0.5}px)`;
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const waterfallImage = {
//     backgroundImage:
//       "url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg')",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "1200px",
//     width: "100%",
//   };

//   const CoorieLogo = styled.div`
//     background-image: url('https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/Coorie+Video+Logo+White.png');
//     background-repeat: no-repeat;
//     background-size: contain;
//     background-position: center;
//     width: 700px;
//     height: 700px;
//     position: absolute;
//     top: calc(50% + 20px); /* Adjust the top value to move the logo down */
//     left: 50%;
//     transform: translate(-50%, -70px); /* Adjust the translation value to move the logo down */

//     @media (max-width: 768px) {
//       background-size: 50%; /* Adjust the background size for smaller screens */
//       width: 50%; /* Adjust the width for smaller screens */
//       height: auto; /* Adjust the height for smaller screens while maintaining aspect ratio */
//     }
//   `;

//   const Container = styled.div`
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   `;

//   return (
//     <section>
//       <div className="relative bg-cover" style={{ ...waterfallImage }}>
//         <NavBar className="absolute top-0 left-0 right-0" />
//         <div className="parallax text-center mt-10" ref={logoRef}>
//           <Container>
//             <CoorieLogo />
//           </Container>
//         </div>
//       </div>







//       <div className="flex flex-col items-center justify-center h-screen">
//       <div className="flex justify-between mb-4">
//         <div className="flex flex-col items-center w-full">
//           <img className="w-full" src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg" alt="Imag1" />
//           <h1 className="text-xl">Title 1</h1>
//         </div>
//         <div className="flex flex-col items-center w-full">
//           <img className="w-full" src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg" alt="Imag2" />
//           <h1 className="text-xl">Title 2</h1>
//         </div>
//         <div className="flex flex-col items-center w-full">
//           <img className="w-full" src="https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/lIekaw4+-+Imgur.jpg" alt="Imag3" />
//           <h1 className="text-xl">Title 3</h1>
//         </div>
//       </div>
//       <div className="flex justify-between">
//         {/* <a className="px-4 py-2 bg-gray-300 text-black" href="#">Button 1</a>
//         <a className="px-4 py-2 bg-gray-300 text-black" href="#">Button 2</a>
//         <a className="px-4 py-2 bg-gray-300 text-black" href="#">Button 3</a> */}
//       </div>
//     </div>

//     </section>
//   );
// };

// export default MissionStatement;
