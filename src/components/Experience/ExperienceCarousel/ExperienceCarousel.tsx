import React from "react";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";

export interface ExperienceCarouselProps {
  experience: Experience;
}

export type Experience = {
  companyName: string;
  position: string;
  workType: string;
  description: string;
  startDate: string;
  endDate: string;
  companyLogo: string;
  companyWebsite: string;
  companyLinkedin: string;
};

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({
  experience,
}) => {
  return (
    <div
      key={experience.companyName}
      className=" !w-full      lg:mx-10 px-5 lg:px-0 lg:mt-12 lg:my-0 transition-opacity duration-500 ease-in-out opacity-100   lg:flex-row  flex-col flex justify-center  lg:space-x-0 xl:space-x-32 text-3xl "
    >
      <div
        key={experience.companyName}
        className="flex text-container  xl:min-w-[50%] transition-opacity duration-500 ease-in-out opacity-100 justify-center flex-col   "
      >
        <p className="text-light-blue my-4 lg:mt-2 font-medium px-4 md:px-0 lg:text-left text-center  !text-[1.75rem]  lg:text-2xl">
          <span>{experience.position}</span> @{experience.companyName}
        </p>
        <p className="text-black  mt-2 font-medium px-4 md:px-0 lg:text-left text-center  text-xl  lg:text-2xl">
          {experience.startDate} - {experience.endDate}, {experience.workType}
        </p>

        <div className="   flex  justify-center">
          <p className="text-black xl:min-w-[40rem]   lg:text-xl text-lg md:px-0 px-3 xl:text-2xl  lg:text-left text-center my-6 ">
            {experience.description}
          </p>
        </div>
        <div className=" self-center   lg:mx-0 lg:mb-3  justify-center lg:justify-normal flex mx-12 lg:my-0 my-8  w-full space-x-4">
          <button
            onClick={() => window.open(experience.companyWebsite, "_blank")}
            className="rounded-full hover:bg-dark-blue font-medium px-7 py-2 text-xl bg-light-blue transition-colors duration-300 ease-in-out"
          >
            About {experience.companyName}
          </button>

          <button
            onClick={() => window.open(experience.companyLinkedin, "_blank")}
            className=" text-light-blue rounded-lg text-5xl hover:text-dark-blue transition-colors duration-300 ease-in-out "
          >
            <IoLogoLinkedin />
          </button>
        </div>
      </div>
      <div className=" !order-2 order     mx-3 xl:mx-10  flex flex-col   justify-center lg:my-0 my-6 ">
        <Image
          src={experience.companyLogo}
          className="   shimmer-effect xl:min-w-[426px]   lg:min-w-[250px] lg:min-h-[176px] place-self-center md:min-w-[213px] md:min-h-[200px]  rounded-full"
          alt="company logo"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ExperienceCarousel;
