import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";

const Card = ({ profilePicture, ...person }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <div className=" group flex flex-col items-center z-20">
          <div className="relative h-72 w-72 rounded-2xl bg-cover overflow-hidden mb-4 bg-primary-300">
            <div className="w-72 h-72 absolute z-20 bg-primary-300 mix-blend-soft-light"></div>
            <div className="transition-all z-20 duration-300 h-80 w-72 bg-gradient-to-t translate-y-full group-hover:translate-y-0 from-secondary-200/80 via-secondary-200/0 to-secondary-200/0 absolute"></div>
            <Image
              priority
              src={profilePicture.url}
              layout="fill"
              objectPosition="top"
              objectFit="cover"
              alt="profile picture"
              sizes="25vw"
              className="transition-all duration-300 z-10 absolute group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          </div>
          <h4 className="transition-transform duration-300 uppercase group-hover:-translate-y-14 z-30">
            {person.name}
          </h4>
        </div>
      </button>
      {showModal && (
        <Modal modal={showModal} setShowModal={setShowModal} {...person} />
      )}
    </>
  );
};

export default Card;
