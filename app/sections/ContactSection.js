import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="bg-[#0F0F0F]">
        <div className="lg:container m-auto py-10 md:py-14 lg:pt-40 lg:pb-20 lg:px-0 md:px-6 px-4">
          <div className="flex flex-col lg:flex-row gap-14 justify-between lg:max-w-[1248px] mx-auto">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h4 className="text-4xl md:text-5xl lg:text-6xl text-white font-bebas-neue mb-4">
                  APPLY FOR <br/>
                  <span className="text-[#D7FF3F]">MEMBERSHIP.</span>
                </h4>
                <p className="text-sm md:text-base text-[#B8B8B8] max-w-lg lg:mb-7">
                  Join an exclusive community of high-performers. Limited memberships available.
                </p>
              </div>
              {/* <div className="flex items-center gap-5">
                <p className="text-xs md:text-sm lg:text-base text-gray-400">
                  solutions@taurexprime.com
                </p>
                <span className="h-1.5 w-1.5 bg-[#FF1D48] rounded-full"></span>
                <p className="text-xs md:text-sm lg:text-base text-gray-400">
                  +44 (0) 203 983 6430
                </p>
              </div> */}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
