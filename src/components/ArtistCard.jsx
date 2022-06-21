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

const ArtistCard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IconContext.Provider
      value={{
        size: "2rem",
        className:
          "text-primary-200 hover:text-primary-300 hover:scale-110 transition-all",
      }}
    >
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
          <div
            className="inset-0 z-40 fixed bg-primary-500/50 flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <div className=" bg-primary-500 min-h-[50%] w-3/5 p-4 lg:p-8 overflow-x-hidden rounded">
              <div className="w-1/2">
                {/* Bio & Name */}
                <h2 className="border-b border-secondary-200 w-fit pr-8 lg:pr-16">
                  Vowed
                </h2>
                <p>
                  Originating from the outskirts of Paris, VOWED is a 24 year
                  old producer and DJ. His passion for music stems from a young
                  age and has been nourished by various mind-opening travels
                  around the globe. With a number of releases on influential
                  labels such as Deep Universe, Chill Your Mind, Mixmash or
                  Panther's Groove to mention a few, the French artist landed on
                  Confession Label in 2020, with a stellar remix of Tchami's
                  Ghosts. VOWED has kicked off 2021 with an array of strong
                  collaborations and releases which have seen him explore new
                  facets of melodic House Music. With features including the
                  likes of EDM.com, EARMILK & Tasty Network, VOWED has been
                  identified as an artist to keep an eye on in the coming years.
                </p>
              </div>
              {/* Links */}
              <div className="flex gap-4 my-4">
                <a href="http://spotify.com" target="_blank" rel="noreferrer">
                  <FaSpotify />
                </a>
                <FaApple />
                <FaTiktok />
                <FaInstagram />
                <FaFacebook />
              </div>
            </div>
          </div>
        )}
      </>
    </IconContext.Provider>
  );
};

export default ArtistCard;
