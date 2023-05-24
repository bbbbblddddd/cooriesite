import React from "react";

const SoundCloudPlayer = () => {
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
        paddingTop: "60%",
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
          width: "55%",
          height: "10%",
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
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1089803344&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div>
          <a
            href="https://soundcloud.com/clydebuiltradio/the-coorie-project"
            title="The Coorie Project (16/7/21)"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
