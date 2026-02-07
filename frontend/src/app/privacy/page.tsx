"use client";

import Link from "next/link";
import { FiShield, FiLock, FiEye, FiDatabase, FiMail } from "react-icons/fi";

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 24, 2026";

  const sections = [
    {
      icon: FiDatabase,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, place an order, or contact us, we may collect personal information including your name, email address, phone number, shipping address, and payment information.",
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information about your device, including your IP address, browser type, operating system, and browsing behavior on our website.",
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze site traffic.",
        },
      ],
    },
    {
      icon: FiEye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Order Processing",
          text: "We use your information to process and fulfill your orders, including shipping, payment processing, and customer service communications.",
        },
        {
          subtitle: "Communication",
          text: "We may send you order confirmations, shipping updates, newsletters (if subscribed), and promotional offers. You can opt out of marketing communications at any time.",
        },
        {
          subtitle: "Improvement and Analytics",
          text: "We analyze usage data to improve our website, products, and services. This helps us understand customer preferences and enhance user experience.",
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, resolve disputes, and enforce our terms and policies.",
        },
      ],
    },
    {
      icon: FiShield,
      title: "Data Protection and Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, and regular security audits.",
        },
        {
          subtitle: "Payment Security",
          text: "All payment transactions are processed through secure payment gateways. We do not store complete credit card information on our servers.",
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
        },
      ],
    },
    {
      icon: FiLock,
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, shipping orders, and providing customer service. These parties are contractually obligated to keep your information confidential.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or governmental request, or to protect our rights, property, or safety.",
        },
        {
          subtitle: "No Sale of Personal Information",
          text: "We do not sell, rent, or trade your personal information to third parties for their marketing purposes.",
        },
      ],
    },
  ];

  const rights = [
    "Access the personal information we hold about you",
    "Request correction of inaccurate or incomplete information",
    "Request deletion of your personal information (subject to legal requirements)",
    "Opt-out of marketing communications at any time",
    "Object to processing of your personal information",
    "Request data portability of your information",
  ];

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-muted/30 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FiShield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Hazzard. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
                </p>
                <p>
                  By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
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

      {/* Your Rights */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-background p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                You have certain rights regarding your personal information. Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-3">
                {rights.map((right, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{right}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Policy */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Types of Cookies We Use:</h3>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span><strong className="text-foreground">Essential Cookies:</strong> Necessary for the website to function properly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors use our website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span><strong className="text-foreground">Marketing Cookies:</strong> Track your browsing habits to show relevant advertisements</span>
                    </li>
                  </ul>
                </div>
                <p>
                  You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to remove such information from our systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-background p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border/40 bg-card p-6 md:p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiMail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong> privacy@hazzard.com
                </p>
                <p>
                  <strong className="text-foreground">Address:</strong> 123 Fashion Street, Dhaka, Bangladesh
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
