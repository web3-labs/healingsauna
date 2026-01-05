import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
    shopifyClient: any;
    shopifyUI: any;
  }
}

// Healing Sauna Shopify configuration
const SHOPIFY_DOMAIN = "healingsauna.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "8b5c81c9a8bff36a2c6b0e9a2b8c5f3e"; // Public storefront token
const PRODUCT_ID = "gid://shopify/Product/7918751318109";

export const useShopifyBuyButton = () => {
  const clientRef = useRef<any>(null);
  const uiRef = useRef<any>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Load Shopify Buy Button SDK
    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.ShopifyBuy) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Shopify SDK"));
        document.head.appendChild(script);
      });
    };

    const initializeShopify = async () => {
      if (isInitialized.current) return;

      try {
        await loadScript();

        const client = window.ShopifyBuy.buildClient({
          domain: SHOPIFY_DOMAIN,
          storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
        });

        clientRef.current = client;
        window.shopifyClient = client;

        // Create UI instance
        const ui = window.ShopifyBuy.UI.init(client);
        uiRef.current = ui;
        window.shopifyUI = ui;

        isInitialized.current = true;
      } catch (error) {
        console.error("Failed to initialize Shopify:", error);
      }
    };

    initializeShopify();
  }, []);

  const addToCart = useCallback(() => {
    const ui = uiRef.current || window.shopifyUI;
    
    if (!ui) {
      // Fallback: Open Shopify cart directly
      window.open(
        `https://${SHOPIFY_DOMAIN}/cart/add?id=44599449387101&quantity=1`,
        "_blank"
      );
      return;
    }

    // Create cart component if not exists
    ui.createComponent("product", {
      id: PRODUCT_ID,
      node: document.createElement("div"),
      moneyFormat: "%24%7B%7Bamount%7D%7D",
      options: {
        product: {
          iframe: false,
          contents: {
            img: false,
            title: false,
            price: false,
          },
          events: {
            afterInit: (product: any) => {
              // Auto-add to cart after initialization
              product.addVariantToCart(product.selectedVariant);
            },
          },
        },
        cart: {
          popup: true,
          startOpen: true,
        },
      },
    });
  }, []);

  const openCheckout = useCallback(() => {
    // Go straight to Shopify-hosted checkout (no shop.app universal redirect)
    window.open(
      `https://${SHOPIFY_DOMAIN}/cart/44599449387101:1?checkout&channel=buy_button&skip_shop_pay=true&shop_pay_checkout_as_guest=true`,
      "_blank"
    );
  }, []);

  return {
    addToCart,
    openCheckout,
    isReady: isInitialized.current,
  };
};

export default useShopifyBuyButton;
