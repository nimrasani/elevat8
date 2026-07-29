/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <main className={"bg-transparent absolute top-0 w-full z-20"}>
      <div
        className={
          "lg:container lg:max-w-[1248px] lg:m-auto lg:px-0 md:px-6 px-4 "
        }
      >
        <nav className="flex justify-between items-center h-[5.2rem]">
          <a href="/">
            <Image
              src="/logo/Elevat8-WhiteLogo.png"
              alt="logo"
              width={100}
              height={32}
              priority
            />
          </a>

          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="inline-flex justify-center items-center cursor-pointer uppercase rounded-sm py-2.5 px-4 
              text-btn font-semibold tracking-widest bg-[#d7ff3f]  text-[#0f0f0f] 
              ease-in-out duration-300 transition-all
              hover:scale-105 focus:scale-105 active:scale-95"
            >
              Join Now
            </a>
          </div>
        </nav>
      </div>
    </main>
  );
}
