import React from "react";

const ContactSection = ({id}) => {
  return (
    <div id={id} className="bg-black-400 py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        Contact me
      </h2>
      <div className="flex flex-col items-center">
        <a
          href="https://wa.link/1o26u0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 w-full sm:w-fit rounded-full mb-4 bg-green-500 hover:bg-green-600 text-white text-center font-semibold text-lg sm:text-xl md:text-2xl transition duration-300 ease-in-out"
        >
          WhatsApp Me
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-chauhan-444a5623b"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 w-full sm:w-fit rounded-full bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold text-lg sm:text-xl md:text-2xl transition duration-300 ease-in-out"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
