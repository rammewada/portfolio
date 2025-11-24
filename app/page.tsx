import React from "react";
import Hero from "./_home/hero";
import Experience from "./_home/experience";
import Projects from "./_home/projects";
import About from "./_home/about";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Experience />
      <Projects />
      <About />
    </main>
  );
}
