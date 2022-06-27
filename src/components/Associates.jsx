import React, { useEffect, useState } from "react";
import AssociateCard from "./AssociateCard";

// animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// graphcms
import { getAssociates } from "../services";
import { Controller } from "swiper";

const Associates = () => {
  const [associates, setAssociates] = useState([]);

  // animation
  const associatesVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 100 },
  };
  const associateControl = useAnimation();
  const [associateRef, inView] = useInView();

  useEffect(() => {
    getAssociates().then((newAssociates) => setAssociates(newAssociates));
    if (inView) {
      associateControl.start("visible");
    }
  }, [inView, associateControl]);

  return (
    <motion.div
      ref={associateRef}
      variants={associatesVariant}
      initial="hidden"
      animate={associateControl}
      className="scroll-mt-24"
      id="associate"
    >
      <div className="container mx-auto min-h-[calc(100vh-80px)] flex flex-col items-center">
        <h2 className="mb-8">Associates</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {associates.map((associate, index) => (
            <AssociateCard key={index} {...associate} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Associates;
