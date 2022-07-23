import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

// graphcms
import { getServices } from "../services";

// animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [services, setServices] = useState([]);

  // animation
  const serviceVariant = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const serviceControl = useAnimation();

  const [serviceRef, inView] = useInView();

  useEffect(() => {
    getServices().then((newServices) => setServices(newServices));
    if (inView) {
      serviceControl.start("show");
    }
  }, [serviceControl, inView]);
  return (
    <motion.div
      ref={serviceRef}
      id="service"
      variants={serviceVariant}
      initial="hidden"
      animate={serviceControl}
      className=" scroll-mt-24"
    >
      <div className=" mx-auto min-h-[calc(100vh-80px)] flex flex-col items-left">
        <h2 className="mx-auto mb-16">Services</h2>
        <div className="flex flex-col justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              {...service}
              counter={index}
              services={services}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
