import React from "react";
import Image from "../assets/img/ai.jpg";

const About = () => {
  return (
    <section
      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-8"
      id="about"
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <img
          className="object-cover h-auto w-full md:w-2/3 lg:w-1/2 rounded-2xl shadow-lg"
          src={Image}
          alt="Profile"
        />
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Anantha Puneeth
            </h2>
            <p className="mb-4 text-lg">Master's Student</p>
            <hr className="mb-6 opacity-5 w-16 border-t-2 border-white" />
            <p className="mb-8">
              Hello! I'm puneeth Chowdary, I love programming. I worked as a web
              developer, In my time as a software engineer I had worked closely
              with react library and created 50+ websites I would love to
              connect with the many developers and See whats next..........
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
