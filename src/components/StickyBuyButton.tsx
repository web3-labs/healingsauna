import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-md border-t border-white/10 py-3 md:py-4 animate-fade-in">
      <div className="container-section">
        <div className="flex items-center justify-between gap-4">
          {/* Product info - hidden on very small screens */}
          <div className="hidden sm:block">
            <div className="text-white font-semibold">Healing Sauna GO — Black</div>
            <div className="flex items-center gap-2">
              <span className="text-white/50 line-through text-sm">$2,999</span>
              <span className="text-lg font-bold gradient-text">$2,300</span>
            </div>
          </div>

          {/* Mobile price */}
          <div className="sm:hidden">
            <span className="text-lg font-bold gradient-text">$2,300</span>
            <span className="text-white/50 line-through text-sm ml-2">$2,999</span>
          </div>

          {/* CTA */}
          <Button variant="hero" size="lg" className="animate-pulse-glow">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyButton;
