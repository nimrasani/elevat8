export default function HeroSection() {
  return (
    <>
      <section className="pt-[5.2rem] lg:pt-0 relative lg:min-h-[750px] bg-[#0F0F0F] bg-[url(/bg-images/hero-img.webp)] bg-no-repeat bg-cover bg-position-[center_20%]">
        <div className="hero-overlay"></div>
        <div className="hero-overlay-bottom"></div>

        <div className="relative z-10 lg:max-w-[1248px] mx-auto py-14 md:py-20 lg:py-40 lg:px-0 md:px-6 px-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="hero-eyebrow-line"></span>
            <p className="text-[#D7FF3F] text-xs font-semibold tracking-widest-lg uppercase">
              Premium Fitness · Est. 2024
            </p>
          </div>

          <h3 className="font-bebas-neue text-7xl md:text-8xl lg:text-[120px] text-white mb-4 max-w-[550px]">
            TRAIN AT A<br />
            <span className="text-[#D7FF3F]"> HIGHER</span> LEVEL.
          </h3>
          <p className="text-sm lg:text-base mb-7 text-[#B8B8B8] max-w-[550px]">
            Premium facilities, elite coaching and a training environment
            designed for people who expect more from themselves.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a
              href="#"
              className="inline-flex justify-center items-center gap-3 cursor-pointer 
            uppercase rounded-sm text-btn font-semibold text-[#0F0F0F] tracking-widest
            bg-[#D7FF3F] hover:bg-[#D7FF3F]/90 focus:bg-[#D7FF3F]/90 h-[44px] 
            py-4 px-10 ease-in-out duration-300 transition-all
            "
            >
              Start Your 7-Day Trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-node-id="n26"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center gap-3 cursor-pointer 
              uppercase rounded-sm text-btn font-semibold tracking-widest text-white
              bg-transparent hover:bg-[#1E1E1E]/90 hover:text-white/90 focus:text-white/90 
              border border-[#B8B8B880] h-[44px] 
              py-4 px-10 ease-in-out duration-300 transition-all"
            >
              Book A Club Tour
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
