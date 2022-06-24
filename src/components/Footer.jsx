import React from "react";
import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="bg-primary-500 text-primary-100">
      <div className="container mx-auto py-8 flex justify-between items-center">
        <Socials />
        <div className="relative w-16 h-16">
          <a href="#home">
            <Image
              src={"/images/logo_ms.svg"}
              layout="fill"
              alt="logo moon society with text"
            />
          </a>
        </div>
        <ul className="flex gap-8">
          <li>
            <a
              className="hover:text-secondary-300 transition-color duration-500"
              href="#artist"
            >
              Artists
            </a>
          </li>
          <li>
            <a
              className="hover:text-secondary-300 transition-color duration-500"
              href="#associate"
            >
              Associates
            </a>
          </li>
          <li>
            <a
              className="hover:text-secondary-300 transition-color duration-500"
              href="#service"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-secondary-300 transition-color duration-500"
              href="#about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
