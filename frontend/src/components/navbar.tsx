"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import {
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
  FiUserPlus,
  FiLogIn,
  FiLogOut,
  FiTrash2,
  FiPlus,
  FiMinus,
  FiSettings,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Apple iPhone 15",
      price: 599,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80",
      variant: "Gold Edition, 256GB",
    },
    {
      id: 2,
      name: "Apple iPad Air",
      price: 499,
      quantity: 9,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&q=80",
      variant: "Silver, 64GB",
    },
    {
      id: 3,
      name: "Apple Watch SE",
      price: 199,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&q=80",
      variant: "Purple, GPS",
    },
    {
      id: 4,
      name: 'Apple iMac 20"',
      price: 2999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&q=80",
      variant: "512GB, 32GB RAM",
    },
  ]);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sneakers", href: "/sneakers" },
    { name: "Clothing", href: "/clothing" },
    { name: "Pre Order", href: "/pre-order" },
  ];

  const visibleMenuItems = menuItems.slice(0, 3);
  const moreMenuItems = menuItems.slice(3);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        {/* Top Bar */}
        <div className="border-b border-border/40 lg:border-none">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              {/* Desktop Search Bar */}
              <div className="hidden lg:flex items-center flex-1 max-w-md">
                <div className="relative w-full">
                  <FiSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search in all categories"
                    className="h-10 w-full rounded-lg border border-input pl-11 pr-4 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-background transition-colors"
                  />
                </div>
              </div>

              {/* Logo - Center on Desktop, Left on Mobile */}
              <Link
                href="/"
                className="flex flex-shrink-0 items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
              >
                <div className="relative h-10 w-32">
                  <Image
                    src={Logo}
                    alt="Hazzard Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Right Actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Search Icon - Mobile/Tablet Only */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full"
                  onClick={() => setIsSearchModalOpen(true)}
                >
                  <FiSearch className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>

                {/* Cart with Price */}
                <DropdownMenu open={isCartOpen} onOpenChange={setIsCartOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative gap-2 rounded-full px-3 h-10"
                    >
                      <div className="relative">
                        <FiShoppingCart className="h-5 w-5" />
                        {cartItemCount > 0 && (
                          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                            {cartItemCount}
                          </span>
                        )}
                      </div>
                      <span className="hidden sm:inline text-sm font-medium">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-[420px] max-w-[calc(100vw-1rem)] p-0 mr-2"
                    sideOffset={8}
                  >
                    <div className="bg-card rounded-xl overflow-hidden">
                      {/* Cart Header */}
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-base sm:text-lg">
                            Your shopping cart
                          </h3>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {cartItemCount}{" "}
                            {cartItemCount === 1 ? "item" : "items"}
                          </span>
                        </div>
                      </div>

                      {/* Cart Items */}
                      {cartItems.length === 0 ? (
                        <div className="px-4 sm:px-6 py-8 sm:py-12 text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-muted flex items-center justify-center">
                            <FiShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Your cart is empty
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Add items to get started
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="max-h-[50vh] sm:max-h-[440px] overflow-y-auto">
                            {cartItems.map((item) => (
                              <div
                                key={item.id}
                                className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border last:border-b-0 hover:bg-accent/30 transition-colors"
                              >
                                <div className="flex gap-3 sm:gap-4 items-start">
                                  {/* Product Image */}
                                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-muted">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>

                                  {/* Product Details */}
                                  <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                                    <h4 className="font-semibold text-sm mb-0.5 sm:mb-1 truncate pr-2">
                                      {item.name}
                                    </h4>
                                    {item.variant && (
                                      <p className="text-xs text-muted-foreground mb-2 sm:mb-3">
                                        {item.variant}
                                      </p>
                                    )}

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                      <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            updateQuantity(item.id, -1);
                                          }}
                                          disabled={item.quantity <= 1}
                                          className="w-6 h-6 rounded-md bg-background hover:bg-accent flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                          aria-label="Decrease quantity"
                                        >
                                          <FiMinus className="h-3 w-3" />
                                        </button>
                                        <span className="w-8 text-center text-xs font-semibold">
                                          {item.quantity}
                                        </span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            updateQuantity(item.id, 1);
                                          }}
                                          className="w-6 h-6 rounded-md bg-background hover:bg-accent flex items-center justify-center transition-colors"
                                          aria-label="Increase quantity"
                                        >
                                          <FiPlus className="h-3 w-3" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Price & Remove */}
                                  <div className="flex flex-col items-end gap-1 sm:gap-2 pt-0.5 sm:pt-1">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCart(item.id);
                                      }}
                                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:bg-destructive/10 hover:text-destructive flex items-center justify-center transition-colors"
                                      aria-label="Remove item"
                                    >
                                      <FiTrash2 className="h-3.5 w-3.5" />
                                    </button>
                                    <span className="font-bold text-sm sm:text-base">
                                      $
                                      {(
                                        item.price * item.quantity
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Cart Footer */}
                          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-muted/20">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                              <span className="font-semibold text-base">
                                Total
                              </span>
                              <span className="text-xl sm:text-2xl font-bold">
                                ${cartTotal.toLocaleString()}
                              </span>
                            </div>
                            <Link
                              href="/cart"
                              onClick={() => setIsCartOpen(false)}
                            >
                              <Button className="w-full h-11 sm:h-12 rounded-xl text-sm sm:text-base font-semibold">
                                See your cart
                              </Button>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Account Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="gap-1 rounded-full px-3 h-10"
                    >
                      <FiUser className="h-5 w-5" />
                      <span className="hidden md:inline text-sm font-medium">
                        Account
                      </span>
                      <FiChevronDown className="hidden md:inline h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-full">
                    {" "}
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer">
                        <FiSettings className="text-black"></FiSettings> My
                        Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/login" className="cursor-pointer">
                        <FiLogIn className="text-black"></FiLogIn> Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/signup" className="cursor-pointer">
                        <FiUserPlus className="text-black"></FiUserPlus> Signup
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mobile Menu Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Toggle menu</span>
                  {isMobileMenuOpen ? (
                    <FiX className="h-5 w-5" />
                  ) : (
                    <FiMenu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar - Desktop */}
        <div className="hidden lg:block border-t border-border/40">
          <div className="container mx-auto px-4">
            <div className="flex h-12 items-center justify-center">
              <nav className="flex items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Collapsible */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Card */}
          <div className="fixed left-4 right-4 top-20 z-40 lg:hidden animate-in slide-in-from-top-4 fade-in-0">
            <div className="relative rounded-2xl border border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Menu Content */}
              <div className="p-6 pt-6">
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary/80"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Connect Button */}
                <Button
                  className="w-full mt-6 rounded-xl h-12 text-base font-medium shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Search Modal - Mobile/Tablet Only */}
      {isSearchModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0 lg:hidden"
            onClick={() => setIsSearchModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="fixed left-1/2 top-20 z-50 w-full max-w-2xl -translate-x-1/2 px-4 animate-in fade-in-0 slide-in-from-top-4 lg:hidden">
            <div className="relative rounded-xl border border-border bg-background p-4 shadow-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <FiSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search in all categories"
                    autoFocus
                    className="h-12 w-full rounded-lg border border-input bg-background pl-12 pr-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setIsSearchModalOpen(false);
                      }
                    }}
                  />
                </div>
                <Button
                  className="h-12 px-6 rounded-lg"
                  onClick={() => {
                    // Handle search
                    setIsSearchModalOpen(false);
                  }}
                >
                  Search
                </Button>
              </div>

              {/* Popular Searches - Optional */}
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium text-muted-foreground">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Electronics", "Books", "Gaming", "Home Decor"].map(
                    (term) => (
                      <button
                        key={term}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80"
                        onClick={() => setIsSearchModalOpen(false)}
                      >
                        {term}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
