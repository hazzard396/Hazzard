"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiShoppingBag, FiStar } from "react-icons/fi";
import HeroBanner from "@/assets/images/Hero_BG.jpg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroBanner}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
              <FiStar className="h-3.5 w-3.5 fill-white" />
              <span>Your Best Apparel Partner</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="italic uppercase text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            Redefine Your
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
              Unique Style
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg text-white/90 sm:text-xl leading-relaxed">
            Discover premium contemporary clothing designed for the modern
            lifestyle. Elevate your wardrobe with our exclusive pieces that
            blend comfort with elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30"
            >
              <FiShoppingBag className="mr-2 h-4 w-4" />
              Shop Now
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-8 text-base font-semibold backdrop-blur-md bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105"
            >
              <Link href="/categories" className="flex items-center gap-2">
                Explore Collection
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Social Proof / Trust Badge */}
          <div className="pt-8 flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-white"
                >
                  U{i}
                </div>
              ))}
            </div>
            <div className="text-sm text-white/90">
              <span className="font-bold text-white">1k+</span> styling
              enthusiasts joined.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background via-background/80 to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
