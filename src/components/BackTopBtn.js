import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackTopBtn;
