import React, { useState, useEffect } from "react";
import Image from "next/image";
// animation

const ServiceCard = ({ name, desc, icon }) => {
  return (
    <div className="w-32 h-32 m-16 mx-auto relative group flex flex-col items-center justify-center">
      <div className="relative cursor-pointer w-32 h-32 ">
        <Image
          layout="fill"
          loader={({ width }) => icon.url}
          src={icon.url}
          alt={name}
        />
      </div>
      <div className="transition-all cursor-default rounded backdrop-blur-sm p-8 bg-primary-200/50 flex-col w-[28rem] h-[28rem] absolute -top-[160px] -left-[160px] opacity-0 group-hover:opacity-100">
        <h3 className="text-center">{name}</h3>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
