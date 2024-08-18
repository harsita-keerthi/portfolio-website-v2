'use client'
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-centert text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Hello, I'm {""}</span>
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
                    I'm a Computer Science student at San Jose State University, driven by a passion for developing projects that make a meaningful impact in the real world. Let's connect and explore how we can create impactful solutions together!</p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white">
                        Contact
                    </button>
                    <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 bg-transparent hover:bg-slate-800 text-white mt-3">
                    <a href="/swe-resume-11.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Resume</span>
                    </a>
                    </button>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative shadow-lg transform transition duration-300 hover:scale-105">
                    <Image
                        src="/images/hero_image.png"
                        alt="hero image"
                        className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        width={350}
                        height={350}
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;