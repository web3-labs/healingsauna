import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Shield, 
  Check, 
  Truck, 
  Headphones, 
  MapPin, 
  Wrench,
  ChevronRight,
  Calendar
} from "lucide-react";
import { useState } from "react";

const PurchaseSection = () => {
  const [protectionPlan, setProtectionPlan] = useState(false);
  
  const basePrice = 2300;
  const protectionPrice = 199;
  const totalPrice = protectionPlan ? basePrice + protectionPrice : basePrice;

  return (
    <section className="section-light py-8 md:py-16">
      <div className="container-section">
        <div className="max-w-xl mx-auto space-y-6">
          
          {/* Exclusive Offer Card */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Exclusive Offer</h3>
                <p className="text-muted-foreground text-sm">
                  Talk to our wellness specialist to unlock an exclusive discount.
                </p>
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                <Headphones size={24} className="text-white" />
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4 h-12 text-base font-medium">
              <Calendar size={18} className="mr-2" />
              Schedule a Call
            </Button>
          </div>

          {/* Protection Plan */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={24} />
              <h3 className="text-lg font-bold text-foreground">Add Protection Plan</h3>
            </div>
            
            <label className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <Checkbox 
                  checked={protectionPlan}
                  onCheckedChange={(checked) => setProtectionPlan(checked as boolean)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="font-medium text-foreground">3-Year Protection Plan</span>
              </div>
              <span className="font-bold text-foreground">${protectionPrice}</span>
            </label>
            
            <p className="text-muted-foreground text-xs mt-3">
              What's Covered? <span className="text-primary underline cursor-pointer">Learn more</span>
            </p>
          </div>

          {/* Price Summary */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            {/* Current Price */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <span className="text-2xl font-bold text-foreground">${totalPrice.toLocaleString()} USD</span>
              <span className="text-muted-foreground line-through text-sm">$2,999</span>
              <span className="text-xs font-bold bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-2 py-1 rounded">
                ${699 - (protectionPlan ? 0 : 0)} off
              </span>
            </div>

            {/* Financing Option */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-xl mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-border">
                  <span className="text-xs font-bold text-primary">0%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">0% interest for 12 months</p>
                  <p className="text-xs text-muted-foreground">
                    As low as <span className="font-semibold">${Math.round(totalPrice / 12)}/mo*</span>
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </div>

            {/* Add to Cart Button */}
            <Button variant="hero" size="xl" className="w-full">
              Add To Cart
            </Button>
          </div>

          {/* Shipping & Trust Features */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            {/* Ships By */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <Truck className="text-foreground" size={20} />
              <span className="font-semibold text-foreground">Ships by Jan 12th</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full ml-auto">
                <Check size={12} />
                In Stock
              </span>
            </div>

            {/* Trust Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-muted-foreground mt-0.5" />
                <span className="text-sm text-foreground">2-Year Warranty</span>
              </div>
              <div className="flex items-start gap-3">
                <Headphones size={18} className="text-muted-foreground mt-0.5" />
                <span className="text-sm text-foreground">100% U.S.-Based Customer Support</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-muted-foreground mt-0.5" />
                <span className="text-sm text-foreground">Ships Worldwide</span>
              </div>
              <div className="flex items-start gap-3">
                <Wrench size={18} className="text-muted-foreground mt-0.5" />
                <span className="text-sm text-foreground">Nationwide Repair Network</span>
              </div>
            </div>
          </div>

          {/* HSA/FSA Banner */}
          <div className="flex items-center justify-center gap-2 py-3 text-sm">
            <span className="font-semibold text-foreground">HSA/FSA eligible</span>
            <span className="text-primary">✦</span>
            <span className="text-muted-foreground">Save an average of 30%</span>
            <span className="text-primary underline cursor-pointer font-medium">Learn more</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
