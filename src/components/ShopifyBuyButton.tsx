import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
    shopifyClient: any;
    shopifyUI: any;
  }
}

const ShopifyBuyButton = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'cbfvfe-du.myshopify.com',
        storefrontAccessToken: '3a7832e2403e42affa44670f6f5daec1',
      });

      window.shopifyClient = client;

      const options = {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0",
                "margin-bottom": "0"
              },
              "text-align": "left"
            },
            "button": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px"
            },
            "quantityInput": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px"
            }
          },
          "contents": {
            "img": false,
            "button": false,
            "buttonWithQuantity": true,
            "title": false,
            "price": false
          },
          "text": { "button": "Add to cart" }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px"
            },
            "quantityInput": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px"
            }
          },
          "text": { "button": "Add to cart" }
        },
        "cart": {
          "styles": {
            "button": {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px"
            },
            "title": { "color": "#000000" },
            "header": { "color": "#000000" },
            "lineItems": { "color": "#000000" },
            "subtotalText": { "color": "#000000" },
            "subtotal": { "color": "#000000" },
            "notice": { "color": "#000000" },
            "currency": { "color": "#000000" },
            "close": { "color": "#000000", ":hover": { "color": "#000000" } },
            "empty": { "color": "#000000" },
            "noteDescription": { "color": "#000000" },
            "discountText": { "color": "#000000" },
            "discountIcon": { "fill": "#000000" },
            "discountAmount": { "color": "#000000" }
          },
          "text": { "total": "Subtotal", "button": "Checkout" },
          "contents": { "note": true },
          "popup": false
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#000000",
              ":hover": { "background-color": "#000000" },
              ":focus": { "background-color": "#000000" }
            },
            "count": { "font-size": "18px" }
          }
        },
        "lineItem": {
          "styles": {
            "variantTitle": { "color": "#000000" },
            "title": { "color": "#000000" },
            "price": { "color": "#000000" },
            "fullPrice": { "color": "#000000" },
            "discount": { "color": "#000000" },
            "discountIcon": { "fill": "#000000" },
            "quantity": { "color": "#000000" },
            "quantityIncrement": { "color": "#000000", "border-color": "#000000" },
            "quantityDecrement": { "color": "#000000", "border-color": "#000000" },
            "quantityInput": { "color": "#000000", "border-color": "#000000" }
          }
        }
      };

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        window.shopifyUI = ui;

        const initProductButtons = () => {
          // Create for mobile add to cart
          const mobileBtn = document.getElementById('mobile-add-to-cart');
          if (mobileBtn && !mobileBtn.hasChildNodes()) {
            ui.createComponent('product', {
              id: '7918751318109',
              node: mobileBtn,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: options
            });
          }

          // Create for desktop add to cart
          const desktopBtn = document.getElementById('desktop-add-to-cart');
          if (desktopBtn && !desktopBtn.hasChildNodes()) {
            ui.createComponent('product', {
              id: '7918751318109',
              node: desktopBtn,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: options
            });
          }

          // Create for final CTA
          const finalCtaNode = document.getElementById('final-cta-shopify-button');
          if (finalCtaNode && !finalCtaNode.hasChildNodes()) {
            ui.createComponent('product', {
              id: '7918751318109',
              node: finalCtaNode,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: options
            });
          }

          // Create for sticky button
          const stickyNode = document.getElementById('sticky-shopify-button');
          if (stickyNode && !stickyNode.hasChildNodes()) {
            ui.createComponent('product', {
              id: '7918751318109',
              node: stickyNode,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                ...options,
                product: {
                  ...options.product,
                  contents: {
                    img: false,
                    button: true,
                    buttonWithQuantity: false,
                    title: false,
                    price: false
                  },
                  text: { "button": "Buy Now" }
                }
              }
            });
          }
        };

        initProductButtons();
        
        // Re-initialize periodically for dynamically rendered buttons
        const interval = setInterval(initProductButtons, 1000);
        setTimeout(() => clearInterval(interval), 10000);
        
        // Watch for DOM changes
        const observer = new MutationObserver(initProductButtons);
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }

    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return null;
};

export default ShopifyBuyButton;
