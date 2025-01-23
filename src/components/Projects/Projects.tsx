"use client";

import React, { useState } from "react";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import type { Project } from "./ProjectCarousel/ProjectCarousel";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    triggerTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    });
  };

  const handleNext = () => {
    triggerTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    });
  };

  const triggerTransition = (updateIndex: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      updateIndex();
      setIsTransitioning(false);
    }, 300);
  };

  const projects: Project[] = [
    {
      title: "EduBox",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum vitae ipsum at congue. Sed vestibulum tellus ac sapien pharetra, quis blandit quam pharetra. Morbi hendrerit tortor in dui euismod, sit amet condimentum tortor imperdiet. Sed eget quam odio.",
      startDate: "Mar. 2024",
      endDate: "Jun. 2024",
      demo: "/videos/edubox-demo.mp4",
      sourceCode: "https://github.com/zk2k2/edubox",
    },
  ];

  const currentProject = projects[currentIndex];
  console.log(currentProject);
  return (
    <div className="animate-fade-in-slide-bottom !overflow-clip w-full   lg:my-0    flex-col flex justify-center lg:space-x-0 xl:space-x-8 text-3xl ">
      {" "}
      <div className="flex justify-center space-x-6 ">
        <button
          className={`mt-6 ${
            projects.length <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={projects.length <= 1}
        >
          <IoChevronBackSharp className="text-3xl text-light-blue xl:hidden" />
        </button>

        <p className="  xl:px-[7rem]  xl:w-full lg:text-6xl mb-2  text-4xl xl:text-left text-center  mt-8  font-medium text-dark-blue">
          {" "}
          PROJECTS
        </p>
        <button
          className={`mt-6 ${
            projects.length <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={projects.length <= 1}
        >
          <IoChevronForwardSharp className="text-3xl self-center   text-light-blue xl:hidden" />
        </button>
      </div>
      <div className="  w-full px-4 !m-0  lg:my-0   lg:flex-row  flex-col flex justify-center lg:space-x-0 xl:space-x-4 text-3xl ">
        <button
          className={`mt-6 ${projects.length <= 1 ? "opacity-0" : "group"}`}
          onClick={handlePrev}
          disabled={projects.length <= 1}
        >
          <IoChevronBackSharp className="text-7xl text-light-blue xl:opacity-0 hidden xl:block  group-hover:opacity-50 lg:transition-opacity duration-300 ease-in-out" />
        </button>

        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } flex justify-center`}
        >
          <ProjectCarousel project={currentProject} />
        </div>

        <button
          className={`mt-6 ${projects.length <= 1 ? "opacity-0" : "group"}`}
          onClick={handleNext}
          disabled={projects.length <= 1}
        >
          <IoChevronForwardSharp className="text-7xl xl:opacity-0 text-light-blue hidden xl:block  group-hover:opacity-50 xl:transition-opacity duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default Project;
