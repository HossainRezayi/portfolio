import React from "react";

const Projects = () => {
  return (
    <div className="m-20">
      <h1 className="text-5xl text-center mb-10">Project</h1>
      <h2 className="text-3xl mb-8 text-blue-600">What I built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-self-center ">
        <div className="project rounded-md pb-8">
          <img src="/assets/omnifood.png" />
          <h3 className="p-6 text-2xl">Omnifood</h3>
          <p className="px-[20px] pb-[20px] mt-[-10px] text-base">
            Welcome to Omnifood, a responsive website built using HTML, CSS, and
            JavaScript
          </p>
          <a
            href="https://github.com/HossainRezayi/omnifood"
            className="p-2 bg-blue-500 rounded-md text-sm ml-5 text-white"
          >
            Read More
          </a>
        </div>
        <div className="project rounded-md">
          <img src="/assets/natours.png" />
          <h3 className="p-6 text-2xl">Natours</h3>
          <p className="px-[20px] pb-[20px] mt-[-10px] text-base">
            An advanced CSS features & Sass project. Learning project from Udemy
            course by Jonas Schmedtmann
          </p>
          <a
            href="https://github.com/HossainRezayi/css-advance-projects/tree/main/Natours"
            className="p-2 bg-blue-500 rounded-md text-sm ml-5 text-white"
          >
            Read More
          </a>
        </div>
        <div className="project rounded-md pb-8">
          <img src="/assets/trillo.png" />
          <h3 className="p-5 text-2xl">Trillo</h3>
          <p className="px-[20px] pb-[20px] mt-[-10px] text-base">
            In this project I learned the flexbox technique. Entire project was
            coded using flexbox technique
          </p>
          <a
            href="https://github.com/HossainRezayi/css-advance-projects/tree/main/Trillo"
            className="p-2 bg-blue-500 rounded-md text-sm ml-5 text-white"
          >
            Read More
          </a>
        </div>
        <div className="project rounded-md pb-8">
          <img src="/assets/nexter.png" />
          <h3 className="p-6 text-2xl">Nexter</h3>
          <p className="px-[20px] pb-[20px] mt-[-10px] text-base">
            This repo consists of my code for Nexter Project, which I made as a
            part of my course, Advanced CSS & Sass
          </p>
          <a
            href="https://github.com/HossainRezayi/css-advance-projects/tree/main/Nexter"
            className="p-2 bg-blue-500 rounded-md text-sm ml-5 text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
