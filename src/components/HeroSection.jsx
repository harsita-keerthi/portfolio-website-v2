'use client'
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="lg:py-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration:0.5}} className="col-span-8 place-self-centert text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">Hello, I&apos;m {""}</span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                        'Harsita',
                        1000, 
                        'Software Engineer',
                        1000,
                        'Product Manager',
                        1000,
                        'Machine Learning Engineer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> 
                    I&apos;m a Computer Science student at San Jose State University, driven by a passion for developing projects that make a meaningful impact in the real world. Let&apos;s connect and explore how we can create impactful solutions together!</p>
                <div>
                    <a href="#contact">
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                        Contact
                    </button>
                    </a>
                    <button className="px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-transparent hover:bg-slate-800 text-white mt-3">
                    <a href="/harsita-keerthikanth-resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Resume</span>
                    </a>
                    </button>
                </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration:0.5}} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative shadow-lg transform transition duration-300 hover:scale-105">
                    <Image
                        src="/images/hero_image.png"
                        alt="hero image"
                        className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        width={350}
                        height={350}
                    />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;