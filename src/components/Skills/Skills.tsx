"use client";

import React from "react";
import { IoDesktopOutline, IoFlask, IoInfinite } from "react-icons/io5";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full animate-fade-in-slide-bottom !overflow-clip lg:my-0 flex-col flex justify-center lg:space-x-0 xl:space-x-8 text-3xl">
      <div className="flex justify-center space-x-6">
        <p className="xl:px-[7rem] xl:w-full lg:text-6xl mb-2 text-4xl xl:text-left text-center mt-8 font-medium text-dark-blue">
          SKILLS
        </p>
      </div>
      <div className="w-full px-4 my-8 space-y-10 xl:space-y-0 lg:flex-row flex-col flex justify-center lg:space-x-0 xl:space-x-4 text-3xl">
        <div className="flex flex-col space-y-7 justify-center px-8 min-h-32 rounded-3xl max-w-[30rem]">
          <p className="text-light-blue text-4xl text-center py-3">
            WEB DEVELOPMENT
          </p>
          <IoDesktopOutline className="text-7xl self-center text-light-blue" />
          <p className="text-xl text-black text-center">
            I have experience in frontend (Angular, React, Tailwind, Next.js),
            backend (Spring Boot, Node.js), and databases (MongoDB, MySQL,
            PostgreSQL).
          </p>
        </div>

        <div className="flex flex-col space-y-7 justify-center px-8 min-h-32 rounded-3xl max-w-[30rem]">
          <p className="text-light-blue text-4xl text-center py-3">
            AI DEVELOPMENT
          </p>
          <IoFlask className="text-7xl self-center text-light-blue" />
          <p className="text-xl text-black text-center">
            I have experience developing AI models using TensorFlow and PyTorch,
            along with various Python libraries such as NumPy, Pandas,
            Matplotlib, and Scikit-learn.
          </p>
        </div>

        <div className="flex flex-col space-y-7 justify-center px-8 min-h-32 rounded-3xl max-w-[30rem]">
          <p className="text-light-blue text-4xl text-center py-3">
            CLOUD & DEVOPS
          </p>
          <IoInfinite className="text-7xl self-center text-light-blue" />
          <p className="text-xl text-black text-center">
            I have obtained the Azure Fundamentals certification and have
            hands-on experience with working on deployment environments and
            knowledge of DevOps practices.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-5 w-full">
        <Image
          src="/images/az-900.png"
          className="shimmer-effect"
          alt="AZ-900 logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Skills;
