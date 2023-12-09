import React, { useEffect, useState } from "react";
import { skills } from "../data";
import { Link } from "react-scroll";

// Circular Progress Bar Component
const CircularProgress = ({ percent, textColor }) => {
  const strokeWidth = 4;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const progress = (percent / 100) * circumference;

  return (
    <svg className="w-12 h-12" viewBox="0 0 50 50">
      <circle
        className="progress-ring__circle"
        strokeWidth={strokeWidth}
        stroke={textColor === "text-white" ? "#fff" : "#000"}
        fill="transparent"
        r={radius}
        cx={25}
        cy={25}
      />
      <circle
        className="progress-ring__circle progress-ring__progress"
        strokeWidth={strokeWidth}
        stroke={textColor === "text-white" ? "#FF3366" : "#FF3366"}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={25}
        cy={25}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: circumference - progress,
        }}
      />
    </svg>
  );
};

const Skills = () => {
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        setTextColor("text-black");
      } else {
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 ${textColor}`}
      id="skills"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className={`section-title before:content-skills relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block`}
          >
            Skills
          </h2>
          <p className={`subtitle ${textColor}`}>Still Improving</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Link
              key={index}
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className={`hover:opacity-80 transition-opacity ease-in-out`}
            >
              <div
                className={`p-2 bg-white rounded-md shadow-md ${textColor} flex flex-col items-center justify-center`}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: skill.favicon }} />
                </div>
                <div className="mt-2 text-center">
                  <span
                    className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                      textColor === "text-white"
                        ? "text-pink-600 bg-pink-200"
                        : "text-pink-900 bg-pink-300"
                    }`}
                  >
                    {skill.name}
                  </span>
                  <div className="mt-1">
                    <span
                      className={`text-xs font-semibold inline-block ${
                        textColor === "text-white"
                          ? "text-pink-600"
                          : "text-pink-900"
                      }`}
                    >
                      {skill.percent}%
                    </span>
                  </div>
                </div>
                {/* Circular Progress Bar */}
                <div className="mt-2">
                  <CircularProgress
                    percent={skill.percent}
                    textColor={textColor}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
