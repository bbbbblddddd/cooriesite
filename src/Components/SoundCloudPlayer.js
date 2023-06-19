import React from "react";
import { useMediaQuery } from "react-responsive";

const SoundCloudPlayer = () => {
  const breakpoints = {
    small: "(max-width: 639px)",
    medium: "(min-width: 640px) and (max-width: 1023px)",
    large: "(min-width: 1024px)",
  };

  const isSmallScreen = useMediaQuery({ query: breakpoints.small });

  return (
    <div
      style={{
        backgroundImage:
          'url("https://coorieprojectimagesbbbbblddddd.s3.eu-west-2.amazonaws.com/clyde.gif")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "0",
        paddingTop: isSmallScreen ? "100%" : "60%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isSmallScreen ? "90%" : "55%",
          height: isSmallScreen ? "25%" : "10%",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        <iframe
          title="SoundCloud Player"
          width="100%"
          height="100%"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1089803344&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
