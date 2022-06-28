import React, { useState, useEffect } from "react";
import Image from "next/image";

// Icons
import { IconContext } from "react-icons";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const iconStyle = {
    className: "text-primary-100",
    size: "3rem",
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <IconContext.Provider value={iconStyle}>
      <nav
        className={`sticky top-0 h-20 text-gray-50 w-screen backdrop-blur-sm bg-primary-500/80 z-50
  `}
      >
        <div
          className="flex
   items-center container mx-auto"
        >
          <a href="#home" className="mx-auto">
            <Image
              src={"/images/logo_ms_letter_day.svg"}
              width={"220px"}
              height={"80px"}
              alt="moon society logo"
            />
          </a>
          <RiMenu4Line
            className={`${
              showNav ? "hidden" : "text-gray-50"
            } transition-all cursor-pointer z-[60] -ml-12`}
            onClick={toggleNav}
          />
          <RiCloseLine
            className={`${
              showNav ? "text-gray-50" : "hidden"
            }  cursor-pointer z-[60] -ml-12`}
            onClick={toggleNav}
          />
          <div
            className={`${
              showNav ? "translate-x-0" : "translate-x-full"
            } fixed bottom-0 right-0  left-0 md:left-2/3 h-screen backdrop-blur-sm bg-primary-500/80 top-20 transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col wrapper text-gray-50 mt-32">
              <li className=" mx-auto mb-8 ">
                <a href="#artist" onClick={(showNav) => setShowNav(!showNav)}>
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300">
                    Artists
                  </h3>
                </a>
              </li>
              <li className=" mx-auto mb-8 ">
                <a
                  href="#associate"
                  onClick={(showNav) => setShowNav(!showNav)}
                >
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300">
                    Associates
                  </h3>
                </a>
              </li>
              <li className=" mx-auto mb-8 ">
                <a href="#service" onClick={(showNav) => setShowNav(!showNav)}>
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300">
                    Services
                  </h3>
                </a>
              </li>
              <li className=" mx-auto mb-8 ">
                <a href="#about" onClick={(showNav) => setShowNav(!showNav)}>
                  <h3 className="transition-all duration-500 text-primary-100 hover:text-secondary-300">
                    About
                  </h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Header;
