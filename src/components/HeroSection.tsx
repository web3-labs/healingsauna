import { Button } from "@/components/ui/button";
import { Check, Shield, Truck, Clock } from "lucide-react";
import saunaProduct from "@/assets/sauna-product-black.png";
import heroLifestyle from "@/assets/hero-lifestyle.png";
import { useState } from "react";

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [saunaProduct, heroLifestyle];

  return (
    <section id="hero" className="section-dark pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Product Info */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Premium Far-Infrared Sauna
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Healing Sauna GO
              <span className="block gradient-text">— Black</span>
            </h1>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-white/50 line-through text-2xl">$2,999</span>
              <span className="text-5xl md:text-6xl font-bold gradient-text">$2,300</span>
            </div>

            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Rejuvenate, detox, and recover anywhere with a premium far-infrared sauna designed for your lifestyle.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {[
                "Portable & foldable design",
                "Far-infrared full-body heat therapy",
                "Heats up in under 10 minutes",
                "Perfect for home, gym, or travel"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-none">
                Buy Now — $2,300
              </Button>
              <Button variant="heroOutline" size="xl" className="flex-1 sm:flex-none">
                Learn More
              </Button>
            </div>

            {/* Micro CTA */}
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-primary" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>Ships in 2-3 Days</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-black p-8 glow-effect">
                <img
                  src={images[selectedImage]}
                  alt="Healing Sauna GO - Black"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-4 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary glow-effect"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
