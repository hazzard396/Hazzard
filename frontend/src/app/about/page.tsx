"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FiArrowRight,
  FiAward,
  FiHeart,
  FiShield,
  FiTruck,
} from "react-icons/fi";

export default function AboutPage() {
  const values = [
    {
      icon: FiAward,
      title: "Premium Quality",
      description:
        "We source only the finest materials and work with skilled artisans to deliver products that exceed expectations.",
    },
    {
      icon: FiHeart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We're committed to providing exceptional service and building lasting relationships.",
    },
    {
      icon: FiShield,
      title: "Authenticity",
      description:
        "Every product is 100% authentic. We guarantee the quality and originality of everything we sell.",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to ensure your orders reach you in perfect condition, right on time.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Founded",
      description: "Started in Dhaka, Bangladesh",
    },
    {
      year: "1K+",
      title: "Happy Customers",
      description: "And growing every day",
    },
    { year: "500+", title: "Products", description: "Curated collection" },
    { year: "24/7", title: "Support", description: "Always here for you" },
  ];

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-muted/30 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              About Hazzard
            </span>
            <h1 className="text-4xl uppercase font-bold italic tracking-tight text-foreground md:text-5xl lg:text-5xl mb-6">
              Redefining Urban Fashion for the Modern Generation
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Based in Dhaka, Bangladesh, Hazzard is more than just a fashion
              brand—we're a lifestyle movement dedicated to bringing you premium
              contemporary clothing that blends comfort, style, and
              authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Our Store"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl uppercase italic font-extrabold tracking-tight text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hazzard was born from a simple vision: to make premium urban
                  fashion accessible to everyone. We started in the vibrant
                  streets of Dhaka, inspired by the energy, diversity, and style
                  of our community.
                </p>
                <p>
                  What began as a small passion project has grown into a trusted
                  destination for fashion enthusiasts who refuse to compromise
                  on quality or style. We carefully curate every piece in our
                  collection, from the latest sneakers to timeless accessories,
                  ensuring that each item reflects our commitment to excellence.
                </p>
                <p>
                  Today, we serve thousands of customers across Bangladesh and
                  beyond, but our mission remains the same: to help you express
                  your unique style with confidence.
                </p>
              </div>
              <Button size="lg" asChild className="mt-4">
                <Link href="/categories">
                  Explore Our Collection
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl uppercase italic font-extrabold tracking-tight text-foreground md:text-4xl mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide everything we do, from product selection to
              customer service.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-border/40 bg-background p-6 text-center transition-all hover:shadow-lg hover:border-border/60"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl uppercase italic font-extrabold tracking-tight text-foreground md:text-4xl mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Every milestone represents our commitment to you.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div key={milestone.title} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {milestone.year}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {milestone.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Community Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl uppercase italic font-extrabold tracking-tight text-foreground md:text-4xl">
                Join Our Community
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We're building more than a brand—we're creating a community of
                  style enthusiasts who share our passion for quality,
                  authenticity, and self-expression.
                </p>
                <p>
                  Follow us on social media to stay updated on new arrivals,
                  exclusive offers, and style inspiration. Share your Hazzard
                  looks with #HazzardStyle and become part of our growing
                  family.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61572443805536"
                    target="_blank"
                  >
                    Follow on Facebook
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our curated collection of premium clothing, sneakers, and
              accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/sneakers">
                  Shop Sneakers
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse All Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
