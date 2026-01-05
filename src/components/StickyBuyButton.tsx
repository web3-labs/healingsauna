import { useEffect, useState, useCallback } from "react";

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleScroll = useCallback(() => {
    // Show button after scrolling past hero section (approximately 600px)
    if (!dismissed) {
      setIsVisible(window.scrollY > 600);
    }
  }, [dismissed]);

  // Listen for shopify-action event to dismiss the sticky bar
  useEffect(() => {
    const handleShopifyAction = () => {
      setDismissed(true);
      setIsVisible(false);
    };

    window.addEventListener("shopify-action", handleShopifyAction);
    return () => window.removeEventListener("shopify-action", handleShopifyAction);
  }, []);

  // Also listen for Shopify cart open events
  useEffect(() => {
    const checkShopifyCart = () => {
      // Check if shopify cart was opened
      const cartFrame = document.querySelector('[class*="shopify-buy__cart"]');
      if (cartFrame) {
        setDismissed(true);
        setIsVisible(false);
      }
    };

    // Observe DOM for Shopify cart appearance
    const observer = new MutationObserver(checkShopifyCart);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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

          {/* CTA - Shopify Buy Button */}
          <div id="sticky-shopify-button" className="min-w-[140px]" />
        </div>
      </div>
    </div>
  );
};

export default StickyBuyButton;
