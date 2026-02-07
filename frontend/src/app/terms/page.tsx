"use client";

import Link from "next/link";
import {
  FiFileText,
  FiShoppingCart,
  FiPackage,
  FiAlertCircle,
} from "react-icons/fi";

export default function TermsPage() {
  const lastUpdated = "January 24, 2026";

  const sections = [
    {
      icon: FiFileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using Hazzard's website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.",
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old to make purchases on our website. By placing an order, you represent that you are of legal age and have the legal capacity to enter into a binding contract.",
        },
        {
          subtitle: "Account Registration",
          text: "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
        },
      ],
    },
    {
      icon: FiShoppingCart,
      title: "Products and Orders",
      content: [
        {
          subtitle: "Product Information",
          text: "We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free. Colors may vary due to monitor settings.",
        },
        {
          subtitle: "Pricing and Availability",
          text: "All prices are listed in USD and are subject to change without notice. We reserve the right to limit quantities and discontinue products at any time. In case of pricing errors, we will contact you before processing your order.",
        },
        {
          subtitle: "Order Acceptance",
          text: "Your order is an offer to purchase products from us. We reserve the right to accept or reject any order for any reason. We will send you an order confirmation email, but this does not constitute acceptance of your order.",
        },
        {
          subtitle: "Payment",
          text: "Payment must be made in full at the time of purchase. We accept major credit cards, debit cards, and other payment methods as displayed on our website. All transactions are processed through secure payment gateways.",
        },
      ],
    },
    {
      icon: FiPackage,
      title: "Shipping and Delivery",
      content: [
        {
          subtitle: "Shipping Policy",
          text: "We ship to addresses within Bangladesh and select international locations. Shipping costs and delivery times vary based on your location and chosen shipping method. Estimated delivery times are approximations and not guaranteed.",
        },
        {
          subtitle: "Delivery Delays",
          text: "We are not responsible for delays caused by shipping carriers, customs, weather conditions, or other circumstances beyond our control. Risk of loss and title for products pass to you upon delivery to the carrier.",
        },
        {
          subtitle: "International Orders",
          text: "International customers are responsible for all customs duties, taxes, and fees. Please check with your local customs office for specific requirements and costs before placing an order.",
        },
      ],
    },
    {
      icon: FiAlertCircle,
      title: "Returns and Refunds",
      content: [
        {
          subtitle: "Return Policy",
          text: "We accept returns within 30 days of delivery for most items in their original condition with tags attached. Some items, including final sale and personal care products, are not eligible for return. Please review our detailed Return Policy for complete information.",
        },
        {
          subtitle: "Refund Process",
          text: "Once we receive and inspect your return, we will process your refund within 7-10 business days. Refunds will be issued to the original payment method. Shipping costs are non-refundable unless the return is due to our error.",
        },
        {
          subtitle: "Exchanges",
          text: "We currently do not offer direct exchanges. If you need a different size or color, please return the original item and place a new order.",
        },
      ],
    },
  ];

  const additionalTerms = [
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, graphics, logos, images, and software, is the property of Hazzard or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
    },
    {
      title: "User Conduct",
      content:
        "You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair our services. You may not attempt to gain unauthorized access to our systems or interfere with other users' access to the website.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party websites is at your own risk.",
    },
    {
      title: "Disclaimer of Warranties",
      content:
        "Our website and products are provided 'as is' without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Hazzard shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.",
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify and hold Hazzard, its affiliates, officers, and employees harmless from any claims, damages, losses, or expenses arising from your use of our website, violation of these terms, or infringement of any third-party rights.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms and Conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website after changes constitutes acceptance of the modified terms.",
    },
    {
      title: "Contact Information",
      content:
        "If you have questions about these Terms and Conditions, please contact us at legal@hazzard.com or through our Contact page.",
    },
  ];

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-muted/30 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FiFileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services. These
              terms govern your use of Hazzard's website and services.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Welcome to Hazzard
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms and Conditions ("Terms") constitute a legally
                  binding agreement between you and Hazzard ("we," "us," or
                  "our") regarding your use of our website, mobile applications,
                  and services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms,
                  as well as our Privacy Policy. If you do not agree to these
                  Terms, please discontinue use of our Services immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border/40 bg-card p-6 md:p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Additional Terms
            </h2>
            <div className="space-y-6">
              {additionalTerms.map((term, index) => (
                <div
                  key={index}
                  className="rounded-xl  bg-background p-6"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {term.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl  bg-primary/5 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <FiAlertCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg uppercase font-extrabold text-foreground mb-2">
                    Important Notice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By continuing to use our website after any modifications to
                    these Terms, you acknowledge and agree to the updated terms.
                    We recommend reviewing these Terms periodically. If you have
                    any questions or concerns, please contact our legal team
                    before using our Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-card p-6 md:p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please don't hesitate to reach out.
              </p>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  legal@hazzard.com
                </p>
                <p>
                  <strong className="text-foreground">Address:</strong> 123
                  Fashion Street, Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
