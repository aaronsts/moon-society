import React, { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";

// graphcms
import { getArtists } from "../../services";

// animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  // animation
  const artistsVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 100 },
  };
  const artistControl = useAnimation();
  const [artistRef, inView] = useInView();

  useEffect(() => {
    getArtists().then((newArtists) => setArtists(newArtists));
    if (inView) {
      artistControl.start("visible");
    }
  }, [artistControl, inView]);

  return (
    <motion.div
      ref={artistRef}
      className=" scroll-mt-24"
      id="artist"
      variants={artistsVariant}
      initial="hidden"
      animate={artistControl}
    >
      <div className="container mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-evenly items-center">
        <h2 className="mb-8">Artists</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={index} {...artist} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Artists;
