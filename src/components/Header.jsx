import React, { useState, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";

// Icons
// import { IconContext } from "react-icons";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  return (
    <nav
      className={`fixed top-0 z-20 text-gray-50 w-screen flex flex-col transition-colors duration-500 
    bg-gray-900
  `}
    >
      <div className="flex justify-between relative z-40 wrapper py-4">
        <RiMenu4Line
          className={`${true ? "hidden" : "text-gray-50"} cursor-pointer z-30`}
        />
        <RiCloseLine
          className={`${true ? "text-gray-50" : "hidden"} cursor-pointer z-30`}
        />
      </div>
      <div
        className={`${
          true ? "translate-x-0" : "translate-x-full"
        } fixed top-0 bottom-0 right-0 z-30 left-0 md:left-2/3 bg-gray-900 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col wrapper text-gray-50 mt-32"></ul>
      </div>
    </nav>
  );
};

export default Header;
