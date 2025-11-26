import { IconWIthLabel } from "@/components/IconWithLabel";
import { Icon } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="pb-20 w-container margin-top">
        <div>
          <p className="text-text text-sm">Featured</p>
          <h2 className="text-dark-1 text-2xl font-bold">Me</h2>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-6 mt-4 ">
          <div className="rounded-md  overflow-hidden  w-50 h-50 border-2 border-dark-2">
            <Image
              src="https://avatars.githubusercontent.com/u/86887086?v=4/"
              alt="Ram Avatar"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-dark-1">
                Sitaram Mewada
              </h3>
              <p className="text-text mt-2">
                Developer specializing in React and Next.js, building responsive
                applications with clean, modern interfaces. Passionate about
                crafting visually appealing experiences that balance
                functionality with exceptional design.
              </p>
            </div>
            <div className="mt-auto">
              <h4 className="text-dark-2 font-semibold">Skills</h4>
              <div className="flex gap-3 mt-2">
                <IconWIthLabel icon="nextjs" />
                <IconWIthLabel icon="typescript" />
                <IconWIthLabel icon="react" />
                <IconWIthLabel icon="javascript" />
                <IconWIthLabel icon="tailwindcss" />
                <IconWIthLabel icon="nodejs" />
                <IconWIthLabel icon="express" />
                <IconWIthLabel icon="monogodb" />
                <IconWIthLabel icon="supabase" />
                <IconWIthLabel icon="digital-ocean" />
                <IconWIthLabel icon="vercel" />
                <IconWIthLabel icon="pug" link />
                <IconWIthLabel icon="c++" link />
                <IconWIthLabel icon="git" link />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
