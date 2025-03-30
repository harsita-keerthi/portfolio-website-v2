"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import {motion, useInView} from "framer-motion"


const projectsData = [
    {
      id: 1,
      title: "Memo",
      description: "AI Flashcards SaaS Application",
      image: "/images/projects/memo-ai.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harsita-keerthi/flashcards-ai",
      previewUrl: "https://memo-flashcards-ai.vercel.app/",
    },
    {
      id: 2,
      title: "LingoMate AI",
      description: "Chatbot for Language Learners",
      image: "/images/projects/lingomate.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/zfshaikh/CustomerAI_Chat",
      previewUrl: "https://lingomate-ai.vercel.app/",
    },
    {
      id: 3,
      title: "Stock Predictions",
      description: "Stock Price Prediction with LSTM and Moving Averages",
      image: "/images/projects/stock.png",
      tag: ["All", "Web", "ML/Data"],
      gitUrl: "https://github.com/harsita-keerthi/stock-prediction-model",
      previewUrl: "https://stock-prediction-model.streamlit.app/",
    },
    {
      id: 4,
      title: "Algorithmic Trader",
      description: "Algorithmic Trading Bot for Equity Markets",
      image: "/images/projects/trading-bot.jpeg",
      tag: ["All", "ML/Data"],
      gitUrl: "https://github.com/harsita-keerthi/algorithmic-trading-bot",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Safe Swan",
      description: "Travel Safety Platform with AI Integration",
      image: "/images/projects/project-safe-swan.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/peeoke/SafeSwan",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "EEG Data Analysis",
      description: "Electroencephalogram (EEG) Data Analysis using OpenBCI",
      image: "/images/projects/eeg.jpeg",
      tag: ["All", "ML/Data"],
      gitUrl: "https://github.com/harsita-keerthi/OpenBCI-EEG",
      previewUrl: "/",
    },
    {
      id:7,
      title: "Task Ease Product Design",
      description: "Task Management System for Individuals and Enterprises",
      image: "/images/projects/taskease.png",
      tag: ["All", "Product"],
      gitUrl: "/",
      previewUrl: "/taskease-project-demo.pdf",
    },
    {
      id:8,
      title: "Expansion for MKE Fellows",
      description: "JPMC Data for Good Hackathon",
      image: "/images/projects/jpmc-map.png",
      tag: ["All", "ML/Data"],
      gitUrl: "/",
      previewUrl: "/jpmc-pitch-deck.pdf",
  },
  {
    id:9,
    title: "Protege",
    description: "AI Learning Platform",
    image: "/images/projects/protege.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harsita-keerthi/protege",
    previewUrl: "https://protege.reflex.run/",
  },
  {
    id:10,
    title: "Search Query Recommendation System",
    description: "Google x Break Through Tech Fall Studio Project",
    image: "/images/projects/google.png",
    tag: ["All", "Web", "ML/Data"],
    gitUrl: "https://github.com/harsita-keerthi/btt-google-2e",
    previewUrl: "https://docs.google.com/presentation/d/120Zn7rPPT29uXdwBKD9wdJlObjj7Nk3GWQwikFf93TM/edit#slide=id.g3194e11578a_2_12255",
  },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
      initial: {y: 50, opacity: 0},
      animate: {y:0, opacity:1 },
    }

    return (
        <section id="projects" >
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
          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.li 
                key={index} 
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 0.3, delay: index*0.4}}
              > 
              
              <ProjectCard
                key={project.id}
                title={project.title} 
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
              </motion.li>
            ))}
          </ul>
        </section>
    );
}

export default ProjectsSection;