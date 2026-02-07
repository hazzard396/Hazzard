"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiHeart, FiEye, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  category?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  isNew?: boolean;
  slug: string;
  className?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  salePrice,
  image,
  category,
  rating = 0,
  reviewCount = 0,
  badge,
  isNew,
  slug,
  className,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discount = salePrice
    ? Math.round(((price - salePrice) / price) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic here
    console.log("Added to cart:", id);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/60",
        className,
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
            "object-cover transition-all duration-500 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted/50" />
        )}

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {isNew && (
            <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
              New
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-md bg-destructive px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              -{discount}%
            </span>
          )}
          {badge && !isNew && discount === 0 && (
            <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
              {badge}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-background/95 backdrop-blur-sm hover:bg-background shadow-md"
            onClick={handleToggleWishlist}
          >
            <FiHeart
              className={cn(
                "h-4 w-4 transition-colors",
                isWishlisted ? "fill-red-500 text-red-500" : "",
              )}
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-background/95 backdrop-blur-sm hover:bg-background shadow-md"
          >
            <FiEye className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart Button - Always Visible */}
        <div className="absolute bottom-0 left-0 right-0">
          <Button
            className="w-full rounded-none h-11 font-semibold"
            onClick={handleAddToCart}
          >
            <FiShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Category */}
        {category && (
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        )}

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground/30",
                  )}
                />
              ))}
            </div>
            {reviewCount > 0 && (
              <span className="text-xs text-muted-foreground">
                ({reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            ${salePrice ? salePrice.toFixed(2) : price.toFixed(2)}
          </span>
          {salePrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// Skeleton loader for product card
export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl bg-card overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-square bg-muted/30 animate-pulse" />
      <div className="flex flex-col gap-3 p-4">
        <div className="h-3 w-16 rounded bg-muted/50 animate-pulse" />
        <div className="h-4 w-full rounded bg-muted/50 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-muted/50 animate-pulse" />
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full bg-muted/50 animate-pulse"
            />
          ))}
        </div>
        <div className="h-6 w-20 rounded bg-muted/50 animate-pulse mt-2" />
      </div>
    </div>
  );
}
