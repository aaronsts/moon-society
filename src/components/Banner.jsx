import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-t from-primary-400 to-primary-500">
      <div className="container mx-auto h-[calc(100vh-80px)] flex items-start flex-col justify-center">
        <h1>
          The Moon <br /> is a friend <br /> for the lonesome <br /> to talk to
        </h1>
        <h5 className="uppercase italic">- Carl Sandburg</h5>
      </div>
    </div>
  );
};

export default Banner;
