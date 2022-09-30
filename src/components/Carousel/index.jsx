import React from "react";
import Image from "next/image";
import { default as NukaCarousel } from "nuka-carousel/lib/carousel";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = ({ pictures, name }) => {
  return (
    <NukaCarousel
      className="hidden lg:block"
      renderBottomCenterControls={false}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <GrPrevious
          className="ml-4 cursor-pointer hidden lg:block"
          onClick={previousSlide}
          disabled={previousDisabled}
        />
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <GrNext
          className="mr-4 cursor-pointer hidden lg:block"
          onClick={nextSlide}
          disabled={nextDisabled}
        />
      )}
    >
      {pictures.map((picture, i) => (
        <div key={i} className=" flex justify-center">
          <Image
            src={picture.url}
            width="320px"
            height="350px"
            objectFit="cover"
            objectPosition="center"
            alt={name}
          />
        </div>
      ))}
    </NukaCarousel>
  );
};

export default Carousel;
