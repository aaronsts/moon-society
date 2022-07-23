import React, { useEffect } from "react";
import Image from "next/image";

// carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";

// framer motion
import { motion, useAnimation } from "framer-motion";

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

const ArtistModal = ({ modal, setShowModal, ...artist }) => {
  // animation
  const control = useAnimation();
  const modalVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  // close modal
  const handleClick = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode == 27) {
        setShowModal(false);
        document.body.style.overflow = "unset";
      }
    };
    window.addEventListener("keydown", close);

    if (modal) {
      control.start("visible");
    }
    return () => window.addEventListener("keydown", close);
  }, [control, modal, setShowModal]);
  const spotifyTrack = undefined;
  if (artist.spotifyTrackLink) {
    spotifyTrack = new URL(artist.spotifyTrackLink);
  }

  return (
    <IconContext.Provider
      value={{
        size: "2rem",
        className:
          "text-primary-200 hover:text-primary-300 hover:scale-110 transition-all",
      }}
    >
      <div className="transition-all display-none inset-0 z-40 fixed bg-primary-500/50 flex items-center justify-center">
        <motion.div
          variants={modalVariant}
          initial="hidden"
          animate={control}
          className="flex flex-col rounded-2xl md:flex-row bg-primary-400 h-[32rem] w-4/5 md:w-3/5 p-4 lg:p-8 -2xl shadow relative"
        >
          {/* Bio & Name */}
          <div className="w-full md:h-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-between items-center md:items-start">
            <h2 className="border-b border-secondary-200 w-fit px-4 md:px-0 md:pr-8 lg:pr-16">
              {artist.name}
            </h2>
            <div className="h-52 md:h-auto overflow-y-scroll">
              <p>{artist.bio}</p>
            </div>
            {/* Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4 h-20 border-t border-secondary-200 w-full md:w-4/5">
              {artist.spotify && (
                <a href={artist.spotify} target="_blank" rel="noreferrer">
                  <FaSpotify />
                </a>
              )}
              {artist.appleMusic && (
                <a href={artist.appleMusic} target="_blank" rel="noreferrer">
                  <FaApple />
                </a>
              )}
              {artist.tikTok && (
                <a href={artist.tikTok} target="_blank" rel="noreferrer">
                  <FaTiktok />
                </a>
              )}
              {artist.instagram && (
                <a href={artist.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              )}
              {artist.facebook && (
                <a href={artist.facebook} target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
              )}
            </div>
          </div>
          <div className="flex h-full  w-full md:w-1/2 flex-col justify-between">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              className="hidden md:block text-primary-100 relative h-full w-4/5 float-right shadow rounded-2xl overflow-hidden"
            >
              {artist.pictures.map((picture, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={picture.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    alt={name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {spotifyTrack && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `<iframe class="rounded-2xl shadow" src="https://open.spotify.com/embed${spotifyTrack.pathname}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
                }}
                className="mt-4 w-full md:w-4/5 mx-auto"
              ></div>
            )}
          </div>
          <AiFillCloseCircle
            size="2.5rem"
            className="hover:text-secondary-300 absolute right-[-20px] top-[-20px] shadow text-primary-100 cursor-pointer"
            onClick={handleClick}
          />
        </motion.div>
      </div>
    </IconContext.Provider>
  );
};

export default ArtistModal;
