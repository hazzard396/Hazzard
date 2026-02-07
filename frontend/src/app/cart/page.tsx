"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMinus, FiPlus, FiX, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Apple iPhone 15",
      price: 599,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
      color: "Blue",
      size: "128GB",
    },
    {
      id: 2,
      name: "Apple iPad Air",
      price: 499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
      color: "Space Gray",
      size: "256GB",
    },
    {
      id: 3,
      name: "Apple Watch SE",
      price: 299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
      color: "Midnight",
      size: "44mm",
    },
    {
      id: 4,
      name: "Sony Playstation 5",
      price: 799,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80",
    },
    {
      id: 5,
      name: 'Apple iMac 20"',
      price: 2999,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
      color: "Silver",
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 15 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <FiArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <FiShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link href="/shop">
              <Button size="lg" className="rounded-full">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-2xl p-4 md:p-6 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "backwards" }}
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-semibold text-base md:text-lg line-clamp-2">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 hover:bg-destructive text-destructive hover:text-destructive-foreground flex items-center justify-center transition-colors"
                            aria-label="Remove item"
                          >
                            <FiX className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Variant Info */}
                        {(item.color || item.size) && (
                          <div className="flex flex-wrap gap-2 mb-2 text-sm text-muted-foreground">
                            {item.color && <span>Color: {item.color}</span>}
                            {item.size && <span>• Size: {item.size}</span>}
                          </div>
                        )}

                        {/* Price */}
                        <p className="text-lg md:text-xl font-bold">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground mr-2">
                            Qty:
                          </span>
                          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 rounded-md bg-background hover:bg-accent flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-md bg-background hover:bg-accent flex items-center justify-center transition-colors"
                              aria-label="Increase quantity"
                            >
                              <FiPlus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Total</p>
                          <p className="text-lg font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: "200ms", animationFillMode: "backwards" }}>
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="flex-1 h-10 rounded-lg border border-input px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                    <Button variant="outline" className="rounded-lg">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout">
                  <Button
                    size="lg"
                    className="w-full rounded-xl text-base font-semibold"
                  >
                    Proceed to Checkout
                  </Button>
                </Link>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    We accept
                  </p>
                  <div className="flex justify-center gap-3 opacity-60">
                    <div className="w-12 h-8 rounded bg-muted flex items-center justify-center text-[10px] font-bold">
                      VISA
                    </div>
                    <div className="w-12 h-8 rounded bg-muted flex items-center justify-center text-[10px] font-bold">
                      MC
                    </div>
                    <div className="w-12 h-8 rounded bg-muted flex items-center justify-center text-[10px] font-bold">
                      AMEX
                    </div>
                    <div className="w-12 h-8 rounded bg-muted flex items-center justify-center text-[10px] font-bold">
                      PYPL
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
