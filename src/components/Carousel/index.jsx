import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({ pictures, name }) => {
  console.log(pictures);
  return (
    <CarouselProvider totalSlides={pictures.length} className="h-4/5">
      <Slider className="hidden md:block h-full text-primary-100 relative shadow rounded-2xl overflow-hidden">
        {pictures.map((picture, i) => (
          <Slide key={i} index={i} className="w-full">
            <Image
              src={picture.url}
              width="400px"
              height="500px"
              objectFit="cover"
              objectPosition="top"
              alt={name}
            />
          </Slide>
        ))}
      </Slider>
      <div className="hidden md:flex justify-between relative -mt-10">
        <ButtonBack>
          <FaAngleLeft color={"#00E0AC"} />
        </ButtonBack>
        <ButtonNext>
          <FaAngleRight color={"#00E0AC"} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
