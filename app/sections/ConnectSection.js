
export default function ConnectSection() {
  return (
    <>
      <section>
        <div className="bg-[#d7ff3f] py-10 md:py-14 lg:py-20 lg:px-0 md:px-6 px-4">
          <div className="flex flex-col lg:flex-row gap-14 justify-center lg:max-w-[1248px] mx-auto">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-6xl md:text-7xl lg:text-8xl text-[#0f0f0f] font-bebas-neue mb-4">
                READY TO <br />
                ELEVAT8?
              </h4>
              <p className="text-sm md:text-base text-[#1e1e1e] max-w-lg lg:mb-7">
                Stay updated with the latest news and offers.
              </p>

              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-3 cursor-pointer 
              uppercase rounded-sm text-btn font-semibold tracking-widest bg-[#0f0f0f]
              hover:bg-[#0f0f0f]/90 h-[44px] 
              py-4 px-10 ease-in-out duration-300 transition-all 
              hover:scale-105 focus:scale-105 active:scale-95"
              >
                JOIN NOW
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
