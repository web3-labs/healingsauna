import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, Tag } from "lucide-react";
import { useEffect } from "react";

// Shopify configuration
const SHOPIFY_DOMAIN = "healing-sauna.myshopify.com";
const VARIANT_ID = "44599449387101";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, discount, subtotal, total } = useCart();

  const handleCheckout = () => {
    // Build Shopify cart URL with quantities
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    if (totalQuantity > 0) {
      window.open(
        `https://${SHOPIFY_DOMAIN}/cart/${VARIANT_ID}:${totalQuantity}`,
        "_blank"
      );
    }
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Cart</h2>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <X size={18} className="text-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Button onClick={closeCart} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground leading-tight mb-2">
                      {item.name}
                    </h3>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus size={14} className="text-foreground" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus size={14} className="text-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <span className="font-semibold text-foreground">
                      ${(item.price * item.quantity).toLocaleString()}.00
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Discount Applied */}
            {discount && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <Tag size={14} className="text-foreground" />
                  <span className="font-medium text-foreground">{discount.code}</span>
                </div>
                <span className="text-foreground">-${discount.amount.toLocaleString()}.00</span>
              </div>
            )}

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">SUBTOTAL</span>
              <span className="text-lg font-bold text-foreground">
                ${total.toLocaleString()}.00
              </span>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">
                Special instructions for seller
              </label>
              <textarea
                className="w-full h-16 rounded-lg border border-border bg-background p-2 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder=""
              />
            </div>

            {/* Note */}
            <p className="text-xs text-muted-foreground text-center">
              Shipping and discount codes are added at checkout.
            </p>

            {/* Checkout Button */}
            <Button 
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
