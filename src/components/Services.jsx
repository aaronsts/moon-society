import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

// animations
import { useInView } from "react-intersection-observer";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";

// graphcms
import { getServices } from "../services";
import { Controller } from "swiper";

const Services = () => {
  const [services, setServices] = useState([]);

  // animations
  const { scrollY } = useViewportScroll();
  const serviceY = useTransform(scrollY, [0, 0], [0, 0]);
  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const titleControl = useAnimation();
  const [titleRef, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    getServices().then((newServices) => setServices(newServices));

    // animation
    if (inView) {
      console.log(scrollY);

      titleControl.start("visible");
    } else {
      titleControl.start("hidden");
    }
  }, [titleControl, inView, scrollY]);

  return (
    <motion.div style={{ y: serviceY }} className="bg-primary-400">
      <div className="container mx-auto h-[calc(100vh-80px)] flex flex-col items-left">
        <motion.h2
          ref={titleRef}
          variants={titleVariant}
          initial="hidden"
          animate={titleControl}
          className="mx-auto mb-16"
        >
          Services
        </motion.h2>
        <div className="flex flex-col items-center gap-32">
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              desc={service.description}
              icon={service.iconField.url}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
