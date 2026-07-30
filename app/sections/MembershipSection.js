"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function MembershipSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      Math.ceil(el.scrollLeft) < el.scrollWidth - el.clientWidth,
    );
  };

  useEffect(() => {
    checkScrollability();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const handleWheel = (e) => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    if (e.deltaY === 0) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > div");
    const cardWidth = card?.offsetWidth || 360;
    const scrollAmount = cardWidth + 24; 
    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const memberships = [
    {
      img: "/images/essential.webp",
      alt: "Essential Membership",
      title: "ESSENTIAL",
      price: "AED 699",
      features: [
        "Full Gym Access",
        "Strength & Conditioning Floor",
        "Functional Training Area",
        "Mobile App Access",
        "1 Complimentary PT Session",
      ],
      cta: "Get Started",
    },
    {
      img: "/images/performance.webp",
      alt: "Performance Membership",
      title: "PERFORMANCE",
      price: "AED 1,299",
      features: [
        "Everything In Essential",
        "Unlimited Group Classes",
        "Recovery Area Access",
        "Monthly Body Composition Check",
        "Nutrition Guidance",
        "Priority Class Booking",
      ],
      cta: "Join Performance",
    },
    {
      img: "/images/elite.webp",
      alt: "Elite Membership",
      title: "ELITE",
      price: "AED 2,499",
      features: [
        "Everything In Performance",
        "Weekly Personal Training Session",
        "Custom Training Programme",
        "VIP Locker Access",
        "Recovery & Wellness Package",
        "Priority Support & Booking",
      ],
      cta: "Apply For Elite",
    },
  ];

  return (
    <section className="bg-[#1E1E1E] pt-14 md:pt-20 lg:py-40 lg:px-0 md:px-6 px-4">
      <div className="lg:max-w-[1248px] m-auto">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold tracking-widest-lg uppercase">
              WHAT WE OFFER
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl">
              CHOOSE YOUR MEMBERSHIP.
            </h3>

            <p className="text-[#b8b8b8] text-sm lg:text-base my-4">
              Flexible membership options designed around your training goals
              and lifestyle.
            </p>
          </div>

          {/* Nav buttons - only relevant below lg, where cards scroll */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => scrollByAmount("prev")}
              disabled={!canScrollLeft}
              aria-label="Previous membership"
              className="cursor-pointer group flex items-center justify-center w-11 h-11 rounded-full border border-[#3a3a3a] bg-transparent transition-all duration-200 hover:border-[#D7FF3F] hover:bg-[#D7FF3F] disabled:opacity-30 disabled:pointer-events-none"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-white group-hover:stroke-[#1E1E1E] transition-colors duration-200"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount("next")}
              disabled={!canScrollRight}
              aria-label="Next membership"
              className="cursor-pointer group flex items-center justify-center w-11 h-11 rounded-full border border-[#3a3a3a] bg-transparent transition-all duration-200 hover:border-[#D7FF3F] hover:bg-[#D7FF3F] disabled:opacity-30 disabled:pointer-events-none"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-white group-hover:stroke-[#1E1E1E] transition-colors duration-200"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards - 3 - ESSENTIAL, PERFORMANCE, ELITE  */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="flex flex-row gap-6 py-6 
          overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide w-full"
        >
          {memberships.map((plan, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] flex flex-col min-w-[380px] lg:min-w-0 lg:max-w-none lg:flex-1 snap-start"
            >
              <div className="relative z-0">
                <span className="block">
                  <Image
                    src={plan.img}
                    alt={plan.alt}
                    width={400}
                    height={200}
                    className="w-full h-[350px] object-cover"
                    loading="lazy"
                  />
                </span>
                <div className="service-img-overlay"></div>
              </div>
              <div className="relative p-7 -mt-28 md:-mt-30 z-10 flex flex-col flex-1">
                <h5 className="text-white font-bebas-neue text-3xl md:text-4xl text-center mb-3">
                  {plan.title}
                </h5>
                <h6 className="text-[#D7FF3F] text-2xl md:text-3xl font-semibold leading-4 md:leading-5 text-center mb-5">
                  {plan.price}
                  <br /> <small className="text-xs">/Month</small>
                </h6>

                <ul className="list-disc list-inside text-[#b8b8b8] text-sm lg:text-base mb-6 mx-4">
                  {plan.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex justify-center items-center gap-3 cursor-pointer w-full
              uppercase rounded-sm text-btn font-semibold tracking-widest text-white
              bg-transparent hover:bg-[#D7FF3F] hover:text-[#0f0f0f] focus:text-[#0f0f0f] focus:bg-[#D7FF3F]
              border border-[#B8B8B880] hover:border-[#D7FF3F] focus:border-[#D7FF3F] h-[44px] 
              py-4 px-10 mt-auto ease-in-out duration-300 transition-all"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
