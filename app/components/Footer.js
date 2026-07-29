import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0f0f0f]">
        <div className="lg:container lg:max-w-[1248px] m-auto lg:px-0 md:px-6 px-4 py-15 border-t border-[#FFFFFF1F]">
          <div className="flex flex-col justify-center items-center">
            <span>
              <Image
                src="/logo/Elevat8-WhiteLogo.png"
                alt="logo-footer"
                width={190}
                height={60}
              />
            </span>
            <p className="text-sm lg:text-base text-[#b8b8b8] text-center mt-5 mb-14 max-w-[600px] mx-auto">
              A performance studio for those who demand more. Redefine your
              limits with elite coaching, premium facilities, and a community
              built around excellence.
            </p>
            <p className="text-sm text-[#ffffff50] ">
              © 2024 ELEVAT8. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
