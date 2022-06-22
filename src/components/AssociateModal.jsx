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

const AssociateModal = ({
  modal,
  setShowModal,
  name,
  bio,
  pictures,
  spotify,
}) => {
  const control = useAnimation();

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode == 27) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", close);

    if (modal) {
      control.start("visible");
    }
    return () => window.addEventListener("keydown", close);
  }, [control, modal, setShowModal]);

  const modalVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  console.log(spotify);

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
          className="flex bg-primary-400 min-h-[50%] w-3/5 p-4 lg:p-8 rounded shadow relative"
        >
          {/* Bio & Name */}
          <div className="w-1/2">
            <h2 className="border-b border-secondary-200 w-fit pr-8 lg:pr-16">
              {name}
            </h2>
            <p>{bio}</p>
            {/* Links */}
            <div className="flex gap-4 my-4">
              <a href={spotify} target="_blank" rel="noreferrer">
                <FaSpotify />
              </a>
              <FaApple />
              <FaTiktok />
              <FaInstagram />
              <FaFacebook />
              <GoMail />
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              className="text-primary-100 relative h-full w-4/5 float-right shadow rounded overflow-hidden"
            >
              {pictures.map((picture, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={picture.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    alt="something useful"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <iframe
                style="border-radius:12px"
                src="https://open.spotify.com/embed/track/0pdvvP1vP8zWRHeBCHdFbG?utm_source=generator&theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
          </div>
          <AiFillCloseCircle
            size="2.5rem"
            className="hover:text-secondary-300 absolute right-[-20px] top-[-20px] shadow text-primary-100 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </motion.div>
      </div>
    </IconContext.Provider>
  );
};

export default AssociateModal;
