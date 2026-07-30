"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function FacilitySection() {
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
    if (e.deltaY === 0) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth || 400;
    const scrollAmount = cardWidth + 24; // card width + gap-6 (24px)
    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const facilities = [
    {
      img: "/images/facility-1.webp",
      label: "Strength",
      title: "Premium Strength Floor",
      desc: "Industry-leading strength and resistance equipment designed for serious training.",
    },
    {
      img: "/images/facility-2.webp",
      label: "Conditioning",
      title: "Functional Training Zone",
      desc: "Dedicated space for conditioning, mobility and athletic-focused workouts.",
    },
    {
      img: "/images/facility-3.webp",
      label: "Recovery",
      title: "Recovery & Wellness Area",
      desc: "Recovery-focused facilities designed to support performance and overall wellbeing.",
    },
    {
      img: "/images/facility-4.webp",
      label: "Experience",
      title: "Luxury Changing Facilities",
      desc: "Premium changing rooms with high-end finishes and amenities.",
    },
  ];

  return (
    <section className="bg-[#1E1E1E] py-14 md:py-20 lg:py-40 lg:px-0 md:px-6 px-4">
      <div className="lg:max-w-[1248px] lg:mx-auto">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
              THE FACILITY
            </p>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl mb-4">
              EVERY DETAIL <br /> BUILT TO PERFORM.
            </h3>

            <p className="text-[#b8b8b8] text-sm lg:text-base my-4 max-w-[550px]">
              Premium training environments designed around the discipline,
              recovery and consistency that serious progress demands.
            </p>
          </div>

          {/* Nav buttons - top right, desktop */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByAmount("prev")}
              disabled={!canScrollLeft}
              aria-label="Previous facility"
              className="cursor-pointer group flex items-center justify-center w-11 h-11 rounded-full border 
              border-[#3a3a3a] bg-transparent transition-all duration-200 hover:border-[#D7FF3F] hover:bg-[#D7FF3F] 
              disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed"
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
              aria-label="Next facility"
              className="cursor-pointer group flex items-center justify-center w-11 h-11 rounded-full border 
              border-[#3a3a3a] bg-transparent transition-all duration-200 hover:border-[#D7FF3F] hover:bg-[#D7FF3F] 
              disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed"
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

        <div className="relative">
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            className="flex gap-6 py-6 overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          >
            {facilities.map((facility, i) => (
              <div
                key={i}
                className="relative z-0 flex-none w-[85vw] sm:w-[400px] lg:w-[500px] snap-start"
              >
                <span className="block">
                  <Image
                    src={facility.img}
                    alt="facility"
                    width={2000}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </span>

                <div className="z-10 flex flex-col flex-1 mt-3">
                  <p className="text-xs text-[#d7ff3f] font-bold tracking-widest uppercase mb-2.5">
                    {facility.label}
                  </p>
                  <h5 className="text-white font-bebas-neue text-3xl md:text-4xl mb-2">
                    {facility.title}
                  </h5>
                  <p className="text-sm lg:text-base text-[#b8b8b8] max-w-[370px]">
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav buttons - mobile, below carousel */}
        {/* <div className="flex md:hidden items-center gap-3 mt-2">
          <button
            onClick={() => scrollByAmount("prev")}
            disabled={!canScrollLeft}
            aria-label="Previous facility"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-[#3a3a3a] bg-transparent transition-all duration-200 active:border-[#D7FF3F] active:bg-[#D7FF3F] disabled:opacity-30"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-white"
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
            aria-label="Next facility"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-[#3a3a3a] bg-transparent transition-all duration-200 active:border-[#D7FF3F] active:bg-[#D7FF3F] disabled:opacity-30"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-white"
            >
              <path
                d="M9 6l6 6-6 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}
