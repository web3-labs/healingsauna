import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Shield, Truck, Clock, Star, ChevronLeft, ChevronRight, Headphones, MapPin, Wrench, Calendar } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import saunaGymLifestyle from "@/assets/sauna-gym-lifestyle.png";
import saunaCarryBag from "@/assets/sauna-carry-bag.webp";
import saunaPackageContents from "@/assets/sauna-package-contents.webp";
import saunaWomanUsing from "@/assets/sauna-woman-using.webp";
import saunaRoomSetup from "@/assets/sauna-room-setup.webp";
import saunaRecoveryLifestyle from "@/assets/sauna-recovery-lifestyle.jpg";
import saunaWomanMain from "@/assets/sauna-woman-main.jpg";
import saunaProductHero from "@/assets/sauna-product-hero.jpg";
const ProductPageLayout = () => {
  const [selectedImageMobile, setSelectedImageMobile] = useState(0);
  const [selectedImageDesktop, setSelectedImageDesktop] = useState(0);
  const [protectionPlan, setProtectionPlan] = useState(false);
  const images = [saunaProductHero, saunaWomanMain, saunaWomanUsing, saunaRecoveryLifestyle, saunaGymLifestyle, saunaRoomSetup, saunaPackageContents, saunaCarryBag];

  // Mobile carousel
  const [mobileRef, mobileApi] = useEmblaCarousel({
    loop: true
  }, [Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  })]);

  // Desktop carousel
  const [desktopRef, desktopApi] = useEmblaCarousel({
    loop: true
  }, [Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  })]);
  const scrollPrevMobile = useCallback(() => mobileApi?.scrollPrev(), [mobileApi]);
  const scrollNextMobile = useCallback(() => mobileApi?.scrollNext(), [mobileApi]);
  const scrollToMobile = useCallback((index: number) => mobileApi?.scrollTo(index), [mobileApi]);
  const scrollPrevDesktop = useCallback(() => desktopApi?.scrollPrev(), [desktopApi]);
  const scrollNextDesktop = useCallback(() => desktopApi?.scrollNext(), [desktopApi]);
  const scrollToDesktop = useCallback((index: number) => desktopApi?.scrollTo(index), [desktopApi]);
  const onSelectMobile = useCallback(() => {
    if (!mobileApi) return;
    setSelectedImageMobile(mobileApi.selectedScrollSnap());
  }, [mobileApi]);
  const onSelectDesktop = useCallback(() => {
    if (!desktopApi) return;
    setSelectedImageDesktop(desktopApi.selectedScrollSnap());
  }, [desktopApi]);
  useEffect(() => {
    if (!mobileApi) return;
    onSelectMobile();
    mobileApi.on("select", onSelectMobile);
    return () => {
      mobileApi.off("select", onSelectMobile);
    };
  }, [mobileApi, onSelectMobile]);
  useEffect(() => {
    if (!desktopApi) return;
    onSelectDesktop();
    desktopApi.on("select", onSelectDesktop);
    return () => {
      desktopApi.off("select", onSelectDesktop);
    };
  }, [desktopApi, onSelectDesktop]);
  const basePrice = 2300;
  const protectionPrice = 199;
  const totalPrice = protectionPlan ? basePrice + protectionPrice : basePrice;
  return <section id="hero" className="section-light pt-16 md:pt-24 pb-8 md:pb-16">
      <div className="container-section">
        {/* Mobile Layout - Image First */}
        <div className="lg:hidden">
          {/* Product Image with Navigation */}
          <div className="relative -mx-4 sm:-mx-6 mb-4">
            <div className="relative overflow-hidden bg-muted" ref={mobileRef}>
              <div className="flex">
                {images.map((img, index) => <div key={index} className="flex-[0_0_100%] min-w-0">
                    <img src={img} alt="Healing Sauna GO - Black" className="w-full h-auto object-cover aspect-square" />
                  </div>)}
              </div>
              
              {/* Navigation Arrows */}
              <button onClick={scrollPrevMobile} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={scrollNextMobile} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Gallery - Horizontal Scroll */}
            <div className="flex gap-2 mt-3 px-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, index) => <button key={index} onClick={() => scrollToMobile(index)} className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedImageMobile === index ? "border-primary" : "border-border"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                The Healing Sauna
              </h1>
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                <Check size={12} />
                In Stock
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-muted-foreground text-sm">4.9 Stars (127 Reviews)</span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-2xl font-bold text-foreground">${totalPrice.toLocaleString()}</span>
              <span className="text-muted-foreground line-through text-sm">$2,999</span>
              <span className="text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan px-2 py-1 rounded">
                $699 off
              </span>
            </div>

            {/* Add to Cart Button - Shopify Buy Button (Mobile) */}
            <div id="mobile-add-to-cart" className="w-full min-h-[56px]" />

            <p className="text-muted-foreground text-sm">
              Rejuvenate, detox, and recover anywhere with a premium far-infrared sauna designed for your lifestyle.
            </p>

            <ul className="space-y-2">
              {["Portable & foldable design", "Far-infrared full-body heat therapy", "Heats up in under 10 minutes", "Perfect for home, gym, or travel"].map((feature, index) => <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </li>)}
            </ul>

            {/* New Year Sale Banner */}
            <div className="bg-foreground text-background rounded-xl p-4">
              <h3 className="font-bold text-base mb-2">New Year Sale: Enter code CYBER to save $200</h3>
              <ul className="space-y-1.5">
                {["Enter promo code CYBER at checkout", "Free shipping nationwide", "50% off 3-year extended warranty", "0% financing up to 12 months"].map((item, index) => <li key={index} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-green-400" />
                    {item}
                  </li>)}
              </ul>
            </div>

            {/* Exclusive Offer Card */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">Exclusive Offer</h3>
                  <p className="text-muted-foreground text-xs">
                    Talk to our wellness specialist to unlock an exclusive discount.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                  <Headphones size={16} className="text-white" />
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3 h-10 text-sm font-medium" asChild>
                <a href="tel:808-300-6608">
                  <Calendar size={14} className="mr-2" />
                  Schedule a Call
                </a>
              </Button>
            </div>



            {/* Shipping & Trust Features */}
            <div className="bg-card rounded-xl p-4 border border-border">
              {/* Ships By */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <Truck className="text-foreground" size={16} />
                <span className="font-semibold text-foreground text-sm">Ships in 5 Business Days</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full ml-auto">
                  <Check size={12} />
                  In Stock
                </span>
              </div>

              {/* Trust Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Shield size={14} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">1 Year Warranty</span>
                </div>
                <div className="flex items-start gap-2">
                  <Headphones size={14} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">100% U.S.-Based Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">Ships Worldwide</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench size={14} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">Nationwide Repairs</span>
                </div>
              </div>
            </div>

            {/* HSA/FSA Banner */}
            <div className="flex items-center justify-center gap-2 py-2 text-xs flex-wrap">
              <span className="font-semibold text-foreground">HSA/FSA eligible</span>
              <span className="text-primary">✦</span>
              <span className="text-muted-foreground">Save an average of 30%</span>
              <span className="text-primary underline cursor-pointer font-medium">Learn more</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Column with Sticky Right */}
        <div className="hidden lg:grid lg:grid-cols-[1fr,420px] gap-10 items-start">
          {/* Left Column - Product Images */}
          <div className="sticky top-24">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-muted border border-border" ref={desktopRef}>
                <div className="flex">
                  {images.map((img, index) => <div key={index} className="flex-[0_0_100%] min-w-0">
                      <img src={img} alt="Healing Sauna GO - Black" className="w-full h-auto aspect-square object-cover" />
                    </div>)}
                </div>
                
                {/* Navigation Arrows */}
                <button onClick={scrollPrevDesktop} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={scrollNextDesktop} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-4">
                {images.map((img, index) => <button key={index} onClick={() => scrollToDesktop(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImageDesktop === index ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>)}
              </div>
            </div>
          </div>

          {/* Right Column - Product Info & Purchase Options */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1 className="text-3xl font-bold text-foreground leading-tight">Healing Sauna</h1>
                <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2.5 py-1.5 rounded-full">
                  <Check size={12} />
                  In Stock
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-muted-foreground text-sm underline cursor-pointer">
                  4.9 Stars (127 Reviews)
                </span>
              </div>


              {/* Pricing */}
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <span className="text-3xl font-bold text-foreground">${totalPrice.toLocaleString()}</span>
                <span className="text-muted-foreground line-through">$2,999</span>
                <span className="text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan px-2 py-1 rounded">
                  $699 off
                </span>
              </div>

              {/* Product Description */}
              <div>
                <p className="text-muted-foreground mb-4">
                  Rejuvenate, detox, and recover anywhere with a premium far-infrared sauna designed for your lifestyle.
                </p>

                <ul className="space-y-2">
                  {["Portable & foldable design", "Far-infrared full-body heat therapy", "Heats up in under 10 minutes", "Perfect for home, gym, or travel"].map((feature, index) => <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      {feature}
                    </li>)}
                </ul>

                <button className="text-sm text-primary font-medium mt-3 hover:underline">
                  View More Details
                </button>
              </div>

              {/* Add to Cart Button - Shopify Buy Button (Desktop) */}
              <div id="desktop-add-to-cart" className="w-full min-h-[56px]" />

            </div>

            {/* New Year Sale Banner */}
            <div className="bg-foreground text-background rounded-xl p-5">
              <h3 className="font-bold text-lg mb-3">New Year Sale: Save $200 off</h3>
              <ul className="space-y-2">
                {["Enter code \"CYBER\" at checkout", "Free shipping nationwide", "Free 1 Year Warranty", "30 Day Money Back Guarantee"].map((item, index) => <li key={index} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-green-400" />
                    {item}
                  </li>)}
              </ul>
            </div>

            {/* Exclusive Offer Card */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">Exclusive Offer</h3>
                  <p className="text-muted-foreground text-sm">
                    Talk to our wellness specialist to unlock an exclusive discount.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                  <Headphones size={20} className="text-white" />
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 h-11 text-sm font-medium">
                <Calendar size={16} className="mr-2" />
                Schedule a Call
              </Button>
            </div>



            {/* Shipping & Trust Features */}
            <div className="bg-card rounded-xl p-5 border border-border">
              {/* Ships By */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
                <Truck className="text-foreground" size={18} />
                <span className="font-semibold text-foreground text-sm">Ships by Jan 12th</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full ml-auto">
                  <Check size={12} />
                  In Stock
                </span>
              </div>

              {/* Trust Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Shield size={16} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">1 Year Warranty</span>
                </div>
                <div className="flex items-start gap-2">
                  <Headphones size={16} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">100% U.S.-Based Customer Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">Ships Worldwide</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench size={16} className="text-muted-foreground mt-0.5" />
                  <span className="text-xs text-foreground">Nationwide Repair Network</span>
                </div>
              </div>
            </div>

            {/* HSA/FSA Banner */}
            <div className="flex items-center justify-center gap-2 py-2 text-xs">
              <span className="font-semibold text-foreground">HSA/FSA eligible</span>
              <span className="text-primary">✦</span>
              <span className="text-muted-foreground">Save an average of 30%</span>
              <span className="text-primary underline cursor-pointer font-medium">Learn more</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductPageLayout;