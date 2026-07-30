import Image from "next/image";
import React from "react";

export default function CoachingSection() {
  return (
    <section className="relative lg:min-h-[750px] bg-[#0F0F0F] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/bg-images/coaching-img.png" // Fallback image while video loads
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
      >
        <source src="/videos/floor-coaching.mp4" type="video/mp4" />
        {/* Optional webm format for better compression/performance */}
        {/* <source src="/videos/coaching-bg.webm" type="video/webm" /> */}
      </video>

      {/* Dark Overlay (Optional - ensures text contrast) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 lg:max-w-[1248px] lg:mx-auto h-full py-14 md:py-20 lg:py-40 lg:px-0 md:px-6 px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
              Coaching
            </p>
          </div>
          <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl mb-4">
            COACHING
            <br /> THAT DRIVES
            <br /> <span className="text-[#D7FF3F]">RESULTS.</span>
          </h3>

          <p className="text-[#b8b8b8] text-sm lg:text-base max-w-[450px]">
            Our coaching team combines expertise in strength training,
            performance coaching and body transformation to help members achieve
            measurable progress.
            <br />
            <br />
            Every programme is built around structure, accountability and
            long-term progression.
          </p>
        </div>
      </div>
    </section>
    // <section className="lg:min-h-[750px] bg-[#0F0F0F] bg-[url(/bg-images/coaching-img.png)] bg-no-repeat bg-cover bg-position-[center_20%]">
    //   <div className="lg:max-w-[1248px] lg:mx-auto h-full py-10 md:py-14 lg:py-20 lg:px-0 md:px-6 px-4">
    //     <div className="flex flex-col justify-center h-full">
    //       <div className="flex items-center gap-3 mb-3">
    //         <span className="hero-eyebrow-line"></span>
    //         <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
    //           Coaching
    //         </p>
    //       </div>
    //       <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl mb-4">
    //         COACHING
    //         <br /> THAT DRIVES
    //         <br /> <span className="text-[#D7FF3F]">RESULTS.</span>
    //       </h3>

    //       <p className="text-[#b8b8b8] text-sm lg:text-base  max-w-[400px]">
    //         Our coaching team combines expertise in strength training,
    //         performance coaching and body transformation to help members achieve
    //         measurable progress.
    //         <br />
    //         <br />
    //         Every programme is built around structure, accountability and
    //         long-term progression.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}
