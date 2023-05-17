import React, { useEffect, useRef, useMemo } from 'react';
import './Showreel.css';

const Showreel = () => {
  const images = useMemo(
    () => ['print1.png', 'print2.png', 'print3.png'],
    []
  );

  const showreelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const showreel = showreelRef.current;
      const showreelTop = showreel.getBoundingClientRect().top;
      const showreelBottom = showreel.getBoundingClientRect().bottom;

      images.forEach((image, index) => {
        const imageElement = document.getElementById(`image-${index}`);
        const imageTop = imageElement.getBoundingClientRect().top;
        const imageBottom = imageElement.getBoundingClientRect().bottom;

        if (
          (imageTop >= showreelTop && imageTop <= showreelBottom) ||
          (imageBottom >= showreelTop && imageBottom <= showreelBottom) ||
          (imageTop <= showreelTop && imageBottom >= showreelBottom)
        ) {
          imageElement.classList.add('animate');
        } else {
          imageElement.classList.remove('animate');
        }
      });
    };

    handleScroll(); // Trigger scroll handler once on component mount
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div className="showreel-container">
      <div className="showreel" ref={showreelRef}>
        {images.map((image, index) => (
          <div key={index} className="showreel-row">
            <img
              src={`/images/${image}`}
              alt={`Print ${index + 1}`}
              className="showreel-image"
              id={`image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showreel;
