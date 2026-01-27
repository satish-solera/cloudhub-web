import Image from "next/image";
import {ProjectDemo } from "@/components/svg";
import { HeroSVG } from "@/components/svg";
import { Background } from "@/components/svg/hero";
import { Hero } from "@/sections/hero-section";
import { CompanySection } from "@/sections/company-section";
import { ShareSection } from "@/sections/share-section";
import { FeedbackFirstSection } from "@/sections/feedback-first-section";
import { FeedbackSecondSection } from "@/sections/feedback-second-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <div className="mt-[500px]"></div>
      <CompanySection />
      <ShareSection/>
      <FeedbackFirstSection/>
      <FeedbackSecondSection/>
    </div>
  );
}
