import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="bg-transparent">
      {" "}
      {/* Add a class for background color, e.g., bg-transparent */}
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => (
          <li className="text-white transition-all duration-300" key={idx}>
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
