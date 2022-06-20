import React from "react";
import ArtistCard from "./ArtistCard";

const Artists = () => {
  return (
    <div className="bg-primary-400">
      <div className="container mx-auto h-[calc(100vh-80px)] flex flex-col items-center">
        <h2>Artists</h2>
        <div className="flex gap-8">
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    </div>
  );
};

export default Artists;
