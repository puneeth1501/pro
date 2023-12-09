import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section
      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-8"
      id="education"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Education</h2>
        </div>
        <div className="education-details mb-8">
          <h3 className="text-2xl font-semibold text-primary">
            Master of Science in Computer Science
          </h3>
          <p className="text-lg text-secondary">
            Saint Louis University, Currently 2023-2025
          </p>
        </div>
        <div className="education-details mb-8">
          <h3 className="text-2xl font-semibold text-primary">
            Bachelors in Electronics and communication engineering
          </h3>
          <p className="text-lg text-secondary">Kl university, 2018-2022</p>
        </div>
        <div className="education-details mb-8">
          <h3 className="text-2xl font-semibold text-primary">
            11th,12th Grade
          </h3>
          <p className="text-lg text-secondary">
            Sri chaitany junior college 2016-2018
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
