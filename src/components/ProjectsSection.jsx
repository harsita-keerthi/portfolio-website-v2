"use client"
import React, {useState} from 'react'
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const projectsData = [
    {
      id: 1,
      title: "Revise Wise",
      description: "AI Flashcards SaaS Application",
      image: "/images/projects/flashcards-ai.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "LingoMate AI",
      description: "Chatbot for Language Learners",
      image: "/images/projects/lingomate.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Stock Predictions",
      description: "Stock Price Prediction with LSTM and Moving Averages",
      image: "/images/projects/stock.png",
      tag: ["All", "Web", "ML/Data"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Algorithmic Trader",
      description: "Algorithmic Trading Bot for Equity Markets",
      image: "/images/projects/trading-bot.jpeg",
      tag: ["All", "ML/Data"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Safe Swan",
      description: "Travel Safety Platform with AI Integration",
      image: "/images/projects/project-safe-swan.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "EEG Data Analysis",
      description: "Electroencephalogram (EEG) Data Analysis using OpenBCI",
      image: "/images/projects/eeg.jpeg",
      tag: ["All", "ML/Data"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
        id:7,
        title: "Task Ease Product Design",
        description: "Task Management System for Individuals and Enterprises",
        image: "/images/projects/taskease.png",
        tag: ["All", "Product"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
          <div className="text-white flex flex-direction-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="ML/Data" 
                isSelected={tag === "ML/Data"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Product" 
                isSelected={tag === "Product"} 
            />
            {/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
                All</button>
            <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
                Web</button>
            <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
                ML/Data</button>
            <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
                Product</button> */}
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title} 
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </>
    );
}

export default ProjectsSection;