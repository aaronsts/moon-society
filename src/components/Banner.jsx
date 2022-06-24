import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const textVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: -200 },
};

const imageVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 200 },
};

const Banner = () => {
  return (
    <div className="">
      <div className="container mx-auto h-[calc(100vh-80px)] flex items-center flex-col md:flex-row justify-between">
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="w-1/2"
        >
          <h1>
            The Moon <br /> is a friend <br /> for the lonesome <br /> to talk
            to
          </h1>
          <h5 className="uppercase italic">- Carl Sandburg</h5>
        </motion.div>
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="relative w-[720px] h-[720px]"
        >
          <Image
            priority
            layout="fill"
            src={"/images/ms-banner.svg"}
            alt="moon society banner"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
