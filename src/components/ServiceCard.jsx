import React, { useState, useEffect } from "react";
import Image from "next/image";

const ServiceCard = ({ counter, ...service }) => {
  console.log(service);
  return (
    <div
      className={` mx-auto container flex h-80 border-b border-primary-100 ${
        counter % 2 == 0 ? "" : "flex-row-reverse"
      }`}
    >
      <div className="w-1/2 flex flex-col justify-center items-center gap-4 cursor-pointer">
        <Image
          className="cursor-pointer"
          width={64}
          height={64}
          loader={({ width }) => service.iconField.url}
          src={service.iconField.url}
          alt={service.name}
        />
        <div>
          <h4 className="text-center">{service.name}</h4>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center ">
        <h5>{service.excerpt}</h5>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
