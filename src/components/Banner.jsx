import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const textVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -200 },
};

const imageVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 200 },
};

const Banner = () => {
  return (
    <div
      id="home"
      className="container mx-auto h-screen flex items-center gap-8 flex-col justify-center md:flex-row md:justify-between"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="w-full text-center md:text-left md:w-1/2"
      >
        <h1>
          The Moon <br /> is a friend <br /> for the lonesome <br /> to talk to
        </h1>
        <h5 className="uppercase italic">- Carl Sandburg</h5>
      </motion.div>
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] 2xl:w-[720px] 2xl:h-[720px]"
      >
        <Image
          priority
          layout="fill"
          src={"/images/ms-banner.svg"}
          alt="moon society banner"
          objectFit="contain"
          objectPosition="center"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
