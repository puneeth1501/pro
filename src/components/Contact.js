import React from "react";
import { contact } from "../data";

const Contact = () => {
  return (
    <section
      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 text-white" // Updated background gradient and text color
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 font-white">
            Contact me
          </h2>{" "}
          {/* Updated text color to white and added font-bold */}
          <p className="mb-4 text-lg font-white">
            You can contact me from here
          </p>{" "}
          {/* Updated text color to white and added font-bold */}
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2"></div>
          <form
            className="space-y-8 w-full max-w-[780px]"
            action="https://formspree.io/f/xoqozbka"
            method="POST"
          >
            <div className="flex gap-8">
              <input
                className="input text-white font-bold" // Updated text color to white and added font-bold
                type="name"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <input
                className="input text-white font-bold" // Updated text color to white and added font-bold
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              className="textarea text-white font-bold" // Updated text color to white and added font-bold
              name="message"
              id="message"
              placeholder="Write Message..."
            ></textarea>
            <button
              className="btn btn-lg bg-pink-500 hover:bg-secondary-hover"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
