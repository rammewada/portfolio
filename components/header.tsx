import Link from "next/link";
import React from "react";
type SectionType = {
  name: string;
  href: string;
};
export default function Header() {
  const sections: SectionType[] = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="fixed top-0 w-full bg-bg/50   backdrop-blur-xl z-999">
      <div className="w-full w-container  mx-auto flex justify-between bg-transparent py-3">
        <div className="flex items-center relative top-1">
          <Link
            href="#hero"
            className="relative inline-block font-signature text-accent text-2xl font-medium  after:absolute after:left-0 after:h-px after:w-0 after:bottom-2 after:bg-accent hover:after:w-full after:transition-all after:duration-600"
          >
            Ram Mewad
          </Link>
        </div>
        <div className=" flex items-center gap-x-10 ">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="text-text hover:text-accent text-sm relative   after:absolute after:left-0 after:h-px after:w-0 after:-bottom-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-400 transition-all duration-300"
            >
              {section.name}
            </Link>
          ))}

          {/* <button className="h-full text-accent border border-accent text-sm px-4 py-2 rounded-sm hover:bg-accent-light hover:border-accent-torch transition-all duration-300 cursor-pointer">
            Resume
          </button> */}
        </div>
      </div>
    </nav>
  );
}
