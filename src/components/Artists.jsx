import React, { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";

// graphcms
import { getArtists } from "../services";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists().then((newArtists) => setArtists(newArtists));
  }, []);

  return (
    <div className=" scroll-mt-24" id="artist">
      <div className="container mx-auto h-[calc(100vh-80px)] flex flex-col items-center">
        <h2>Artists</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={index} {...artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
