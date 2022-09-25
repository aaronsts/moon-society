import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { m } from "framer-motion";
import Form from "./Form";

const FormModal = ({ modal, setShowModal, subject, services }) => {
  // animation
  const control = useAnimation();
  const modalVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  // close modal
  const handleClick = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode == 27) {
        setShowModal(false);
        document.body.style.overflow = "unset";
      }
    };
    window.addEventListener("keydown", close);

    if (modal) {
      control.start("visible");
    }
    return () => window.addEventListener("keydown", close);
  }, [control, modal, setShowModal]);

  return (
    <div className="transition-all display-none inset-0 z-40 fixed bg-primary-500/50 flex items-center justify-center">
      <m.div
        variants={modalVariant}
        initial="hidden"
        animate={control}
        className="flex flex-col lg:flex-row bg-primary-400 h-fit w-4/5 md:w-3/5 p-4 lg:p-8 rounded-2xl shadow relative items-center gap-4"
      >
        <Form subject={subject} services={services} />
        <div className="w-full lg:w-1/3 hidden md:block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ab repudiandae praesentium quaerat, rem vero sit earum corrupti,
            ratione in sed porro recusandae nulla unde laudantium, nam
            exercitationem maxime officia.
          </p>
        </div>
        <AiFillCloseCircle
          size="2.5rem"
          className="absolute right-[-20px] top-[-20px] shadow cursor-pointer text-primary-200 hover:text-primary-300 hover:scale-110 transition-all"
          onClick={handleClick}
        />
      </m.div>
    </div>
  );
};

export default FormModal;
