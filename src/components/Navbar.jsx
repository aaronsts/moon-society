import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

// hooks
import useScroll from "../hooks/useScroll";

// icons
import { IconContext } from "react-icons";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const Navbar = (props) => {
  // state
  const [show, setShow] = useState(false);

  // scrolling behaviour
  const scroll = useScroll();

  // eventHandlers
  const handleClick = () => {
    setShow(!show);
  };

  // icon styling
  const value = {
    size: "2.5rem",
  };
  const navContainer = {
    hidden: {
      y: -100,
      transition: {
        duration: 0.6,
      },
    },
    show: {
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    // hide navbar on scrolldown
  }, [scroll.data.scrollDown, scroll.data.y]);

  return (
    <IconContext.Provider value={value}>
      <motion.nav
        variants={navContainer}
        initial="hidden"
        animate={
          scroll.data.scrollDown && scroll.data.y > 150 ? "hidden" : "show"
        }
        className={`
    fixed top-0 z-50 bg-primary-500/80 backdrop-blur-sm shadow text-gray-50 w-screen flex flex-col transition-colors duration-500 
    
    `}
      >
        <div
          className={` container mx-auto flex justify-between relative items-center wrapper`}
        >
          <Link href="/" passHref>
            <a className="mx-auto" aria-label="Moon Society Logo">
              <Image
                src={"/images/logo_ms.svg"}
                width="176px"
                height="64px"
                alt="moon society logo"
              />
            </a>
          </Link>
          <RiMenu4Line
            onClick={handleClick}
            className={`${
              show ? "hidden" : "text-gray-50"
            } cursor-pointer z-[60]`}
          />
          <RiCloseLine
            onClick={handleClick}
            className={`${
              show ? "text-gray-50" : "hidden"
            } cursor-pointer z-[60]`}
          />
        </div>
        <div
          className={`${
            show ? "translate-x-0" : "translate-x-full"
          } fixed top-0 bottom-0 right-0 z-30 left-0 md:left-2/3 bg-primary-500/80 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col text-gray-50 mt-48">
            <li>
              <Link href="#artist" passHref>
                <a
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300 text-center mb-8">
                    Artists
                  </h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#associate" passHref>
                <a
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300 text-center mb-8">
                    Associates
                  </h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#service" passHref>
                <a
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300 text-center mb-8">
                    Services
                  </h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#about" passHref>
                <a
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300 text-center mb-8">
                    About
                  </h3>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </IconContext.Provider>
  );
};

export default Navbar;
