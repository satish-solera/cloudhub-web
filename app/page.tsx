
import { Hero } from "@/sections/hero-section";
import { CompanySection } from "@/sections/company-section";
import { ShareSection } from "@/sections/share-section";
import { FeedbackFirstSection } from "@/sections/feedback-first-section";
import { FeedbackSecondSection } from "@/sections/feedback-second-section";
import { ProgressSection } from "@/sections/progress-section";
import { TestinomialSection } from "@/sections/Testinomial-section";
import { DesignerSection } from "@/sections/designers-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <div className="mt-80 lg:mt-125"></div>
      <CompanySection />
      
      <ShareSection/>
      <FeedbackFirstSection/>
      <FeedbackSecondSection/>
      <ProgressSection/>
      <TestinomialSection />
      <DesignerSection/>
    </div>
  );
}
