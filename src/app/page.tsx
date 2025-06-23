import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import Testimonials from "@/components/testimonials";
import EngagementSection from "@/components/EngagementSection";
import ContentSection from "@/components/content-4";
import HowItWorksSection from "@/components/features-3";
import FeaturesSection from "@/components/features-8";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ContentSection />
      <EngagementSection />
      <Testimonials />
      <FooterSection />
    </>
  );
}
