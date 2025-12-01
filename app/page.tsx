import React from "react";
import Hero from "./_home/hero";
import Experience from "./_home/experience";
import Projects from "./_home/projects";
import About from "./_home/about";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <div className="h-10  w-full fixed z-10 bottom-0 left-0   bg-linear-0 from-bg via-bg/40 to-transparent "></div>
    </main>
  );
}
