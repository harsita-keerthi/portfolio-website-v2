"use client";
import React, { startTransition, useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton"

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc ml-5 pl-2">
                <li>Machine Learning</li>
                <li>Data Analysis</li>
                <li>Applied AI</li>
                <li>Software Product Management</li>
                <li>Web & Application Development</li>
                <li>UI/UX Design Principles</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc ml-5 pl-2">
                <li>BS Computer Science at SJSU</li>
                <li>ML/AI Fellow at Cornell Tech</li>
                <li>Machine Learning Certificate from Cornell University</li>
                <li>Product Management Certificate from Udemy</li>
            </ul>
        )
    },
    {
        title: "Technical Languages",
        id: "technical",
        content: (
            <ul className="list-disc ml-5 pl-2">
                <li>Python
                    <ul className="list-disc ml-5 pl-2">
                        <li>Data Analysis: Numpy, Pandas, Matplotlib, Plotly, Seaborn, etc</li>
                        <li>Machine Learning: TensorFlow, PyTorch, Keras, Scikit-Learn, etc</li>
                        <li>Frameworks: Flask, Django, Streamlit</li>
                    </ul>
                </li>
                <li>Java</li>
                <li>HTML/CSS (TailwindCSS)</li>
                <li>JavaScript (React, Next.js)</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>R for Statistics</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src="/images/sjsu-about.jpeg"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    alt="SJSU"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">I&apos;m a final year Computer Science student at San José State University. Alongside my major, I&apos;m delving into the fields of Psychology, Neuroscience, and Statistics. I find inspiration between the intersection of technology and the intricacies of human behavior. </p>
                    <div className="flec flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("technical")} 
                            active={tab === "technical"}
                        >
                            {" "}
                            Technical Languages{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;