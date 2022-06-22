import React, { useEffect, useState } from "react";
import AssociateCard from "./AssociateCard";

// graphcms
import { getAssociates } from "../services";

const Artists = () => {
  const [associates, setAssociates] = useState([]);

  useEffect(() => {
    getAssociates().then((newAssociates) => setAssociates(newAssociates));
  }, []);

  // console.log(associates[0].spotify);

  return (
    <div className="bg-primary-400">
      <div className="container mx-auto h-[calc(100vh-80px)] flex flex-col items-center">
        <h2>Associates</h2>
        <div className="flex gap-8">
          {associates.map((associate, index) => (
            <AssociateCard
              key={index}
              name={associate.name}
              bio={associate.bio}
              profilePicture={associate.profilePicture.url}
              pictures={associate.pictures}
              spotify={associate.spotifyArtistProfile}
              spotifyTrack={associate.spotifyTrack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
