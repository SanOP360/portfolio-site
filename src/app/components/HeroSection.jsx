"use client"

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const whatsappLink = "https://wa.link/1o26u0";

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 block sm:inline">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sanjay",
                1000,
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a passionate web developer specializing in the MERN stack. With
            expertise in Node.js, Express, React, Sequelize, and MongoDB, I
            bring creative solutions to life. Let's build something amazing
            together!
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 w-full sm:w-auto rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out border border-white text-white"
            >
              Hire Me
            </a>
            <button className="relative px-6 py-3 w-full sm:w-auto bg-black text-white mt-3 sm:mt-0 rounded-full border-2 border-purple-400 hover:bg-gradient-to-br hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out hover:text-white transition-all duration-300 ease-in-out">
              <a
                href="/downloads/resume.pdf"
                download="resume.pdf"
                className="block w-full h-full"
                style={{ textDecoration: "none" }}
              >
                Download CV
              </a>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image
              src="/images/profileImg.jpeg"
              alt="hero image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
