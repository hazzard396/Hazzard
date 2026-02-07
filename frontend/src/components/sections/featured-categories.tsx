"use client";

import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  gradient: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Sneakers",
    slug: "sneakers",
    description: "Step up your game with premium footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    name: "Hoodies",
    slug: "hoodies",
    description: "Cozy comfort meets street style",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 3,
    name: "Jackets",
    slug: "jackets",
    description: "Elevate your outerwear collection",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    name: "T-Shirts",
    slug: "tshirts",
    description: "Essential basics redefined",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function FeaturedCategories() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4 transition duration-500">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                Trending Categories
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase italic"
            >
              Featured{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
                  Categories
                </span>
                <svg
                  className="absolute -bottom-2 w-full h-3 text-primary/20 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              transition={{ duration: 0.7 }}
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our curated collection of trending categories
            </motion.p>
          </div>

          {/* Slider */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="!pb-14"
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard category={category} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background border border-border shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <FiArrowRight className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background border border-border shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-[420px] rounded-3xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/category/${category.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative h-[300px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${category.image})` }}
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-linear-to-b ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Dark Gradient for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-90" />

          {/* Shop All Badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <span className="inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-foreground border border-border">
              Shop All
              <FiArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
          <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {category.description}
          </p>

          {/* Animated Underline */}
          <div className="pt-2 flex items-center gap-2 text-sm font-medium text-primary">
            <span className="group-hover:gap-3 transition-all">Explore</span>
            <FiArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
