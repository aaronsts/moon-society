import React from "react";

// Icons
import { IconContext } from "react-icons";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const iconStyle = {
    className: "text-primary-100",
    size: "3rem",
  };
  return (
    <IconContext.Provider value={iconStyle}>
      <HiOutlineMenu />
      <div className=""></div>
    </IconContext.Provider>
  );
};

export default Navbar;
