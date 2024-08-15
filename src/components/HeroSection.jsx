import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Hello, I'm Harsita
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl"> 
                    I'm a third-year Computer Science student at San José State University. Alongside my major, I'm delving into the fields of Psychology, Neuroscience, and Statistics. I find inspiration between the intersection of technology and the intricacies of human behavior. 
                </p>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
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