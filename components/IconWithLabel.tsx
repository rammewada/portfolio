import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

const icons = {
  nextjs: {
    icon: "logos:nextjs-icon",
    label: "Next.JS",
    link: "https://nextjs.org/",
  },
  react: { icon: "logos:react", label: "React", link: "https://reactjs.org/" },
  typescript: {
    icon: "vscode-icons:file-type-typescript-official",
    label: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  javascript: {
    icon: "logos:javascript",
    label: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  tailwindcss: {
    icon: "devicon:tailwindcss",
    label: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  "digital-ocean": {
    icon: "devicon:digitalocean",
    label: "Digital Ocean",
    link: "https://www.digitalocean.com/",
  },
  aws: {
    icon: "skill-icons:aws-light",
    label: "AWS",
    link: "https://aws.amazon.com/",
  },
  vercel: {
    icon: "devicon:vercel",
    label: "Vercel",
    link: "https://vercel.com/",
  },
  gsap: {
    icon: "logos:greensock-icon",
    label: "GSAP",
    link: "https://greensock.com/",
  },
  shadcn: {
    icon: "vscode-icons:file-type-shadcn",
    label: "Shadcn UI",
    link: "https://shadcn.com/",
  },
  nodejs: {
    icon: "devicon:nodejs",
    label: "Node.js",
    link: "https://nodejs.org/",
  },
  express: {
    icon: "skill-icons:expressjs-dark",
    label: "Express.js",
    link: "https://expressjs.com/",
  },
  monogodb: {
    icon: "devicon:mongodb",
    label: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  prisma: {
    icon: "file-icons:prisma",
    label: "Prisma",
    link: "https://www.prisma.io/",
  },
  supabase: {
    icon: "devicon:supabase",
    label: "Supabase",
    link: "https://supabase.com/",
  },
  postman: {
    icon: "logos:postman-icon",
    label: "Postman",
    link: "https://www.postman.com/",
  },
  figma: {
    icon: "logos:figma",
    label: "Figma",
    link: "https://www.figma.com/",
  },
  pug: {
    icon: "devicon:pug",
    label: "Pug",
    link: "https://pugjs.org/api/getting-started.html",
  },
  "c++": {
    icon: "devicon:cplusplus",
    label: "C++",
    link: "https://isocpp.org/",
  },
  git: {
    icon: "material-icon-theme:git",
    label: "Git",
    link: "https://git-scm.com/",
  },
} as const;

export const IconWIthLabel = ({
  icon,
  width = 25,
  label,
  className,
  link = false,
  target = "_blank",
}: {
  icon: keyof typeof icons;
  width?: number;
  label?: string;
  className?: string;
  link?: boolean;
  target?: "_blank" | "_self";
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        {link ? (
          <Link href={icons[icon].link} target={target}>
            <Icon
              width={width}
              className={cn(
                "hover:scale-110 transition-transform duration-300",
                className
              )}
              icon={icons[icon].icon}
            />
          </Link>
        ) : (
          <Icon
            width={width}
            className={cn(
              "hover:scale-110 transition-transform duration-300",
              className
            )}
            icon={icons[icon].icon}
          />
        )}
        <TooltipContent>{label ? label : icons[icon].label}</TooltipContent>
      </TooltipTrigger>
    </Tooltip>
  );
};
