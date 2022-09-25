import React, { useState, useEffect } from "react";
import Image from "next/image";

import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// components
import FormModal from "./form/FormModal";

const ServiceCard = ({ counter, services, ...service }) => {
  // state
  const [showModal, setShowModal] = useState(false);

  // animation
  const cardVariant = {
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: counter % 2 == 0 ? -100 : 100 },
  };

  // start animation when in view
  const cardControl = useAnimation();
  const [cardRef, inView] = useInView({ threshold: 0.6 });
  const [subject, setSubject] = useState("");
  useEffect(() => {
    if (inView) {
      cardControl.start("show");
    }
  }, [cardControl, inView]);

  // open modal
  const handleClick = () => {
    console.log("service.name", service.slug);
    setSubject(service.slug);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <m.div
        ref={cardRef}
        initial="hidden"
        animate={cardControl}
        variants={cardVariant}
        className={` mx-auto flex-col container py-8 bg-primary-500/40 flex h-fit xl:h-80 rounded-2xl justify-center items-center shadow ${
          counter % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className=" w-full lg:w-1/3 flex flex-col justify-center items-center gap-8 cursor-pointer">
          <div className="relative w-24 h-24">
            <Image
              className="cursor-pointer"
              layout="fill"
              loader={() => service.iconField.url}
              unoptimized={true}
              src={service.iconField.url}
              alt={service.name}
            />
          </div>
          <div>
            <h4 className="text-center">{service.name}</h4>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:border-l lg:border-secondary-300 px-8 flex flex-col justify-center ">
          <p>{service.description}</p>
          <button
            className="text-secondary-300 mb-0 cursor-pointer hover:border-b border-secondary-200 w-fit"
            onClick={handleClick}
          >
            {service.excerpt}
          </button>
        </div>
      </m.div>
      {showModal && (
        <FormModal
          modal={showModal}
          setShowModal={setShowModal}
          subject={subject}
          services={services}
        />
      )}
    </>
  );
};

export default ServiceCard;
