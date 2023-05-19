import React from "react";
import SoundCloudPlayer from "./SoundCloudPlayer";

const MissionStatement = () => {
  return (
    <>
      <section>
      <h3 className="text-3xl text-black text-center pl-96 pr-96 py-32 parallax">
          Our Screenprints begin with a single black and white pinhole photograph that accompanies each video.
          We then develop these photographs at Street Level Photoworks in Glasgow.
          These images are then professionally screenprinted using traditional techniques at The Glasgow Print Studio.
        </h3>

        <SoundCloudPlayer />
      </section>
    </>
  );
};

export default MissionStatement;