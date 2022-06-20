import React from "react";
import Image from "next/image";

const ArtistCard = () => {
  return (
    <div className="relative h-72 w-72 rounded bg-cover overflow-hidden">
      <div className="transition-all h-72 w-72  z-20 absolute bg-gradient-to-tl hover:bg-gradient-to-t from-secondary-200/40 to-secondary-200/0"></div>
      <Image
        src="/images/profilePicture.jpg"
        layout="fill"
        objectPosition="top"
        objectFit="cover"
        alt="profile picture"
        className="z-10 absolute"
      />
    </div>
  );
};

export default ArtistCard;
