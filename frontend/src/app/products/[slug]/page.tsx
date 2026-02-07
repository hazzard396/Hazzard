"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { cn } from "@/lib/utils";
import {
  allProducts,
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find product by slug
  const product = getProductBySlug(slug);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews"
  >("description");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The product you're looking for doesn't exist.
          </p>
          <Link href="/shop">
            <Button>Return to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const productImages = product.images || [product.image];
  const displayPrice = product.salePrice || product.price;
  const hasDiscount = !!product.salePrice;
  const discountPercentage = hasDiscount
    ? Math.round(((product.price - product.salePrice!) / product.price) * 100)
    : 0;

  // Get related products (same category, exclude current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/shop"
              className="hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted group"
            >
              <Image
                src={productImages[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    New
                  </span>
                )}
                {hasDiscount && (
                  <span className="inline-flex items-center rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
                    {discountPercentage}% OFF
                  </span>
                )}
                {product.badge && (
                  <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      "relative aspect-square rounded-lg overflow-hidden border-2 transition-all",
                      selectedImageIndex === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30",
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-foreground">
                ${displayPrice.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground">
                    Select Size
                  </label>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-sm text-primary hover:underline"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "h-12 rounded-lg border-2 text-sm font-medium transition-all",
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50 text-foreground",
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12 flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="h-12 w-16 flex items-center justify-center font-semibold border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-12 w-12 flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 h-14 text-base font-semibold rounded-xl"
                disabled={product.sizes && !selectedSize}
              >
                <FiShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-14 rounded-xl"
                aria-label="Add to wishlist"
              >
                <FiHeart className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-14 rounded-xl"
                aria-label="Share product"
              >
                <FiShare2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/40">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FiTruck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Free Shipping
                  </p>
                  <p className="text-xs text-muted-foreground">
                    On orders over $100
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FiRefreshCw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Easy Returns
                  </p>
                  <p className="text-xs text-muted-foreground">
                    30-day return policy
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FiShield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Secure Payment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          {/* Tab Headers */}
          <div className="border-b border-border/40">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("description")}
                className={cn(
                  "pb-4 text-sm font-semibold transition-colors border-b-2 -mb-px",
                  activeTab === "description"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={cn(
                  "pb-4 text-sm font-semibold transition-colors border-b-2 -mb-px",
                  activeTab === "specifications"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={cn(
                  "pb-4 text-sm font-semibold transition-colors border-b-2 -mb-px",
                  activeTab === "reviews"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === "description" && (
              <div className="max-w-3xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Product Description
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FiCheck className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Technical Specifications
                </h3>
                {product.specifications && product.specifications.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-border/40 bg-muted/20"
                      >
                        <span className="font-medium text-foreground">
                          {spec.label}
                        </span>
                        <span className="text-muted-foreground">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    No specifications available for this product.
                  </p>
                )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-3xl space-y-6">
                <div className="flex items-center gap-8 p-6 rounded-xl border border-border/40 bg-muted/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-foreground mb-2">
                      {product.rating}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30",
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm text-foreground w-8">
                          {rating}★
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{
                              width: `${rating === 5 ? 75 : rating === 4 ? 15 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12">
                          {rating === 5
                            ? "75%"
                            : rating === 4
                              ? "15%"
                              : rating === 3
                                ? "7%"
                                : rating === 2
                                  ? "2%"
                                  : "1%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Sample Review */}
                  <div className="p-6 rounded-xl border border-border/40 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">
                            John Doe
                          </span>
                          <span className="text-xs text-muted-foreground">
                            2 weeks ago
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Absolutely love these sneakers! The comfort is unmatched
                      and they look amazing. Highly recommend for anyone looking
                      for quality footwear.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-border/40 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">
                            Jane Smith
                          </span>
                          <span className="text-xs text-muted-foreground">
                            1 month ago
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(4)].map((_, i) => (
                            <FiStar
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <FiStar className="h-4 w-4 text-muted-foreground/30" />
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Great product overall! Very comfortable for daily wear.
                      Only minor issue is they run slightly small, so I'd
                      recommend sizing up.
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                You May Also Like
              </h2>
              <Link href="/shop">
                <Button variant="ghost">
                  View All
                  <FiChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  salePrice={relatedProduct.salePrice}
                  image={relatedProduct.image}
                  category={relatedProduct.category}
                  rating={relatedProduct.rating}
                  reviewCount={relatedProduct.reviewCount}
                  isNew={relatedProduct.isNew}
                  badge={relatedProduct.badge}
                  slug={relatedProduct.slug}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in-0"
            onClick={() => setIsSizeGuideOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in-0 slide-in-from-bottom-4 zoom-in-95">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/40 bg-background/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-foreground">Size Guide</h2>
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="h-10 w-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Close size guide"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Instructions */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <FiCheck className="h-5 w-5 text-primary" />
                  How to Measure Your Feet
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Place your foot on a flat surface against a wall</li>
                  <li>
                    • Measure from the wall to the end of your longest toe
                  </li>
                  <li>• Compare the measurement with the size chart below</li>
                  <li>
                    • If between sizes, we recommend sizing up for comfort
                  </li>
                </ul>
              </div>

              {/* Men's Size Chart */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Men's Shoe Size Chart
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          US
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          UK
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          EU
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          CM
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { us: "6", uk: "5.5", eu: "39", cm: "24" },
                        { us: "6.5", uk: "6", eu: "39.5", cm: "24.5" },
                        { us: "7", uk: "6.5", eu: "40", cm: "25" },
                        { us: "7.5", uk: "7", eu: "40.5", cm: "25.5" },
                        { us: "8", uk: "7.5", eu: "41", cm: "26" },
                        { us: "8.5", uk: "8", eu: "42", cm: "26.5" },
                        { us: "9", uk: "8.5", eu: "42.5", cm: "27" },
                        { us: "9.5", uk: "9", eu: "43", cm: "27.5" },
                        { us: "10", uk: "9.5", eu: "44", cm: "28" },
                        { us: "10.5", uk: "10", eu: "44.5", cm: "28.5" },
                        { us: "11", uk: "10.5", eu: "45", cm: "29" },
                        { us: "11.5", uk: "11", eu: "45.5", cm: "29.5" },
                        { us: "12", uk: "11.5", eu: "46", cm: "30" },
                        { us: "13", uk: "12.5", eu: "47.5", cm: "31" },
                      ].map((size, index) => (
                        <tr
                          key={index}
                          className={cn(
                            "border-b border-border/40 transition-colors",
                            selectedSize === size.us && "bg-primary/10",
                          )}
                        >
                          <td className="py-3 px-4 text-muted-foreground">
                            <span
                              className={cn(
                                selectedSize === size.us &&
                                  "font-bold text-primary",
                              )}
                            >
                              {size.us}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.uk}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.eu}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.cm}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Women's Size Chart */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Women's Shoe Size Chart
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          US
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          UK
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          EU
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          CM
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { us: "5", uk: "3", eu: "35.5", cm: "22" },
                        { us: "5.5", uk: "3.5", eu: "36", cm: "22.5" },
                        { us: "6", uk: "4", eu: "36.5", cm: "23" },
                        { us: "6.5", uk: "4.5", eu: "37", cm: "23.5" },
                        { us: "7", uk: "5", eu: "37.5", cm: "24" },
                        { us: "7.5", uk: "5.5", eu: "38", cm: "24.5" },
                        { us: "8", uk: "6", eu: "38.5", cm: "25" },
                        { us: "8.5", uk: "6.5", eu: "39", cm: "25.5" },
                        { us: "9", uk: "7", eu: "39.5", cm: "26" },
                        { us: "9.5", uk: "7.5", eu: "40", cm: "26.5" },
                        { us: "10", uk: "8", eu: "40.5", cm: "27" },
                        { us: "10.5", uk: "8.5", eu: "41", cm: "27.5" },
                        { us: "11", uk: "9", eu: "42", cm: "28" },
                        { us: "12", uk: "10", eu: "43", cm: "29" },
                      ].map((size, index) => (
                        <tr
                          key={index}
                          className="border-b border-border/40 hover:bg-muted/30 transition-colors"
                        >
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.us}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.uk}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.eu}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {size.cm}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Fit Tips</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• This style runs true to size</li>
                  <li>• Order your regular shoe size for the best fit</li>
                  <li>• For wide feet, consider going up half a size</li>
                  <li>• Still unsure? Contact our customer service team</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 border-t border-border/40 bg-background/95 backdrop-blur-sm p-6">
              <Button
                className="w-full h-12 text-base font-semibold rounded-xl"
                onClick={() => setIsSizeGuideOpen(false)}
              >
                Got It
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
