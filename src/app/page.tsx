"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const renderComponent = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="h-full w-full xl:flex-row lg:my-0 overflow-clip flex flex-col bg-white">
      <Navbar setActiveSection={setActiveSection} />
      <div className="flex flex-col w-full h-full xl:overflow-clip justify-center fade-transition">
        {renderComponent()}
      </div>
    </div>
  );
}
