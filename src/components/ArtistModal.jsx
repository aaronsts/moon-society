import React, { useEffect } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css/bundle";

// icons
import {
  FaSpotify,
  FaTiktok,
  FaInstagram,
  FaApple,
  FaFacebook,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

import { IconContext } from "react-icons/lib";

const ArtistModal = ({ setShowModal }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode == 27) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.addEventListener("keydown", close);
  }, []);
  return (
    <IconContext.Provider
      value={{
        size: "2rem",
        className:
          "text-primary-200 hover:text-primary-300 hover:scale-110 transition-all",
      }}
    >
      <div className="transition-all display-none inset-0 z-40 fixed bg-primary-500/50 flex items-center justify-center">
        <div className="flex bg-primary-400 min-h-[50%] w-3/5 p-4 lg:p-8 rounded shadow relative">
          {/* Bio & Name */}
          <div className="w-1/2">
            <h2 className="border-b border-secondary-200 w-fit pr-8 lg:pr-16">
              Vowed
            </h2>
            <p>
              Originating from the outskirts of Paris, VOWED is a 24 year old
              producer and DJ. His passion for music stems from a young age and
              has been nourished by various mind-opening travels around the
              globe. With a number of releases on influential labels such as
              Deep Universe, Chill Your Mind, Mixmash or Panther's Groove to
              mention a few, the French artist landed on Confession Label in
              2020, with a stellar remix of Tchami's Ghosts. VOWED has kicked
              off 2021 with an array of strong collaborations and releases which
              have seen him explore new facets of melodic House Music. With
              features including the likes of EDM.com, EARMILK & Tasty Network,
              VOWED has been identified as an artist to keep an eye on in the
              coming years.
            </p>
            {/* Links */}
            <div className="flex gap-4 my-4">
              <a href="http://spotify.com" target="_blank" rel="noreferrer">
                <FaSpotify />
              </a>
              <FaApple />
              <FaTiktok />
              <FaInstagram />
              <FaFacebook />
              <GoMail />
            </div>
          </div>
          <div className="w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="text-primary-100 relative h-full w-4/5 float-right shadow rounded overflow-hidden"
            >
              <SwiperSlide>
                <Image
                  src={"/images/profilePicture.jpg"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="something useful"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/profilePicture.jpg"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="something useful"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <AiFillCloseCircle
            size="2.5rem"
            className="hover:text-secondary-300 absolute right-[-20px] top-[-20px] shadow text-primary-100 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default ArtistModal;
