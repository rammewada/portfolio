import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { BookText, Send } from "lucide-react";
import BorderedButton from "@/components/borderedButton";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SocialLinkType = {
  name: string;
  href: string;
  icon: ReactNode;
};
export default function Hero() {
  return (
    <section className=" ">
      <div className="w-container pt-25">
        <div>
          <p className="text-text font-mono">Hi, I'm Ram</p>
          <h1 className="text-text tracking-tight leading-21 md:text-7xl mt-2 font-bold ">
            <span className="text-dark-1"> Frontend react dev </span>
            <br /> with an eye for design.
          </h1>
          <p className="text-text mt-6 max-w-xl leading-8">
            Frontend developer experienced in{" "}
            <BorderedButton text="Typescript">
              <Icon icon="vscode-icons:file-type-typescript-official" />
            </BorderedButton>{" "}
            ,{" "}
            <BorderedButton text="React">
              <Icon icon="vscode-icons:file-type-reactjs" />
            </BorderedButton>{" "}
            ,{" "}
            <BorderedButton text="Next">
              <Icon icon="logos:nextjs-icon" />
            </BorderedButton>{" "}
            and{" "}
            <BorderedButton text="Tailwind CSS">
              <Icon icon="devicon:tailwindcss" />
            </BorderedButton>{" "}
            . I specialize in crafting interactive web applications with
            exceptional <span className="text-dark-1 font-bold">UI</span>{" "}
            design, and I'm passionate about creating smooth, engaging
            animations with{" "}
            <BorderedButton text="GSAP" textColor="text-green-400">
              <Icon icon="logos:greensock-icon" />
            </BorderedButton>{" "}
            .
          </p>
        </div>
        <div className="mt-8 flex gap-x-4">
          <button className="text-dark-1 group  text-sm border-dark-3 border px-3 py-2 rounded-md flex items-center gap-2 shadow-[inset_0px_0px_3px_1px_var(--color-dark-3)] hover:bg-dark-3 transition-colors duration-300 cursor-pointer">
            <BookText
              className="w-4 h-4 rotate-15 inline-block group-hover:rotate-0 transition-transform duration-300"
              strokeWidth="1.5"
            />
            <span className="inline-block font-medium">Resume / CV</span>
          </button>
          <button className="text-bg bg-dark-1 text-sm group px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer">
            <Send
              className="w-4 h-4  inline-block group-hover:rotate-10 transition-transform duration-300"
              strokeWidth="1.5"
            />
            <span className="inline-block">Get in touch</span>
          </button>
        </div>
        <div className="mt-8 flex  items-center  gap-x-3">
          {SocialLink.map((link) => (
            <div key={link.name} className="inline-block ">
              <Link
                className="text-text  transition cursor-pointer inline-block "
                href={link.href}
                aria-label={link.name}
                target="_blank"
              >
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer hover:scale-110 h-fit  transition-transform duration-300">
                    {link.icon}
                  </TooltipTrigger>
                  <TooltipContent>{link.name}</TooltipContent>
                </Tooltip>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SocialLink: SocialLinkType[] = [
  {
    name: "Github",
    href: "",
    icon: <Icon width={26} icon="ph:github-logo-light" />,
  },
  {
    name: "LeetCode",
    href: "",
    icon: <Icon width={26} icon="tabler:brand-leetcode" />,
  },
  {
    name: "LinkedIn",
    href: "",
    icon: <Icon width={26} icon="ri:linkedin-line" />,
  },

  {
    name: "X (Twitter)",
    href: "",
    icon: <Icon width={26} icon="codicon:twitter" />,
  },
  {
    name: "Gmail",
    href: "",
    icon: <Icon width={26} icon="weui:email-outlined" />,
  },
];
