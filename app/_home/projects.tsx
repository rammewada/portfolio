"use client";
import Image from "next/image";
import React from "react";

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const spotlight = e.currentTarget.querySelector(
      "div.absolute"
    ) as HTMLDivElement;
    if (spotlight) {
      spotlight.style.left = `${x - spotlight.offsetWidth / 2}px`;
      spotlight.style.top = `${y - spotlight.offsetHeight / 1.2}px`;
    }
  };

  return (
    <section>
      <div
        onMouseMove={handleMouseMove}
        className="pb-20 w-container margin-top"
      >
        <div>
          <p className="text-text text-sm">Featured</p>
          <h2 className="text-dark-1 text-2xl font-bold">Projects</h2>
        </div>
        <div>
          <div className="w-90 h-120 rounded-md p-px bg-dark-3  mt-4 relative overflow-hidden">
            <div className="absolute bg-radial from-accent via-transparent to-transparent w-90 h-90 rounded-full bottom-0 left-0"></div>
            <div className="w-full h-full backdrop-blur-xl bg-bg rounded-md">
              <div className="relative h-52 rounded-md overflow-hidden">
                <Image
                  src="/projects/home_og.png"
                  className="object-cover"
                  fill
                  alt="dejoule"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)
