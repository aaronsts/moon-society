import Image from "next/image";
import { useState, useEffect } from "react";

// components
import ArtistModal from "./ArtistModal";

const ArtistCard = ({ profilePicture, ...artist }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className=" group flex flex-col items-center">
          <div className="relative h-72 w-72 rounded bg-cover overflow-hidden mb-4 bg-primary-300">
            <div className="w-72 h-72 absolute z-20 bg-primary-300 mix-blend-soft-light"></div>
            <div className="transition-all duration-300 h-80 w-72 bg-gradient-to-t translate-y-full group-hover:translate-y-0 from-secondary-200/80 via-secondary-200/0 to-secondary-200/0 z-20 absolute"></div>
            <Image
              src={profilePicture.url}
              layout="fill"
              objectPosition="top"
              objectFit="cover"
              alt="profile picture"
              className="transition-all duration-300 z-10 absolute group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          </div>
          <h4 className="transition-transform duration-300 uppercase group-hover:-translate-y-14 z-30">
            {artist.name}
          </h4>
        </div>
      </button>
      {showModal && (
        <ArtistModal
          modal={showModal}
          setShowModal={setShowModal}
          {...artist}
        />
      )}
    </>
  );
};

export default ArtistCard;
