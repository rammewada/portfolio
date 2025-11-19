import React from "react";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Experience() {
  return (
    <section>
      <div className="h-screen w-container margin-top">
        <div>
          <p className="text-text text-sm">Featured</p>
          <h2 className="text-dark-1 text-2xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 flex gap-x-4">
          <div className="w-12 h-12 bg-black flex items-center justify-center rounded-md">
            <Image
              src="https://www.blacksof.com/globals/logo.png"
              alt="Blacksof Logo"
              width={40}
              height={40}
              className="object-contain p-2"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
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
                  <Icon width={20} icon="bitcoin-icons:globe-outline" />
                </Link>
                <Link
                  className="text-text"
                  href="https://www.blacksof.com"
                  target="_blank"
                >
                  <Icon width={20} icon="ri:linkedin-line" />
                </Link>
              </div>
            </div>
            <p className="text-text text-sm">Frontend Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
