import { Button } from "@/components/ui/button";
import { Check, Shield, Truck, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import saunaProduct from "@/assets/sauna-product-black.png";
import saunaGymLifestyle from "@/assets/sauna-gym-lifestyle.png";
import { useState } from "react";

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [saunaGymLifestyle, saunaProduct];

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="hero" className="section-light pt-16 md:pt-32 pb-8 md:pb-24">
      <div className="container-section">
        {/* Mobile Layout - Image First */}
        <div className="lg:hidden">
          {/* Product Image with Navigation */}
          <div className="relative -mx-4 sm:-mx-6 mb-4">
            <div className="relative overflow-hidden bg-muted">
              <img
                src={images[selectedImage]}
                alt="Healing Sauna GO - Black"
                className="w-full h-auto object-cover aspect-square"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Gallery - Horizontal Scroll */}
            <div className="flex gap-2 mt-3 px-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            {/* Title with In Stock Badge */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                Healing Sauna GO — Black
              </h1>
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                <Check size={12} />
                In Stock
              </span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">4.9 Stars (127 Reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-2xl font-bold text-foreground">$2,300 USD</span>
              <span className="text-muted-foreground line-through text-sm">$2,999</span>
              <span className="text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan px-2 py-1 rounded">
                $699 off
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm">
              Rejuvenate, detox, and recover anywhere with the ultimate home sauna.
            </p>

            {/* Features List */}
            <ul className="space-y-2">
              {[
                "Portable & foldable design",
                "Far-infrared full-body heat therapy",
                "Heats up in under 10 minutes",
                "Perfect for home, gym, or travel"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="w-full">
              Buy Now — $2,300
            </Button>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 text-muted-foreground text-xs pt-2">
              <div className="flex items-center gap-1">
                <Truck size={14} className="text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield size={14} className="text-primary" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Product Info */}
          <div className="animate-fade-in">
            <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Premium Far-Infrared Sauna
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Healing Sauna GO
              <span className="block gradient-text">— Black</span>
            </h1>

            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">4.9 Stars (127 Reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl md:text-6xl font-bold gradient-text">$2,300</span>
              <div className="flex flex-col">
                <span className="text-muted-foreground line-through text-lg">$2,999</span>
                <span className="text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan px-2 py-1 rounded inline-block">
                  Save $699
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
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
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
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
              <Button variant="outline" size="xl" className="flex-1 sm:flex-none border-2">
                Learn More
              </Button>
            </div>

            {/* Micro CTA */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
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
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images[selectedImage]}
                  alt="Healing Sauna GO - Black"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-4 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shadow-md ${
                      selectedImage === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50"
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
