import React from "react";

export default function TestimonialSection() {
  return (
    <>
      <section>
        <div className="lg:container lg:max-w-[1248px] m-auto pt-10 md:pt-14 lg:pt-40 lg:px-0 md:px-6 px-4 border-b border-[#ffffff14]">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
              MEMBER STORIES
            </p>
            <span className="hero-eyebrow-line"></span>
          </div>

          <h3 className="font-bebas-neue text-center text-4xl md:text-5xl lg:text-6xl">
            REAL PEOPLE.
            <br />
            REAL RESULTS.
          </h3>

          <p className="text-[#b8b8b8] text-sm lg:text-base text-center my-4">
            Over 500 elite members trust ELEVAT8 to help them reach peak
            performance{" "}
          </p>

          {/* Cards with secondary bg */}
          <div className="flex flex-col md:flex-row gap-3 w-full py-10">
            <div className="flex flex-col items-center md:items-start justify-between rounded-sm bg-[#1e1e1e] w-full p-5 lg:p-7">
              <p className="text-white text-sm lg:text-base text-center md:text-start mb-4">
                &quot;By far the best gym environment I’ve trained in.
                Everything feels premium and motivating.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-8 h-8 lg:w-11 lg:h-11 bg-[#D7FF3F] rounded-full">
                  <span className="text-[#0f0f0f] text-sm md:text-lg font-bebas-neue font-semibold">
                    MR
                  </span>
                </div>
                <div>
                  <h5 className="text-white font-bebas-neue text-base lg:text-xl">
                    Michael R.
                  </h5>
                  <p className="text-[#b8b8b8] text-xs">Member for 18 months</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start justify-between rounded-sm bg-[#1e1e1e] w-full p-5 lg:p-7">
              <p className="text-white text-sm lg:text-base text-center md:text-start mb-4">
                &quot;The coaching, atmosphere and attention to detail are on
                another level.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-8 h-8 lg:w-11 lg:h-11 bg-[#D7FF3F] rounded-full">
                  <span className="text-[#0f0f0f] text-sm md:text-lg font-bebas-neue font-semibold">
                    SL
                  </span>
                </div>
                <div>
                  <h5 className="text-white font-bebas-neue text-base lg:text-xl">
                    Sarah L.
                  </h5>
                  <p className="text-[#b8b8b8] text-xs">Member for 2 years</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start justify-between rounded-sm bg-[#1e1e1e] w-full p-5 lg:p-7">
              <p className="text-white text-sm lg:text-base text-center md:text-start mb-4">
                &quot;It feels more like a luxury fitness club than a normal
                gym. Incredible experience.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-8 h-8 lg:w-11 lg:h-11 bg-[#D7FF3F] rounded-full">
                  <span className="text-[#0f0f0f] text-sm md:text-lg font-bebas-neue font-semibold">
                    DK
                  </span>
                </div>
                <div>
                  <h5 className="text-white font-bebas-neue text-base lg:text-xl">
                    Daniel K.
                  </h5>
                  <p className="text-[#b8b8b8] text-xs">Member for 12 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
