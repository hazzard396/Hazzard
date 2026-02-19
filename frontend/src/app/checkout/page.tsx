"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiArrowLeft, 
  FiLock, 
  FiCreditCard, 
  FiShield,
  FiTruck,
  FiMapPin,
  FiMail,
  FiPhone,
  FiUser,
  FiCheck
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CheckoutItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

export default function CheckoutPage() {
  const [orderItems] = useState<CheckoutItem[]>([
    {
      id: 1,
      name: "Apple iPhone 15",
      price: 599,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80",
      variant: "Blue, 128GB",
    },
    {
      id: 2,
      name: "Apple iPad Air",
      price: 499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&q=80",
      variant: "Space Gray, 256GB",
    },
    {
      id: 3,
      name: "Apple Watch SE",
      price: 299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&q=80",
      variant: "Midnight, 44mm",
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState<"card" | "paypal" | "apple">("card");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to success page or show confirmation
    console.log("Order placed successfully!");
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/cart" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiLock className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FiMail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Contact Information</h2>
                    <p className="text-sm text-muted-foreground">We'll send order confirmation here</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <FiMail className="h-4 w-4 text-muted-foreground" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <FiPhone className="h-4 w-4 text-muted-foreground" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="h-11"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FiTruck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Shipping Address</h2>
                    <p className="text-sm text-muted-foreground">Where should we deliver your order?</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street, Apt 4B"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        placeholder="NY"
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        placeholder="10001"
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <select
                      id="country"
                      required
                      className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FiCreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Payment Method</h2>
                    <p className="text-sm text-muted-foreground">Choose how you'd like to pay</p>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-3 mb-6">
                  <label 
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedPayment === "card" 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selectedPayment === "card"}
                      onChange={(e) => setSelectedPayment(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <FiCreditCard className="h-5 w-5 text-foreground" />
                    <span className="flex-1 font-medium text-foreground">Credit / Debit Card</span>
                    <div className="flex gap-2">
                      <div className="w-8 h-6 rounded bg-muted flex items-center justify-center text-[8px] font-bold">VISA</div>
                      <div className="w-8 h-6 rounded bg-muted flex items-center justify-center text-[8px] font-bold">MC</div>
                      <div className="w-8 h-6 rounded bg-muted flex items-center justify-center text-[8px] font-bold">AMEX</div>
                    </div>
                  </label>

                  <label 
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedPayment === "paypal" 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={selectedPayment === "paypal"}
                      onChange={(e) => setSelectedPayment(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 4.47a.773.773 0 0 1 .763-.64h5.91c1.844 0 3.298.471 4.32 1.401.959.875 1.379 2.074 1.196 3.402-.227 1.664-.845 2.875-1.834 3.6-1.043.766-2.604 1.155-4.64 1.155h-1.612a.638.638 0 0 0-.631.74l-.318 2.02-.013.083-.534 3.38a.64.64 0 0 1-.633.74zm9.149-10.547c-.072.445-.167.875-.283 1.285a6.894 6.894 0 0 1-.567 1.295c-.261.494-.578.94-.944 1.328-.348.368-.748.677-1.187.919a6.11 6.11 0 0 1-1.516.617c-.57.148-1.174.223-1.795.223h-.96a.64.64 0 0 0-.632.74l-.534 3.38a.473.473 0 0 1-.466.394H5.635a.64.64 0 0 1-.633-.74l.534-3.38a.773.773 0 0 1 .763-.64h1.033c1.844 0 3.298-.471 4.32-1.401.959-.875 1.379-2.074 1.196-3.402z"/>
                    </svg>
                    <span className="flex-1 font-medium text-foreground">PayPal</span>
                  </label>

                  <label 
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedPayment === "apple" 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="apple"
                      checked={selectedPayment === "apple"}
                      onChange={(e) => setSelectedPayment(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span className="flex-1 font-medium text-foreground">Apple Pay</span>
                  </label>
                </div>

                {/* Card Details Form */}
                {selectedPayment === "card" && (
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name *</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date *</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          maxLength={4}
                          required
                          className="h-11"
                        />
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div className="pt-4 border-t border-border">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sameAsShipping}
                          onChange={(e) => setSameAsShipping(e.target.checked)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium text-foreground">
                          Billing address is same as shipping
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-foreground mb-6">Order Summary</h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-muted border border-border">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        {item.quantity > 1 && (
                          <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                            {item.quantity}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-foreground truncate">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.variant}
                          </p>
                        )}
                        <p className="text-sm font-semibold text-foreground mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-foreground">
                      {shipping === 0 ? (
                        <span className="text-green-500">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground">${total.toFixed(2)}</span>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 rounded-xl text-base font-semibold"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FiLock className="h-4 w-4" />
                      Place Order
                    </span>
                  )}
                </Button>

                {/* Security Badge */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-3">
                    <FiShield className="h-4 w-4" />
                    <span>256-bit SSL Encryption</span>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    Your payment information is secure and encrypted
                  </p>
                </div>

                {/* Free Shipping Notice */}
                {shipping > 0 && subtotal < 100 && (
                  <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <p className="text-xs text-orange-600 dark:text-orange-400 text-center">
                      Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
