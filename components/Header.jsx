import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container bg-red-500 mx-auto">
      <div className="relative h-12 lg:h-16">
        <Image
          src="/images/logo_ms_letter_day.svg"
          layout="fill"
          alt="Moon Society Logo"
        />
      </div>
    </div>
  );
};

export default Header;
