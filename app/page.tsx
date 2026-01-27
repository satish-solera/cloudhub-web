
import { Hero } from "@/sections/hero-section";
import { CompanySection } from "@/sections/company-section";
import { ShareSection } from "@/sections/share-section";
import { FeedbackFirstSection } from "@/sections/feedback-first-section";
import { FeedbackSecondSection } from "@/sections/feedback-second-section";
import { ProgressSection } from "@/sections/progress-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <div className="mt-60 lg:mt-125"></div>
      {/* <CompanySection /> */}
      <ShareSection/>
      <FeedbackFirstSection/>
      <FeedbackSecondSection/>
      <ProgressSection/>
    </div>
  );
}
