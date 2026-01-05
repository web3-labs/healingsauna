import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import healingSaunaLogo from "@/assets/healing-sauna-logo.png";

declare global {
  interface Window {
    shopifyUI: any;
  }
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBuyNow = () => {
    // Dispatch event to hide sticky bar, then open Shopify cart
    window.dispatchEvent(new CustomEvent("shopify-action"));
    if (window.shopifyUI) {
      window.shopifyUI.openCart();
    } else {
      const heroSection = document.getElementById("hero");
      heroSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-white/5">
      <div className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={healingSaunaLogo} 
              alt="Healing Sauna" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Reviews
            </a>
            <a href="#faq" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-white/70 hover:text-white transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
              <Button variant="hero" size="lg" className="mt-2" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
