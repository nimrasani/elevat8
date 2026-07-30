import Image from "next/image";

export default function FacilitySection() {
  return (
    <>
      <section className="bg-[#1E1E1E] py-14 md:py-20 lg:py-40 lg:px-0 md:px-6 px-4">
        <div className="lg:max-w-[1248px] lg:mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
              THE FACILITY
            </p>
          </div>
          <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl mb-4">
            EVERY DETAIL <br /> BUILT TO PERFORM.
          </h3>

          <p className="text-[#b8b8b8] text-sm lg:text-base my-4 max-w-[550px]">
            Premium training environments designed around the discipline,
            recovery and consistency that serious progress demands.
          </p>

          <div className="flex gap-6 py-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="relative z-0 flex-none w-[85vw] sm:w-[400px] lg:w-[500px] snap-start">
              <span className="block">
                <Image
                  src="/images/facility-1.webp"
                  alt="facility"
                  width={2000}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </span>

              <div className="z-10 flex flex-col flex-1 mt-3">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Strength
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Premium Strength Floor
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Industry-leading strength and resistance equipment designed
                  for serious training.
                </p>
              </div>
            </div>
            <div className="relative z-0 flex-none w-[85vw] sm:w-[400px] lg:w-[500px] snap-start">
              <span className="block">
                <Image
                  src="/images/facility-2.webp"
                  alt="facility"
                  width={2000}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </span>

              <div className="z-10 flex flex-col flex-1 mt-3">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Conditioning
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Functional Training Zone
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Dedicated space for conditioning, mobility and
                  athletic-focused workouts.
                </p>
              </div>
            </div>
            <div className="relative z-0 flex-none w-[85vw] sm:w-[400px] lg:w-[500px] snap-start">
              <span className="block">
                <Image
                  src="/images/facility-3.webp"
                  alt="facility"
                  width={2000}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </span>

              <div className="z-10 flex flex-col flex-1 mt-3">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Recovery
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Recovery & Wellness Area
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Recovery-focused facilities designed to support performance
                  and overall wellbeing.
                </p>
              </div>
            </div>
            <div className="relative z-0 flex-none w-[85vw] sm:w-[400px] lg:w-[500px] snap-start">
              <span className="block">
                <Image
                  src="/images/facility-4.webp"
                  alt="facility"
                  width={2000}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </span>

              <div className="z-10 flex flex-col flex-1 mt-3">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Experience
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Luxury Changing Facilities
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Premium changing rooms with high-end finishes and amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#1E1E1E] pt-10 md:pt-14 lg:pt-20 lg:pb-20 lg:px-0 md:px-6 px-4">
        <div className="lg:max-w-[1248px] lg:mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
              THE FACILITY
            </p>
          </div>
          <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl mb-4">
            EVERY DETAIL <br /> BUILT TO PERFORM.
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 py-6">
            <div className="relative z-0">
              <span className="block">
                <Image
                  src="/images/facility-1.webp"
                  alt="facility"
                  width={574}
                  height={200}
                  className="w-full h-[410px] object-cover"
                />
              </span>
              <div className="service-img-overlay"></div>

              <div className="absolute bottom-0 p-7 z-10 flex flex-col flex-1">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Strength
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Premium Strength Floor
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Industry-leading strength and resistance equipment designed
                  for serious training.
                </p>
              </div>
            </div>
            <div className="relative z-0">
              <span className="block">
                <Image
                  src="/images/facility-2.webp"
                  alt="facility"
                  width={574}
                  height={200}
                  className="w-full h-[410px] object-cover"
                />
              </span>
              <div className="service-img-overlay"></div>

              <div className="absolute bottom-0 p-7 z-10 flex flex-col flex-1">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Conditioning
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Functional Training Zone
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Dedicated space for conditioning, mobility and
                  athletic-focused workouts.
                </p>
              </div>
            </div>
            <div className="relative z-0">
              <span className="block">
                <Image
                  src="/images/facility-3.webp"
                  alt="facility"
                  width={574}
                  height={200}
                  className="w-full h-[410px] object-cover"
                />
              </span>
              <div className="service-img-overlay"></div>

              <div className="absolute bottom-0 p-7 z-10 flex flex-col flex-1">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Recovery
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Recovery & Wellness Area
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Recovery-focused facilities designed to support performance
                  and overall wellbeing.
                </p>
              </div>
            </div>
            <div className="relative z-0">
              <span className="block">
                <Image
                  src="/images/facility-4.webp"
                  alt="facility"
                  width={574}
                  height={200}
                  className="w-full h-[410px] object-cover"
                />
              </span>
              <div className="service-img-overlay"></div>

              <div className="absolute bottom-0 p-7 z-10 flex flex-col flex-1">
                <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                  Experience
                </p>
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                  Luxury Changing Facilities
                </h5>
                <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                  Premium changing rooms with high-end finishes and amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
