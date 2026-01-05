import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PurchaseSection from "@/components/PurchaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import DifferenceSection from "@/components/DifferenceSection";
import ValueSection from "@/components/ValueSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBuyButton from "@/components/StickyBuyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <PurchaseSection />
        <FeaturesSection />
        <DifferenceSection />
        <ValueSection />
        <VideoSection />
        <TestimonialsSection />
        <BenefitsStrip />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBuyButton />
    </div>
  );
};

export default Index;
