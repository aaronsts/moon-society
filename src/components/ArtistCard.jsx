import React from "react";
import Image from "next/image";

import { useState } from "react";

// icons
import {
  FaSpotify,
  FaTiktok,
  FaInstagram,
  FaApple,
  FaFacebook,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import ArtistModal from "./ArtistModal";

const ArtistCard = () => {
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
          <div className="relative h-72 w-72 rounded bg-cover overflow-hidden mb-4">
            <div className="transition-all duration-300 h-72 w-72 bg-gradient-to-t translate-y-full group-hover:translate-y-0 from-secondary-200/60 to-secondary-200/0 z-20 absolute"></div>
            <Image
              src="/images/profilePicture.jpg"
              layout="fill"
              objectPosition="top"
              objectFit="cover"
              alt="profile picture"
              className="transition-transform duration-300 z-10 absolute group-hover:scale-105 grayscale"
            />
          </div>
          <h4 className="transition-transform duration-300 uppercase group-hover:-translate-y-14 z-30">
            Vowed
          </h4>
        </div>
      </button>
      {showModal && (
        <ArtistModal modal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ArtistCard;
