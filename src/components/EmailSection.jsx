"use client"
import Image from "next/image";
// import GithubIcon from "github-icon.svg";
// import LinkedinIcon from "linkedin-icon.svg";
import Link from "next/link";
import React, { useState } from "react";

const EmailSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setSubmitted(true); // Set the state to show the confirmation message
        // Here, you would typically handle form submission, e.g., sending data to a server.
      };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-16 relative">
        <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-10">
            <h4 className="text-2xl font-bold text-white my-2">Let&apos;s Connect</h4>
            <p className="text-[#ADB7BE] mb-4 max-4-md text-xl">
                {" "}
                I&apos;m currently looking for internships in Software Engineering, Machine Learning, and Product Management. My inbox is always open, so reach out to me if you think I would be a good fit for a role! Whether you have a question or just want to chat, I&apos;ll try my best to get back to you. 
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/harsita-keerthi"
                    target="_blank" // Opens the preview in a new tab
                    rel="noopener noreferrer">
                    <Image src="/github-icon.svg" alt="Github Icon" width="40" height="40"></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/harsitak/"
                    target="_blank" // Opens the preview in a new tab
                    rel="noopener noreferrer">
                    <Image src="/linkedin-icon.svg" alt="LinkedIn Icon" width="40" height="40"></Image>
                </Link>
                <Link href="mailto:harsita.keerthikanth@gmail.com"initial={{ opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration:0.5}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
                    <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
        
        <div className="justify-center items-center">
            {submitted ? (
            // If `submitted` is true, render this confirmation message
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Thank you for your message! I&apos;ll get back to you soon.</p>
            </div>
            ) : (
            // If `submitted` is false, render the form
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-md font-medium">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="your-email@gmail.com"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-md font-medium">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let&apos;s connect!"
                    />
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="text-white block text-md mb-2 font-medium">
                    Message
                </label>
                <textarea
                    name="message"
                    d="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Leave your message here."
                />
                </div>
                <button
                    type="submit"
                    className="bg-secondary-500 hover:bg-secondary-600 font-medium py-2.5 px-5 rounded-lg w-full"
                >
                 Send Message
                </button>
            </form>
            )}
        </div>

    </section>
  )
}

export default EmailSection