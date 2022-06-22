import React, { useState, useEffect } from "react";

const ServiceCard = ({ name, desc, icon }) => {
  return (
    <div className="flex items-center bg-red-300">
      <div className="flex flex-col items-center justify-center w-1/2">
        <object
          type="image/svg+xml"
          data={icon}
          width="196px"
          height="196px"
          className="mb-4"
        />
        <h3 className="text-center w-full">{name}</h3>
      </div>
      <p className="w-1/2 float-right">{desc}</p>
    </div>
  );
};

export default ServiceCard;
