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
                    I'm a third-year Computer Science student at San José State University. Alongside my major, I'm delving into the fields of Psychology, Neuroscience, and Statistics. I find inspiration between the intersection of technology and the intricacies of human behavior. 
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hiver:bg-slate-200 text-white">
                        Contact
                    </button>
                    <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 bg-transparent hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Resume</span>
                    </button>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
                    <Image
                        src="/images/hero_image.png"
                        alt="hero image"
                        className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;