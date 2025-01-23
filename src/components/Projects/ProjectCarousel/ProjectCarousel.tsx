import React from "react";
import { IoLogoGithub } from "react-icons/io5";

export interface ProjectCarouselProps {
  project: Project;
}

export type Project = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  demo: string;
  sourceCode: string;
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ project }) => {
  return (
    <div
      key={project.title}
      className=" !w-full     lg:mx-10 px-5 lg:px-0 lg:mt-12 lg:my-0 transition-opacity duration-500 ease-in-out opacity-100   lg:flex-row  flex-col flex justify-center  lg:space-x-8 xl:space-x-24 text-3xl "
    >
      <div
        key={project.title}
        className="flex text-container md:self-center lg:self-auto  md:max-w-[60%] transition-opacity duration-500 ease-in-out opacity-100 justify-center flex-col   "
      >
        <p className="text-light-blue my-4 lg:mt-2 font-medium px-4 md:px-0 lg:text-left text-center  !text-[1.75rem]  lg:text-2xl">
          {project.title}
        </p>
        <p className="text-black  mt-2 font-medium px-4 md:px-0 lg:text-left text-center  text-xl  lg:text-2xl">
          {project.startDate} - {project.endDate}
        </p>

        <div className="   flex  justify-center">
          <p className="text-black xl:min-w-[40rem]   lg:text-xl text-lg md:px-0 px-3 xl:text-2xl  lg:text-left text-center my-6 ">
            {project.description}
          </p>
        </div>
        <div className=" self-center   lg:mx-0 lg:mb-3  justify-center lg:justify-normal flex mx-12 lg:my-0 my-8  w-full space-x-4">
          <button
            onClick={() => window.open(project.sourceCode, "_blank")}
            className="rounded-full self-center py-3 flex justify-center hover:bg-dark-blue font-medium px-7 text-xl bg-light-blue transition-colors duration-300 ease-in-out"
          >
            <IoLogoGithub className="text-[1.75rem] mx-2 " />
            GitHub repo
          </button>
        </div>
      </div>
      <div className=" !order-2 order      mx-3 xl:mx-10  flex flex-col   justify-center lg:my-0 my-6 ">
        <video
          src={project.demo}
          controls
          muted
          loop
          autoPlay
          width={960}
          height={516}
        ></video>
      </div>
    </div>
  );
};

export default ProjectCarousel;
