import React, { useState, useEffect } from "react";
import { projectsData } from "../data";
import Project from "./Project";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 rounded-xl shadow-md">
      {/* Projects heading */}
      <h2 className="text-3xl font-bold mb-4 text-white text-center">
        Projects
      </h2>

      {/* Slideshow */}
      <div className="relative">
        {/* Previous button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
        >
          &lt;
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
        >
          &gt;
        </button>

        {/* Current project */}
        <div className="flex justify-center">
          <div className="max-h-80 overflow-y-auto">
            <Project
              item={projectsData[currentIndex]}
              key={projectsData[currentIndex].id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
