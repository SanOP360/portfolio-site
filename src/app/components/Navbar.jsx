"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { title: "About", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const scrollToSection = (path) => {
    setNavbarOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-92">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          PORTFOLIO
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div
          className={`menu ${
            navbarOpen ? "flex" : "hidden"
          } flex-col items-center w-full md:flex md:flex-row md:w-auto md:items-center`}
        >
          <ul className="flex flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 mt-10 md:mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={1000}
                  className="text-gray-200 hover:text-white cursor-pointer hover:underline hover:decoration-purple-500"
                  onClick={() => scrollToSection(link.path)}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
