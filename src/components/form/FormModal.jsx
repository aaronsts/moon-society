import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Form from "./Form";

const FormModal = ({ modal, showModal, setShowModal }) => {
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
      <motion.div
        variants={modalVariant}
        initial="hidden"
        animate={control}
        className="flex flex-col md:flex-row bg-primary-400 h-[32rem] w-4/5 md:w-3/5 p-4 lg:p-8 rounded-2xl shadow relative"
      >
        <Form />
        <AiFillCloseCircle
          size="2.5rem"
          className="hover:text-secondary-300 absolute right-[-20px] top-[-20px] shadow text-primary-100 cursor-pointer"
          onClick={handleClick}
        />
      </motion.div>
    </div>
  );
};

export default FormModal;
