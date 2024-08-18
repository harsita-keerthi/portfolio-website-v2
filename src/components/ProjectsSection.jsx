"use client"
import React from 'react'
import ProjectCard from "./ProjectCard"

const projectsData = [
    {
      id: 1,
      title: "Revise Wise",
      description: "AI Flashcards SaaS Application",
      image: "/images/projects/flashcards-ai.png",
      tag: ["All", "Web"],
    },
    {
      id: 2,
      title: "LingoMate AI",
      description: "Chatbot for Language Learners",
      image: "/images/projects/lingomate.png",
      tag: ["All", "Web"],
    },
    {
      id: 3,
      title: "Stock Predictions",
      description: "Stock Price Prediction with LSTM and Moving Averages",
      image: "/images/projects/stock.png",
      tag: ["All", "Web", "ML/Data"],
    },
    {
      id: 4,
      title: "Algorithmic Trader",
      description: "Algorithmic Trading Bot for Equity Markets",
      image: "/images/projects/trading-bot.jpeg",
      tag: ["All", "ML/Data"],
    },
    {
      id: 5,
      title: "Safe Swan",
      description: "Travel Safety Platform with AI Integration",
      image: "/images/projects/project-safe-swan.png",
      tag: ["All", "Web"],
    },
    {
      id: 6,
      title: "EEG Data Analysis",
      description: "Electroencephalogram (EEG) Data Analysis using OpenBCI",
      image: "/images/projects/eeg.jpeg",
      tag: ["All", "ML/Data"],
    },
];

const ProjectsSection = () => {
    return (
        <>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
          <div>
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title} 
                description={project.description}
                imgUrl={project.image}
              />
            ))}
          </div>
        </>
    );
}

export default ProjectsSection;