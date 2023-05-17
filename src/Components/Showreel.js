// import React, { useEffect, useRef } from 'react';
// import './Showreel.css';

// const Showreel = () => {
//   const showreelRef = useRef(null);

//   useEffect(() => {
//     const showreel = showreelRef.current;
//     const images = showreel.querySelectorAll('.showreel-image');

//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5,
//     };

//     const handleIntersect = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, options);

//     images.forEach((image) => {
//       observer.observe(image);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="showreel-container">
//       <div className="showreel" ref={showreelRef}>
//         <div className="showreel-row">
//           <img
//             src="/images/print1.png"
//             alt="Print 1"
//             className="showreel-image"
//           />
//         </div>
//         <div className="showreel-row">
//           <img
//             src="/images/print2.png"
//             alt="Print 2"
//             className="showreel-image"
//           />
//         </div>
//         <div className="showreel-row">
//           <img
//             src="/images/print3.png"
//             alt="Print 3"
//             className="showreel-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Showreel;
