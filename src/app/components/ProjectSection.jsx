import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description:
      "A platform for buying music items with a cart system, authentication, and a Firebase backend. It includes a concert ticket booking page, as well as about and contact pages. The frontend is built with React and Redux, and React Router is used for routing.",
    image: "/Images/Projects/EcommerceImg.webp",
    githubLink: "https://github.com/SanOP360/EcommerceWebsite",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A comprehensive tool for tracking personal expenses. Features include adding expenses, premium membership purchase via Razorpay, leaderboard, and daily, monthly, and yearly expense reports. Users can download expenses and switch to dark mode. Backend built with Express and Sequelize.",
    image: "/Images/Projects/ExpenseTracker.jpg",
    githubLink: "https://github.com/SanOP360/BackendExpenseTracker",
  },
  {
    id: 3,
    title: "Mailbox App",
    description:
      "An application to send and receive emails with inbox and sent sections. Features proper authentication, using Firebase for the backend, and built with Redux, React Router, and Firebase.",
    image: "/Images/Projects/Mailbox.jpg",
    githubLink: "https://github.com/SanOP360/mymailboxapp",
  },
  {
    id: 4,
    title: "Chat App",
    description:
      "A real-time chat application supporting private and group messages. Users can send messages and form groups to chat with multiple people. Built with React, Express, and Sequelize, using JWT for authentication.",
    image: "/Images/Projects/chatApp.jpg",
    githubLink: "https://github.com/SanOP360/mychatBackend",
  },
  {
    id: 5,
    title: "Full Stack Portfolio Site",
    description:
      "A full-stack portfolio website built with React and Express. It showcases my skills and projects, and features sections for projects, about, and contact. The backend API, built with Node.js and Express.js, includes endpoints for adding and retrieving projects.",
    image: "/Images/Projects/PortfolioImg.jpg",
    githubLink: "https://github.com/SanOP360/Portfolio",
  },
];

const ProjectSection = ({id}) => {
  return (
    <div id={id} className="py-4 mt-2">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        My Projects
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
