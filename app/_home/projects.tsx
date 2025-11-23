"use client";
import BorderedButton from "@/components/borderedButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";

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
      <div className="pb-20 w-container margin-top">
        <div>
          <p className="text-text text-sm">Featured</p>
          <h2 className="text-dark-1 text-2xl font-bold">Projects</h2>
        </div>
        <div>
          <div
            onMouseMove={handleMouseMove}
            className="w-90 h-120 rounded-md p-px bg-dark-3  mt-4 relative overflow-hidden"
          >
            <div className="absolute bg-radial from-accent via-transparent  to-transparent w-60 h-60  rounded-full  bottom-0  left-0"></div>
            <div className="w-full h-full backdrop-blur-2xl bg-bg/95 rounded-md">
              <div className="relative h-52 rounded-t-md overflow-hidden">
                <Image
                  src="/projects/home_og.png"
                  className="object-cover"
                  fill
                  alt="dejoule"
                />
              </div>

              <div className="p-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className=" text-xl font-medium text-orange-600">
                      DeJoule
                    </h3>
                    <div>
                      <Tooltip>
                        <TooltipTrigger className="cursor-pointer hover:scale-110 text-text h-fit  transition-transform duration-300">
                          <Icon width={25} icon="bitcoin-icons:globe-outline" />
                        </TooltipTrigger>
                        <TooltipContent>Live Preview</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  <p className="mt-2 text-text text-sm">
                    A Building Management System company offering CPO chiller
                    plant optimization, full-stack building management hardware,
                    and a unified monitoring dashboard.
                  </p>
                  <div className="mt-8">
                    <h4 className="text-text font-mono">Technologies</h4>
                    <div className="flex gap-3 mt-2">
                      <Tooltip>
                        <TooltipTrigger>
                          <Icon
                            width={25}
                            className="hover:scale-110 transition-transform duration-300"
                            icon="logos:nextjs-icon"
                          />
                          <TooltipContent>Nect.JS</TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>

                      <Icon
                        width={25}
                        className="hover:scale-110 transition-transform duration-300"
                        icon="vscode-icons:file-type-typescript-official"
                      />

                      <Icon
                        width={25}
                        className="hover:scale-110 transition-transform duration-300"
                        icon="devicon:tailwindcss"
                      />

                      <Icon
                        width={25}
                        className="hover:scale-110 transition-transform duration-300"
                        icon="devicon:digitalocean"
                      />

                      <Icon
                        width={25}
                        className="hover:scale-110 transition-transform duration-300"
                        icon="logos:greensock-icon"
                      />

                      <Icon
                        width={25}
                        className="hover:scale-110 transition-transform duration-300"
                        icon="vscode-icons:file-type-shadcn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)
