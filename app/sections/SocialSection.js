import React from "react";

export default function SocialSection() {
  return (
    <>
      <section className="lg:max-w-[1248px] lg:mx-auto pt-10 pb-10 md:pb-14 lg:pb-40 lg:px-0 md:px-6 px-4">
        <div className="flex flex-wrap md:flex-nowrap gap-y-8 md:gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto ">
            <p className="text-[#D7FF3F] text-3xl lg:text-4xltext-4xl font-bebas-neue">
              6,000+
            </p>
            <span className="text-[#b8b8b8] font-medium text-xs lg:text-sm tracking-widest">
              Members Trained
            </span>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#ffffff14]"></div>

          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto ">
            <p className="text-[#D7FF3F] text-3xl lg:text-4xltext-4xl font-bebas-neue">
              96%
            </p>
            <span className="text-[#b8b8b8] font-medium text-xs lg:text-sm tracking-widest">
              Member Retention
            </span>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#ffffff14]"></div>

          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto ">
            <p className="text-[#D7FF3F] text-3xl lg:text-4xltext-4xl font-bebas-neue">
              40+
            </p>
            <span className="text-[#b8b8b8] font-medium text-xs lg:text-sm tracking-widest">
              Weekly Classes
            </span>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#ffffff14]"></div>
          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto ">
            <p className="text-[#D7FF3F] text-3xl lg:text-4xltext-4xl font-bebas-neue">
              4.9★
            </p>
            <span className="text-[#b8b8b8] font-medium text-xs lg:text-sm tracking-widest">
              Average Rating
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
