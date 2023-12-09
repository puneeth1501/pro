import React from "react";
import { social } from "../data";
// import Logo from "../assets/img/s.jpg";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="text-white text-base"
                  href={href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>

          <p className="text-[#F9A8D4] text-paragraph opacity-80 text-[15px] font-bold">
            Scroll Up to see ones again
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
