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

    const scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    let observer: MutationObserver | null = null;

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: "cbfvfe-du.myshopify.com",
        storefrontAccessToken: "3a7832e2403e42affa44670f6f5daec1",
      });

      window.shopifyClient = client;

      const dispatchShopifyAction = () => {
        window.dispatchEvent(new CustomEvent("shopify-action"));
      };

      // Add to Cart options
      const addToCartOptions = {
        product: {
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0",
                "margin-bottom": "0",
              },
              "text-align": "left",
            },
            button: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px",
            },
            quantityInput: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
            },
          },
          contents: {
            img: false,
            button: false,
            buttonWithQuantity: true,
            title: false,
            price: false,
          },
          text: { button: "Add to cart" },
          events: {
            addVariantToCart: dispatchShopifyAction,
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            button: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px",
            },
            quantityInput: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
            },
          },
          text: { button: "Add to cart" },
        },
        cart: {
          styles: {
            button: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px",
            },
            title: { color: "#000000" },
            header: { color: "#000000" },
            lineItems: { color: "#000000" },
            subtotalText: { color: "#000000" },
            subtotal: { color: "#000000" },
            notice: { color: "#000000" },
            currency: { color: "#000000" },
            close: { color: "#000000", ":hover": { color: "#000000" } },
            empty: { color: "#000000" },
            noteDescription: { color: "#000000" },
            discountText: { color: "#000000" },
            discountIcon: { fill: "#000000" },
            discountAmount: { color: "#000000" },
          },
          text: { total: "Subtotal", button: "Checkout" },
          contents: { note: true },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: {
              "background-color": "#000000",
              ":hover": { "background-color": "#000000" },
              ":focus": { "background-color": "#000000" },
            },
            count: { "font-size": "18px" },
          },
        },
        lineItem: {
          styles: {
            variantTitle: { color: "#000000" },
            title: { color: "#000000" },
            price: { color: "#000000" },
            fullPrice: { color: "#000000" },
            discount: { color: "#000000" },
            discountIcon: { fill: "#000000" },
            quantity: { color: "#000000" },
            quantityIncrement: { color: "#000000", "border-color": "#000000" },
            quantityDecrement: { color: "#000000", "border-color": "#000000" },
            quantityInput: { color: "#000000", "border-color": "#000000" },
          },
        },
      };

      // Buy Now options (goes directly to checkout)
      const buyNowOptions = {
        product: {
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
              },
            },
            button: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px",
            },
            quantityInput: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
            },
          },
          buttonDestination: "checkout",
          contents: {
            img: false,
            title: false,
            price: false,
          },
          text: { button: "Buy now" },
          events: {
            afterRender: dispatchShopifyAction,
          },
        },
        productSet: {
          styles: {
            products: {
              "@media (min-width: 601px)": {
                "margin-left": "-20px",
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            button: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px",
            },
            quantityInput: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
            },
          },
          text: { button: "Add to cart" },
        },
        option: {},
        cart: {
          styles: {
            button: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": { "background-color": "#000000" },
              "background-color": "#000000",
              ":focus": { "background-color": "#000000" },
              "border-radius": "40px",
            },
            title: { color: "#000000" },
            header: { color: "#000000" },
            lineItems: { color: "#000000" },
            subtotalText: { color: "#000000" },
            subtotal: { color: "#000000" },
            notice: { color: "#000000" },
            currency: { color: "#000000" },
            close: { color: "#000000", ":hover": { color: "#000000" } },
            empty: { color: "#000000" },
            noteDescription: { color: "#000000" },
            discountText: { color: "#000000" },
            discountIcon: { fill: "#000000" },
            discountAmount: { color: "#000000" },
          },
          text: { total: "Subtotal", button: "Checkout" },
          contents: { note: true },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: {
              "background-color": "#000000",
              ":hover": { "background-color": "#000000" },
              ":focus": { "background-color": "#000000" },
            },
            count: { "font-size": "18px" },
          },
        },
        lineItem: {
          styles: {
            variantTitle: { color: "#000000" },
            title: { color: "#000000" },
            price: { color: "#000000" },
            fullPrice: { color: "#000000" },
            discount: { color: "#000000" },
            discountIcon: { fill: "#000000" },
            quantity: { color: "#000000" },
            quantityIncrement: { color: "#000000", "border-color": "#000000" },
            quantityDecrement: { color: "#000000", "border-color": "#000000" },
            quantityInput: { color: "#000000", "border-color": "#000000" },
          },
        },
      };

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        window.shopifyUI = ui;

        const mountOnce = (nodeId: string, create: (node: HTMLElement) => void) => {
          const node = document.getElementById(nodeId) as HTMLElement | null;
          if (!node) return;

          // Prevent duplicates caused by async injection + repeated init calls
          if (node.dataset.shopifyMounted === "true") return;

          node.dataset.shopifyMounted = "true";

          // Add a sentinel child immediately so any legacy logic (e.g., hasChildNodes checks)
          // doesn't try to mount again before Shopify finishes injecting its iframe.
          const sentinel = document.createElement("span");
          sentinel.setAttribute("data-shopify-sentinel", "true");
          sentinel.style.display = "none";
          node.replaceChildren(sentinel);

          create(node);
        };

        const initProductButtons = () => {
          mountOnce("mobile-add-to-cart", (node) => {
            ui.createComponent("product", {
              id: "7918751318109",
              node,
              moneyFormat: "%24%7B%7Bamount%7D%7D",
              options: addToCartOptions,
            });
          });

          mountOnce("desktop-add-to-cart", (node) => {
            ui.createComponent("product", {
              id: "7918751318109",
              node,
              moneyFormat: "%24%7B%7Bamount%7D%7D",
              options: addToCartOptions,
            });
          });

          mountOnce("final-cta-shopify-button", (node) => {
            ui.createComponent("product", {
              id: "7918751318109",
              node,
              moneyFormat: "%24%7B%7Bamount%7D%7D",
              options: addToCartOptions,
            });
          });

          mountOnce("sticky-shopify-button", (node) => {
            ui.createComponent("product", {
              id: "7918751318109",
              node,
              moneyFormat: "%24%7B%7Bamount%7D%7D",
              options: buyNowOptions,
            });
          });
        };

        initProductButtons();

        // Watch for DOM changes (safe due to mountOnce guards)
        observer = new MutationObserver(initProductButtons);
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }

    function loadScript() {
      const existing = document.querySelector(
        `script[src="${scriptURL}"]`
      ) as HTMLScriptElement | null;

      if (existing) {
        if (window.ShopifyBuy?.UI) {
          ShopifyBuyInit();
        } else {
          existing.addEventListener("load", ShopifyBuyInit, { once: true });
        }
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      (document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]).appendChild(script);
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

    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
};

export default ShopifyBuyButton;
