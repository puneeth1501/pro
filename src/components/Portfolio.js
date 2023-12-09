import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-0 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block text-black font-bold text-4xl md:text-5xl lg:text-6xl">
            Projects
          </h2>
          <p className="subtitle text-black text-lg md:text-xl lg:text-2xl">
            Projects I had completed
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
