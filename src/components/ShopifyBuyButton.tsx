import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
    shopifyClient: any;
    shopifyUI: any;
  }
}

// Shopify configuration
const SHOPIFY_DOMAIN = "healingsauna.myshopify.com";

const ShopifyBuyButton = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Load the Buy Button script from Shopify
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    const loadShopifyScript = () => {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadUI();
        }
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        script.onload = loadUI;
        document.head.appendChild(script);
      }
    };

    const loadUI = () => {
      window.ShopifyBuy.UI.onReady(window.shopifyClient).then(ShopifyBuyInit);
    };

    const ShopifyBuyInit = () => {
      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: '304f2eb91ce17bd5aefc7936d95af8fb',
      });
      
      window.shopifyClient = client;
      
      window.ShopifyBuy.UI.onReady(client).then(function(ui: any) {
        window.shopifyUI = ui;
        
        // Create cart with toggle
        ui.createComponent('cart', {
          node: document.getElementById('shopify-cart-container'),
          options: {
            cart: {
              popup: true,
              styles: {
                button: {
                  "background-color": "#0ea5e9",
                  ":hover": {
                    "background-color": "#0284c7",
                  },
                  "border-radius": "8px",
                  "font-weight": "600",
                },
              },
            },
            toggle: {
              sticky: true,
              styles: {
                toggle: {
                  "background-color": "#0ea5e9",
                  ":hover": {
                    "background-color": "#0284c7",
                  },
                },
              },
            },
          },
        });

        // Initialize product buttons
        initProductButtons(ui);
        
        // Re-initialize periodically for dynamically rendered buttons
        const interval = setInterval(() => initProductButtons(ui), 1000);
        setTimeout(() => clearInterval(interval), 10000);
        
        // Watch for DOM changes
        const observer = new MutationObserver(() => initProductButtons(ui));
        observer.observe(document.body, { childList: true, subtree: true });
      });
    };

    const initProductButtons = (ui: any) => {
      // Main product buttons
      const containers = document.querySelectorAll('.shopify-product-button:empty');
      containers.forEach((container) => {
        ui.createComponent('product', {
          id: '7918751318109',
          node: container,
          moneyFormat: '${{amount}}',
          options: {
            product: {
              iframe: false,
              contents: {
                img: false,
                title: false,
                price: false,
                description: false,
                button: true,
                buttonWithQuantity: false,
                quantity: false,
              },
              styles: {
                button: {
                  "background": "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",
                  ":hover": {
                    "background": "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
                  },
                  "border-radius": "8px",
                  "padding": "16px 32px",
                  "font-size": "16px",
                  "font-weight": "700",
                  "width": "100%",
                },
              },
              text: {
                button: 'Add to Cart',
              },
            },
            cart: {
              popup: true,
            },
          },
        });
      });

      // Final CTA button
      const finalCta = document.getElementById('final-cta-shopify-button');
      if (finalCta && !finalCta.hasChildNodes()) {
        ui.createComponent('product', {
          id: '7918751318109',
          node: finalCta,
          moneyFormat: '${{amount}}',
          options: {
            product: {
              iframe: false,
              contents: {
                img: false,
                title: false,
                price: false,
                description: false,
                button: true,
                buttonWithQuantity: false,
                quantity: false,
              },
              styles: {
                button: {
                  "background-color": "#ffffff",
                  "color": "#0ea5e9",
                  ":hover": {
                    "background-color": "#f1f5f9",
                  },
                  "border-radius": "9999px",
                  "padding": "16px 48px",
                  "font-size": "18px",
                  "font-weight": "700",
                },
              },
              text: {
                button: 'Add to Cart — $2,300',
              },
            },
            cart: {
              popup: true,
            },
          },
        });
      }

      // Sticky button
      const sticky = document.getElementById('sticky-shopify-button');
      if (sticky && !sticky.hasChildNodes()) {
        ui.createComponent('product', {
          id: '7918751318109',
          node: sticky,
          moneyFormat: '${{amount}}',
          options: {
            product: {
              iframe: false,
              contents: {
                img: false,
                title: false,
                price: false,
                description: false,
                button: true,
                buttonWithQuantity: false,
                quantity: false,
              },
              styles: {
                button: {
                  "background": "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",
                  ":hover": {
                    "background": "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
                  },
                  "border-radius": "8px",
                  "padding": "12px 24px",
                  "font-size": "14px",
                  "font-weight": "700",
                },
              },
              text: {
                button: 'Add to Cart',
              },
            },
            cart: {
              popup: true,
            },
          },
        });
      }
    };

    loadShopifyScript();
  }, []);

  return <div id="shopify-cart-container" className="fixed bottom-4 right-4 z-[100]" />;
};

export default ShopifyBuyButton;
