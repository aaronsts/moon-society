import React, { useState, useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ counter, ...service }) => {
  // animation
  const cardVariant = {
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: counter % 2 == 0 ? -100 : 100 },
  };

  // start animation when in view
  const cardControl = useAnimation();
  const [cardRef, inView] = useInView({ threshold: 1 });
  useEffect(() => {
    if (inView) {
      cardControl.start("show");
    }
  }, [cardControl, inView]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={cardControl}
      variants={cardVariant}
      className={` mx-auto container py-8 bg-primary-500/40 flex flex-col h-fit xl:h-80 rounded-2xl justify-center items-center shadow ${
        counter % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className=" w-full lg:w-1/3 flex flex-col justify-center items-center gap-8 cursor-pointer">
        <Image
          className="cursor-pointer"
          width={96}
          height={96}
          loader={({ width }) => service.iconField.url}
          src={service.iconField.url}
          alt={service.name}
        />
        <div>
          <h4 className="text-center">{service.name}</h4>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 lg:border-l lg:border-secondary-300 px-8 flex flex-col justify-center ">
        <p>{service.description}</p>
        <p className="text-secondary-300 mb-0 ">{service.excerpt}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
