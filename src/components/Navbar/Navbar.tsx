import React from "react";
import {
  IoPersonOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoMailOutline,
  IoFolderOutline,
} from "react-icons/io5";

interface NavbarProps {
  setActiveSection: (section: string) => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection, className }) => {
  return (
    <nav
      className={`xl:!h-full xl:min-w-16 min-h-16 h-16 !xl:w-96 order-last xl:order-first sticky bottom-0 space-4 bg-dark-blue flex justify-around items-center xl:flex-col xl:justify-center xl:space-y-16 ${className} animate-fade-in-slide-left`}
    >
      <button
        onClick={() => setActiveSection("about")}
        className="text-white lg:text-3xl text-2xl hover:text-light-blue transition-colors duration-300 ease-in-out"
      >
        <IoPersonOutline />
      </button>
      <button
        onClick={() => setActiveSection("education")}
        className="text-white lg:text-3xl text-2xl hover:text-light-blue transition-colors duration-300 ease-in-out"
      >
        <IoSchoolOutline />
      </button>
      <button
        onClick={() => setActiveSection("experience")}
        className="text-white lg:text-3xl text-2xl hover:text-light-blue transition-colors duration-300 ease-in-out"
      >
        <IoBriefcaseOutline />
      </button>
      <button
        onClick={() => setActiveSection("skills")}
        className="text-white lg:text-3xl text-2xl hover:text-light-blue transition-colors duration-300 ease-in-out"
      >
        <IoCodeSlashOutline />
      </button>
      <button
        onClick={() => setActiveSection("projects")}
        className="text-white lg:text-3xl text-2xl hover:text-light-blue transition-colors duration-300 ease-in-out"
      >
        <IoFolderOutline />
      </button>

      <button
        onClick={() => setActiveSection("contact")}
        className="text-white lg:text-3xl text-2xl hover:text-light-blue transition-colors duration-300 ease-in-out"
      >
        <IoMailOutline />
      </button>
    </nav>
  );
};

export default Navbar;
