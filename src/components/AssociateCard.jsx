import Image from "next/image";
import { useState, useEffect } from "react";

// components
import ArtistModal from "./ArtistModal";
import AssociateModal from "./AssociateModal";

const AssociateCard = ({ name, bio, profilePicture, pictures, spotify }) => {
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
              src={profilePicture}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              alt="profile picture"
              className="transition-transform duration-300 z-10 absolute group-hover:scale-105"
            />
          </div>
          <h4 className="transition-transform duration-300 uppercase group-hover:-translate-y-14 z-30">
            {name}
          </h4>
        </div>
      </button>
      {showModal && (
        <AssociateModal
          modal={showModal}
          setShowModal={setShowModal}
          name={name}
          bio={bio}
          pictures={pictures}
          spotify={spotify}
        />
      )}
    </>
  );
};

export default AssociateCard;
