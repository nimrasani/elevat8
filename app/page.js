import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import MembershipSection from "./sections/MembershipSection";
import SocialSection from "./sections/SocialSection";
import AboutSection from "./sections/AboutSection";
import FacilitySection from "./sections/FacilitySection";
import CoachingSection from "./sections/CoachingSection";
import TestimonialSection from "./sections/TestimonialSection";
import Footer from "./components/Footer";
import ConnectSection from "./sections/ConnectSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      {/* <FacilitySection/>
      <CoachingSection/> */}
      <TestimonialSection/>
      <SocialSection/>
      <MembershipSection/>
      <ConnectSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
