import React from "react";

const Ribbon = () => {
  return (
    <marquee
      direction="left"
      loop="2"
      className="w-[50%] xl:w-[20%] bg-red-600 text-white uppercase tracking-widest font-bold text-[1em] fixed right-0 bottom-10 flex justify-center items-center rounded-s-full"
    >
      Under Improvement...
    </marquee>
  );
};

export default Ribbon;
