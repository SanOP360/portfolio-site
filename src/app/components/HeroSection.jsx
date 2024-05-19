"use client";

import React, { useState } from "react";
import TabButton from "./TabButton";

const Tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        <li className="text-lg">Node.js</li>
        <li className="text-lg">Express</li>
        <li className="text-lg">Javascript</li>
        <li className="text-lg">React</li>
        <li className="text-lg">Next.js</li>
        <li className="text-lg">Sequelize</li>
        <li className="text-lg">MongoDB</li>
        <li className="text-lg">C++</li>
        <li className="text-lg">Python</li>
        <li className="text-lg">HTML</li>
        <li className="text-lg">CSS</li>
        <li className="text-lg">Tailwind CSS</li>
        <li className="text-lg">Bootstrap</li>
        <li className="text-lg">SQL</li>
        <li className="text-lg">Redux</li>
        <li className="text-lg">React Router</li>
        <li className="text-lg">Github</li>
        <li className="text-lg">Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        <li className="text-lg">Sharda Public School</li>
        <li className="text-lg">
          Uttarakhand Technical University (2019-2023)
        </li>
      </ul>
    ),
  },
];

const AboutSection = ({ id }) => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section
      id={id}
      className="text-white  p-10 rounded-xl shadow-2xl mx-auto max-w-7xl"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">About Me</h2>
        <p className="text-base lg:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          I am a passionate developer with expertise in the MERN stack. I have a
          deep understanding of Node.js, Express, React, and MongoDB. I am
          proficient in frontend technologies such as HTML, CSS, and JavaScript.
          Additionally, I have experience in backend development using
          Sequelize, SQL, and Firebase. Alongside my web development skills, I
          excel in competitive coding, particularly in C++. I pursued my
          Bachelor&apos;s in Electronics and Communication Engineering from
          Uttarakhand Technical University, where I discovered my passion for
          coding during my second year. Since then, I have been dedicated to
          expanding my knowledge and honing my skills in software development.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        {Tab_data.map((tabData) => (
          <TabButton
            key={tabData.id}
            selectTab={() => handleTabChange(tabData.id)}
            active={tab === tabData.id}
          >
            {tabData.title}
          </TabButton>
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        {Tab_data.find((t) => t.id === tab).content}
      </div>
    </section>
  );
};

export default AboutSection;
