import Header from "@/components/Header";
import ProductPageLayout from "@/components/ProductPageLayout";
import TrustBar from "@/components/TrustBar";
import FeaturesSlider from "@/components/FeaturesSlider";
import DifferenceSection from "@/components/DifferenceSection";
import ValueSection from "@/components/ValueSection";
import WhatMakesDifferentSection from "@/components/WhatMakesDifferentSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import FAQSection from "@/components/FAQSection";
import ProductDetailsSection from "@/components/ProductDetailsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ShopifyBuyButton from "@/components/ShopifyBuyButton";
import StickyBuyButton from "@/components/StickyBuyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductPageLayout />
        <TrustBar />
        <BenefitsStrip />
        <FeaturesSlider />
        <DifferenceSection />
        <WhatMakesDifferentSection />
        <ValueSection />
        <VideoSection />
        <TestimonialsSection />
        <ProductDetailsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBuyButton />
      <ShopifyBuyButton />
    </div>
  );
};

export default Index;
