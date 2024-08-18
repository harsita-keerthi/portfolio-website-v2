"use client";
import React, { startTransition, useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton"

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src="/images/about-image.jpg"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">I'm a third-year Computer Science student at San José State University. Alongside my major, I'm delving into the fields of Psychology, Neuroscience, and Statistics. I find inspiration between the intersection of technology and the intricacies of human behavior. </p>
                    <div className="flec flex-row mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB&BE] border-b border-purple-500">
                            Skills
                        </span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;