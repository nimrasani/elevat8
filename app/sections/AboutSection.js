import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="lg:max-w-[1248px] lg:mx-auto py-14 md:py-20 lg:py-40 lg:px-0 md:px-6 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* IMAGE */}
          <span className="order-2 lg:order-1 block w-full lg:w-[60%]">
            <Image
              src="/images/about-us.webp"
              alt="about us"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover rounded-lg"
            />
          </span>
          <div className="order-1 lg:order-2 w-full lg:w-[40%]">
            <div className="flex items-center gap-3 mb-3">
              <span className="hero-eyebrow-line"></span>
              <p className="text-[#D7FF3F] text-xs font-inter font-semibold uppercase tracking-widest-lg">
                OUR STORY
              </p>
            </div>
            <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl mb-4">
              MORE THAN A GYM.
            </h3>

            <p className="text-[#b8b8b8] text-sm lg:text-base">
              ELEVAT8 was created for individuals looking for more than a
              standard commercial gym experience. <br />
              <br />
              Every detail — from the equipment and layout to the lighting,
              music and coaching — is designed to create an environment that
              motivates performance and consistency. <br />
              <br />
              Whether your goal is fat loss, muscle building, athletic
              performance or simply improving your lifestyle, ELEVAT8 provides
              the structure, coaching and atmosphere to help you perform at your
              best.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
