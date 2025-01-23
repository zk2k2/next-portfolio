"use client";

import React, { useState } from "react";
import ExperienceCarousel from "./ExperienceCarousel/ExperienceCarousel";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import type { Experience } from "./ExperienceCarousel/ExperienceCarousel";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    triggerTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
      );
    });
  };

  const handleNext = () => {
    triggerTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
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

  const experiences: Experience[] = [
    {
      companyName: "Wecraft",
      position: "Backend Developer",
      workType: "Part-time (Remote)",
      description:
        "I built data models and secure REST APIs using Redis and MongoDB, wrote unit and integration tests, and set up a user administration API with Keycloak for authentication. I also migrated the codebase to Spring Boot 3, refactoring it according to the latest guidelines, and managed Docker containers for the frontend and Keycloak server.",
      startDate: "Nov. 2023",
      endDate: "present",
      companyLogo: "/images/wecraft.svg",
      companyWebsite: "https://wecraft.tn/",
      companyLinkedin: "https://tn.linkedin.com/company/wecraftn",
    },
    {
      companyName: "Hydatis",
      position: "Artificial Intelligence Developer",

      workType: "Internship (Hybrid)",
      description:
        "I applied NLP techniques to create word embeddings from emergency call transcripts and trained a BERT-based text classifier. I also implemented signal processing methods to extract features from audio data, which I used to train a Wav2Vec2-based classifier for distress detection in voice calls.",
      startDate: "Jul. 2024",
      endDate: "Sep. 2024",
      companyLogo: "/images/hydatis.svg",
      companyWebsite: "https://www.hydatis.com/",
      companyLinkedin: "https://fr.linkedin.com/company/hydatis",
    },
    {
      companyName: "Avidea",
      position: "Full Stack Developer",

      workType: "Internship (Hybrid)",
      description:
        "I collaborated within a SCRUM framework following Agile principles to streamline project management. I developed ERP features using Angular 16, Spring Boot 3, and PostgreSQL under a REST API architecture, and participated in the refactoring of the employee leave management system.",
      startDate: "Jul. 2023",
      endDate: "Sep. 2023",
      companyLogo: "/images/avidea.svg",
      companyWebsite: "https://www.avidea.tn/",
      companyLinkedin: "https://tn.linkedin.com/company/digiconstat",
    },
  ];

  const currentExperience = experiences[currentIndex];
  console.log(currentExperience);
  return (
    <div className="animate-fade-in-slide-bottom !overflow-clip w-full       lg:my-0    flex-col flex justify-center lg:space-x-0 xl:space-x-8 text-3xl ">
      {" "}
      <div className="flex justify-center space-x-6 ">
        <button className="mt-6" onClick={handlePrev}>
          <IoChevronBackSharp className="text-3xl text-light-blue   xl:hidden" />
        </button>
        <p className="  xl:px-[7rem]  xl:w-full lg:text-6xl mb-2  text-4xl xl:text-left text-center  mt-8  font-medium text-dark-blue">
          {" "}
          EXPERIENCE
        </p>
        <button className="mt-6" onClick={handleNext}>
          <IoChevronForwardSharp className="text-3xl self-center   text-light-blue xl:hidden" />
        </button>
      </div>
      <div className="  w-full px-4 !m-0  lg:my-0   lg:flex-row  flex-col flex justify-center lg:space-x-0 xl:space-x-4 text-3xl ">
        <button className="group" onClick={handlePrev}>
          <IoChevronBackSharp className="text-7xl text-light-blue xl:opacity-0 hidden xl:block  group-hover:opacity-50 lg:transition-opacity duration-300 ease-in-out" />
        </button>

        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } flex justify-center`}
        >
          <ExperienceCarousel experience={currentExperience} />
        </div>

        <button className=" group" onClick={handleNext}>
          <IoChevronForwardSharp className="text-7xl xl:opacity-0 text-light-blue hidden xl:block  group-hover:opacity-50 xl:transition-opacity duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default Experience;
