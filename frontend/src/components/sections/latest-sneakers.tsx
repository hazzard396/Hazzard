"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { getLatestProducts } from "@/data/products";

export default function LatestSneakers() {
  const sneakers = getLatestProducts(8);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Latest Sneakers
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Discover the newest additions to our collection
            </p>
          </div>
          <Button variant="outline" asChild className="group">
            <Link href="/sneakers">
              View All Sneakers
              <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sneakers.map((sneaker) => (
            <ProductCard
              key={sneaker.id}
              id={sneaker.id}
              name={sneaker.name}
              price={sneaker.price}
              salePrice={sneaker.salePrice}
              image={sneaker.image}
              category={sneaker.category}
              rating={sneaker.rating}
              reviewCount={sneaker.reviewCount}
              isNew={sneaker.isNew}
              badge={sneaker.badge}
              slug={sneaker.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
