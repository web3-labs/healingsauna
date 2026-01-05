import { Button } from "@/components/ui/button";
import { Truck, Shield, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan" />
      <div className="absolute inset-0 bg-white/5 opacity-30" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      
      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Healing Sauna Lifestyle
          </h2>
          
          <p className="text-white/80 text-lg mb-8">
            Transform your recovery routine. Experience the benefits of premium far-infrared therapy 
            in the comfort of your own home.
          </p>

          {/* Price reminder */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-white/60 line-through">$2,999</span>
            <span className="text-2xl font-bold text-white">$2,300</span>
            <span className="bg-white text-primary text-sm font-bold px-3 py-1 rounded-full">
              Save $699
            </span>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-12 shadow-xl hover:shadow-2xl transition-all"
            >
              Buy Now — $2,300
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Truck size={18} />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>Ships in 2-3 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
