import Header from "@/components/Header";
import ProductPageLayout from "@/components/ProductPageLayout";
import TrustBar from "@/components/TrustBar";
import FeaturesSection from "@/components/FeaturesSection";
import DifferenceSection from "@/components/DifferenceSection";
import ValueSection from "@/components/ValueSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ShopifyBuyButton from "@/components/ShopifyBuyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductPageLayout />
        <TrustBar />
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
      <ShopifyBuyButton />
    </div>
  );
};

export default Index;
