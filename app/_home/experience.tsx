import React from "react";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import BorderedButton from "@/components/borderedButton";
export default function Experience() {
  return (
    <section>
      <div className="h-screen w-container margin-top">
        <div>
          <p className="text-text text-sm">Featured</p>
          <h2 className="text-dark-1 text-2xl font-bold">Experience</h2>
        </div>
        <div className="mt-4 flex justify-between gap-x-10">
          <div className="flex gap-x-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center rounded-md">
              <Image
                src="https://www.blacksof.com/globals/logo.png"
                alt="Blacksof Logo"
                width={40}
                height={40}
                className="object-contain p-2"
              />
            </div>
            <div className="flex flex-col justify-center gap-">
              <div className="flex gap-x-2">
                <h3 className="text-lg text-dark-1 font-semibold leading-none">
                  Blacksof
                </h3>
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-text"
                    href="https://www.blacksof.com"
                    target="_blank"
                  >
                    <Tooltip>
                      <TooltipTrigger className="cursor-pointer hover:scale-110 h-fit  transition-transform duration-300">
                        <Icon width={18} icon="bitcoin-icons:globe-outline" />
                      </TooltipTrigger>
                      <TooltipContent>Visit Website</TooltipContent>
                    </Tooltip>
                  </Link>
                  <Link
                    className="text-text"
                    href="https://www.blacksof.com"
                    target="_blank"
                  >
                    <Tooltip>
                      <TooltipTrigger className="cursor-pointer hover:scale-110 h-fit  transition-transform duration-300">
                        <Icon width={18} icon="ri:linkedin-line" />
                      </TooltipTrigger>
                      <TooltipContent>Connect on LinkedIn</TooltipContent>
                    </Tooltip>
                  </Link>
                </div>
              </div>
              <p className="text-text text-sm">Frontend Engineer</p>
            </div>
          </div>
          <div className=" text-text text-right">
            <p className="">Novomber 2024 - Present</p>
            <p className="">Indore, India (On-Site)</p>
          </div>
        </div>
        <div>
          <h4 className="mt-6 font-medium text-dark-1">Technologies & Tools</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            <BorderedButton text="Next.js">
              <Icon icon="logos:nextjs-icon" />
            </BorderedButton>
            <BorderedButton text="TypeScript">
              <Icon icon="vscode-icons:file-type-typescript-official" />
            </BorderedButton>
            <BorderedButton text="Tailwind CSS">
              <Icon icon="devicon:tailwindcss" />
            </BorderedButton>
            <BorderedButton text="React">
              <Icon icon="vscode-icons:file-type-reactjs" />
            </BorderedButton>
            <BorderedButton text="JavaScript">
              <Icon icon="logos:javascript" />
            </BorderedButton>
            <BorderedButton text="Digital Ocean">
              <Icon icon="devicon:digitalocean" />
            </BorderedButton>
            <BorderedButton text="GSAP" textColor="text-green-400">
              <Icon icon="logos:greensock-icon" />
            </BorderedButton>
            <BorderedButton text="Postman">
              <Icon icon="logos:postman-icon" />
            </BorderedButton>
            <BorderedButton text="Figma">
              <Icon icon="logos:figma" />
            </BorderedButton>
            <BorderedButton text="Shadcn UI">
              <Icon icon="vscode-icons:file-type-shadcn" />
            </BorderedButton>
            <BorderedButton text="AWS">
              <Icon icon="skill-icons:aws-light" />
            </BorderedButton>
            <BorderedButton text="Vercel">
              <Icon icon="devicon:vercel" />
            </BorderedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
