import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact";
import ContentSection from "@/components/content-4";
import Features from "@/components/features-3";
import FeaturesSection from "@/components/features-8";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <FeaturesSection />
      <ContentSection />
      <ContactSection />
      <Testimonials />
      <FooterSection />
    </>
  );
}
