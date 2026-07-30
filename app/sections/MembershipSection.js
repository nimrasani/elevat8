import Image from "next/image";

export default function MembershipSection() {
  return (
    <>
      <section className="bg-[#1E1E1E] pt-14 md:pt-20 lg:py-40 lg:px-0 md:px-6 px-4">
        <div className="lg:max-w-[1248px] m-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold tracking-widest-lg uppercase">
              WHAT WE OFFER
            </p>
          </div>

          <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl">
            CHOOSE YOUR MEMBERSHIP.
          </h3>

          <p className="text-[#b8b8b8] text-sm lg:text-base my-4">
            Flexible membership options designed around your training goals and
            lifestyle.
          </p>

          {/* Cards - 3 - ESSENTIAL, PERFORMANCE, ELITE  */}
          <div
            className="flex flex-col sm:flex-row gap-6 py-6 
            sm:overflow-x-auto lg:overflow-visible sm:snap-x sm:snap-mandatory scrollbar-hide"
          >
            <div className="bg-[#0f0f0f] flex flex-col w-full sm:min-w-[360px] sm:max-w-[360px] lg:min-w-0 lg:max-w-none lg:flex-1 sm:snap-start">
              <div className="relative z-0">
                <span className="block">
                  <Image
                    src="/images/essential.webp"
                    alt="Essential Membership"
                    width={400}
                    height={200}
                    className="w-full h-[350px] object-cover"
                  />
                </span>
                <div className="service-img-overlay"></div>
              </div>
              <div className="relative p-7 -mt-28 md:-mt-30 z-10 flex flex-col flex-1">
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl text-center mb-3">
                  ESSENTIAL
                </h5>
                <h6 className="text-[#D7FF3F] text-2xl md:text-3xl font-semibold leading-4 md:leading-5 text-center mb-5">
                  AED 699
                  <br /> <small className="text-xs">/Month</small>
                </h6>

                <ul className="list-disc list-inside text-[#b8b8b8] text-sm lg:text-base mb-6 mx-4">
                  <li>Full Gym Access</li>
                  <li>Strength & Conditioning Floor</li>
                  <li>Functional Training Area</li>
                  <li>Mobile App Access</li>
                  <li>1 Complimentary PT Session</li>
                </ul>

                <a
                  href="#"
                  className="inline-flex justify-center items-center gap-3 cursor-pointer w-full
              uppercase rounded-sm text-btn font-semibold tracking-widest text-white
              bg-transparent hover:bg-[#D7FF3F] hover:text-[#0f0f0f] focus:text-[#0f0f0f] focus:bg-[#D7FF3F]
              border border-[#B8B8B880] hover:border-[#D7FF3F] focus:border-[#D7FF3F] h-[44px] 
              py-4 px-10 mt-auto ease-in-out duration-300 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="bg-[#0f0f0f] flex flex-col w-full sm:min-w-[360px] sm:max-w-[360px] lg:min-w-0 lg:max-w-none lg:flex-1 sm:snap-start">
              <div className="relative z-0">
                <span className="block">
                  <Image
                    src="/images/performance.webp"
                    alt="Performance Membership"
                    width={400}
                    height={200}
                    className="w-full h-[350px] object-cover"
                  />
                </span>
                <div className="service-img-overlay"></div>
              </div>
              <div className="relative p-7 -mt-28 md:-mt-30 z-10 flex flex-col flex-1">
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl text-center mb-3">
                  PERFORMANCE
                </h5>
                <h6 className="text-[#D7FF3F] text-2xl md:text-3xl font-semibold leading-4 md:leading-5 text-center mb-5">
                  AED 1,299
                  <br /> <small className="text-xs">/Month</small>
                </h6>

                <ul className="list-disc list-inside text-[#b8b8b8] text-sm lg:text-base mb-6 mx-4">
                  <li>Everything In Essential</li>
                  <li>Unlimited Group Classes</li>
                  <li>Recovery Area Access</li>
                  <li>Monthly Body Composition Check</li>
                  <li>Nutrition Guidance</li>
                  <li>Priority Class Booking</li>
                </ul>

                <a
                  href="#"
                  className="inline-flex justify-center items-center gap-3 cursor-pointer w-full
              uppercase rounded-sm text-btn font-semibold tracking-widest text-white
              bg-transparent hover:bg-[#D7FF3F] hover:text-[#0f0f0f] focus:text-[#0f0f0f] focus:bg-[#D7FF3F]
              border border-[#B8B8B880] hover:border-[#D7FF3F] focus:border-[#D7FF3F] h-[44px] 
              py-4 px-10 mt-auto ease-in-out duration-300 transition-all"
                >
                  Join Performance
                </a>
              </div>
            </div>

            <div className="bg-[#0f0f0f] flex flex-col w-full sm:min-w-[360px] sm:max-w-[360px] lg:min-w-0 lg:max-w-none lg:flex-1 sm:snap-start">
              <div className="relative z-0">
                <span className="block">
                  <Image
                    src="/images/elite.webp"
                    alt="Elite Membership"
                    width={400}
                    height={200}
                    className="w-full h-[350px] object-cover"
                  />
                </span>
                <div className="service-img-overlay"></div>
              </div>
              <div className="relative p-7 -mt-28 md:-mt-30 z-10 flex flex-col flex-1">
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl text-center mb-3">
                  ELITE
                </h5>
                <h6 className="text-[#D7FF3F] text-2xl md:text-3xl font-semibold leading-4 md:leading-5 text-center mb-5">
                  AED 2,499
                  <br /> <small className="text-xs">/Month</small>
                </h6>

                <ul className="list-disc list-inside text-[#b8b8b8] text-sm lg:text-base mb-6 mx-4">
                  <li>Everything In Performance</li>
                  <li>Weekly Personal Training Session</li>
                  <li>Custom Training Programme</li>
                  <li>VIP Locker Access</li>
                  <li>Recovery & Wellness Package</li>
                  <li>Priority Support & Booking</li>
                </ul>

                <a
                  href="#"
                  className="inline-flex justify-center items-center gap-3 cursor-pointer w-full
              uppercase rounded-sm text-btn font-semibold tracking-widest text-white
              bg-transparent hover:bg-[#D7FF3F] hover:text-[#0f0f0f] focus:text-[#0f0f0f] focus:bg-[#D7FF3F]
              border border-[#B8B8B880] hover:border-[#D7FF3F] focus:border-[#D7FF3F] h-[44px] 
              py-4 px-10 mt-auto ease-in-out duration-300 transition-all"
                >
                  Apply For Elite
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
