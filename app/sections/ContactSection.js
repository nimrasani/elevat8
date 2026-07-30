import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="relative bg-[#0F0F0F]">
        <Image
          src="/bg-images/form-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
          priority
        />

        <div className="absolute inset-0 bg-black/80 pointer-events-none z-[1]" />

        <div className="relative lg:container m-auto py-14 md:py-20 lg:py-40 lg:px-0 md:px-6 px-4 z-10">
          <div className="flex flex-col lg:flex-row gap-14 justify-center lg:max-w-[1248px] mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
