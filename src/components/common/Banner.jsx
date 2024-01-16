import React from "react";

const Banner = ({ banner, title }) => {
  return (
    <div
      className="h-[90vh] flex-align-center justify-center sm:justify-start px-[6%] md:px-[6%]"
      style={{
        background: `url('${banner}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pl-4 rounded-3xl bg-black/10 backdrop-blur-sm max-w-[65%] w-full 2xl:max-w-[90%]">
        <h1 className="text-xl 2xl:text-4xl font-bold !leading-[1.5rem] 2xl:!leading-[4rem] text-white uppercase md:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
