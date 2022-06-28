import React, { useState, useEffect } from "react";

// animation

const ServiceCard = ({ name, desc, icon }) => {
  return (
    <div className="w-fit mx-auto">
      <div className="w-32 h-32">
        <object
          type="image/svg+xml"
          data={icon}
          width="196px"
          height="196px"
          className="mb-4"
        />
      </div>

      <div className=" flex-col w-1/3 hidden">
        <h3 className="text-center w-full">{name}</h3>
        <p className="h-56 ">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
