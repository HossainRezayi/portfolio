import React from "react";

const Hero = () => {
  return (
    <div className="text-center bg-cover bg-top h-[90vh] flex flex-col items-center text-white section_hero ">
      <div>
        <img
          src="/assets/Profile_Image.png"
          className="h-72 w-72 rounded-full mx-auto mb-5 "
        />
        <h1 className="text-5xl mb-2.5">I Am Hossain Rezayi</h1>
        <p className="text-3xl">A Frontend Developer</p>
      </div>
    </div>
  );
};

export default Hero;
