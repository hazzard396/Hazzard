import Hero from "@/components/sections/hero";
import FeaturedCategories from "@/components/sections/featured-categories";
import LatestSneakers from "@/components/sections/latest-sneakers";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <Hero />
      <FeaturedCategories />
      <LatestSneakers />
    </main>
  );
}
