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
      <div className="w-container margin-top">
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
            <p className="">November 2024 - Present</p>
            <p className="">Indore, India (On-Site)</p>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-medium text-dark-1">Technologies & Tools</h4>
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
        <div className="mt-6">
          <h4 className="font-medium text-dark-1">Key Contributions</h4>
          <ul className="mt-2 text-text list-disc list-outside space-y-1 pl-3">
            <li>
              High-Volume Delivery - Successfully delivered 9+ production
              websites using Next.js, React, and TypeScript
            </li>
            <li>
              Performance & SEO Optimization - Improved website performance
              through code optimization, lazy loading, and SEO best practices
            </li>
            <li>
              Admin Dashboard Development - Built secure admin panels with
              NextAuth authentication and role-based access control
            </li>
            <li>
              State Management - Implemented Redux for global state and React
              Query for efficient server data fetching and caching
            </li>
            <li>
              UI/UX Excellence - Crafted pixel-perfect, responsive interfaces
              using Tailwind CSS with smooth GSAP animations
            </li>
            <li>
              Code Quality - Refactored and optimized codebases for better
              maintainability and reduced load times
            </li>
            <li>
              Technical Stack Mastery - Gained expertise in Next.js, TypeScript,
              Tailwind CSS, Redux, React Query, and NextAuth
            </li>
          </ul>
        </div>
        <div className="mt-6 border bg-chart-2/10 border-chart-2 rounded-md p-6">
          <h4 className="font-medium text-chart-2 text-lg">Key Learning</h4>
          <ul className="mt-2  text-chart-2 list-disc list-outside space-y-1 pl-3 ">
            <li>
              Next.js & TypeScript - Mastered modern React framework with
              type-safe development
            </li>
            <li>
              Data Fetching Patterns - React Query for server state and Redux
              for client state management
            </li>
            <li>
              Performance Optimization - Code splitting, image optimization, and
              Core Web Vitals improvements
            </li>
            <li>
              Authentication - Secure user authentication and authorization with
              NextAuth
            </li>
            <li>
              Responsive Design - Advanced Tailwind CSS techniques for
              mobile-first development
            </li>
            <li>Animation - Creating engaging user experiences with GSAP</li>
            <li>
              SEO Best Practices - Meta tags, structured data, and technical SEO
              implementation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
