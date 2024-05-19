"use client";

import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`mr-6 px-4 py-2 font-semibold transition-colors duration-300 ease-in-out ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
