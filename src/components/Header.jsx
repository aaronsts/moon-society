import React from "react";
import Image from "next/image";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container mx-auto h-20 flex items-center sticky top-0">
      <div className="relative w-64 h-12 mx-auto lg:h-16">
        <Image
          src="/images/logo_ms_letter_day.svg"
          layout="fill"
          alt="Moon Society Logo"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
