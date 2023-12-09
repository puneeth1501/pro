import React from "react";

// import icons
import { social } from "../data";

const Socials = () => {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-white-500">Connect with me:</p>
      <ul className="flex space-x-4">
        {social.map((item, index) => (
          <li key={index}>
            <a
              className="text-accent hover:text-accent-dark"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
