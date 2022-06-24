import React from "react";
import { IconContext } from "react-icons";

import {
  FaSpotify,
  FaTiktok,
  FaInstagram,
  FaApple,
  FaYoutube,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Socials = () => {
  return (
    <IconContext.Provider
      value={{
        size: "2rem",
        className:
          "text-primary-100 hover:text-secondary-300 hover:scale-110 transition-all",
      }}
    >
      <ul className="flex gap-8">
        <li>
          <a href="#">
            <FaSpotify className="hover:text-[#1DB954]" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaApple className="hover:text-[#FA243C]" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram className="hover:text-[#E4405F]" />
          </a>
        </li>
        <li className="group w-8 h-8">
          <a href="#" className="relative ">
            <FaTiktok className="absolute top-0 group-hover:text-[#25F4EE] group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            <FaTiktok className="absolute top-0 group-hover:text-[#FE2C55] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaYoutube className="hover:text-[#FF0000]" />
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default Socials;
