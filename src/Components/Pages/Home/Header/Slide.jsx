import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Slide = ({ slide }) => {
  const { id, name, thumbnail, details } = slide;

  return (
    <div className="relative overflow-hidden">
      <img
        style={{ height: "450px" }}
        className="w-full object-cover"
        src={thumbnail}
        alt="Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center text-white">
          <h2 className="md:text-7xl text-2xl font-bold  text-shadow mb-10">
            {name}
          </h2>
          <p className="mx-auto md:text-lg w-4/6">
            <ReactTypingEffect text={details} speed={40} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
