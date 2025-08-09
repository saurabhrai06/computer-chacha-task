import React from 'react';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import Stats from './Stats'; 

const HeroSection = () => {
  return (
    <section className="bg-brand-dark text-white pt-8 pb-20 px-6">
      <div className="container mx-auto text-center">

        {/* Intro Text */}
        <p className="text-brand-accent font-semibold tracking-widest">
          A YOUNG CREATIVE DESIGNER BASED IN NEW DELHI
        </p>

        {/* Profile Image */}
        <div className="mt-6 flex justify-center">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-brand-accent to-brand-purple">
            <Image
              src="/profile.png" 
              alt="Saurabh Rai"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl md:text-6xl font-bold">
          I'm a Designer, <br /> and Developer
        </h1>

        {/* "ABOUT ME" TEXT */}
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Hello! I'm a passionate developer with a knack for creating dynamic and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
        </p>

        {/* CTA Button */}
        <button className="mt-8 bg-brand-accent text-brand-dark font-bold text-lg py-3 px-6 rounded-full flex items-center gap-2 mx-auto border-2 border-brand-dark shadow-lg transition-all hover:scale-105">
          <FiMail />
          Let's talk
        </button>

        {/* Latest Works Section */}
        <h2 className="mt-20 text-sm font-bold tracking-[0.3em]">
          MY LATEST WORKS
        </h2>

        {/* Project Description */}
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
          A lightweight web portal built with Vanilla JS and Firebase to help developers discover and join hackathons across India.
        </p>

        <div className="mt-8">
          
          <a 
            href="https://github.com/saurabhrai06/HackLink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <Image 
              src="/laptop.png" 
              alt="HackLink website project"
              width={800}
              height={500}
              className="rounded-xl mx-auto"
            />
          </a>
        </div>

        {/* Stats Grid */}
        <Stats />
      </div>
    </section>
  );
};

export default HeroSection;