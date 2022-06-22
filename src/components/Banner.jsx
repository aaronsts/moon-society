import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gradient-to-t from-primary-400 to-primary-500">
      <div className="container mx-auto h-[calc(100vh-80px)] flex items-center flex-col md:flex-row justify-between">
        <div className="w-fit">
          <h1>
            The Moon <br /> is a friend <br /> for the lonesome <br /> to talk
            to
          </h1>
          <h5 className="uppercase italic">- Carl Sandburg</h5>
        </div>
        <div className="relative w-[720px] h-[720px]">
          <Image
            layout="fill"
            src={"/images/ms-banner.svg"}
            alt="moon society banner"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
