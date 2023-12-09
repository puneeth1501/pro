import React from "react";
import img from "../assets/img/profile_picture.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            {/* Introduction */}

            {/* Main Heading */}
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold text-white md:tracking-[-2px]">
              Web <br /> Programmer
            </h1>
            {/* Subheading */}
            <p className="text-lg text-white font-bold mb-3">Hello EveryOne,</p>
          </div>
          {/* Profile Image (Visible on Larger Screens) */}
          <div className="hidden lg:flex flex-1 justify-end items-end">
            <img
              style={{
                marginBottom: "60px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              src={img}
              alt="Profile"
              className="w-64 h-64 object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
