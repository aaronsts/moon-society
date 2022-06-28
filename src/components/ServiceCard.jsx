import React, { useState, useEffect } from "react";

// animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ name, desc, icon }) => {
  const serviceControl = useAnimation();
  const [serviceRef, inView] = useInView({
    rootMargin: "50px",
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      serviceControl.start("visible");
    } else {
      serviceControl.start("hidden");
    }
  }, [inView, serviceControl]);

  const serviceVariant = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0 },
  };
  return (
    <div
      ref={serviceRef}
      className="container flex items-center w-screen h-[50vh]"
    >
      <div className="flex flex-col items-center justify-center w-1/2">
        <object
          type="image/svg+xml"
          data={icon}
          width="196px"
          height="196px"
          className="mb-4"
        />
      </div>

      <motion.div
        id="stickyText"
        variants={serviceVariant}
        initial="hidden"
        animate={serviceControl}
        className="flex flex-col w-1/2 fixed top-1/2 -mt-32 right-0 pr-8 md:pr-16 lg:pr-32 xl:pr-48"
      >
        <h3 className="text-center w-full">{name}</h3>
        <p className="h-56 ">{desc}</p>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
