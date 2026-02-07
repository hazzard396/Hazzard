"use client";

import Link from "next/link";
import {
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ];

  const shopLinks = [
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Gift Ideas", href: "/gift-ideas" },
    { name: "Sales & Offers", href: "/sales" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Track Order", href: "/track-order" },
    { name: "Returns", href: "/returns" },
    { name: "Shipping Info", href: "/shipping" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
    { name: "Twitter", icon: FiTwitter, href: "https://twitter.com" },
    { name: "Instagram", icon: FiInstagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: FiGithub, href: "https://github.com" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 items-center justify-between py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {/* Brand & Newsletter Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    d="M12 6v12M6 12h12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Hazzard
              </span>
            </Link>

            <p className="mb-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium contemporary clothing and urban fashion for the modern
              lifestyle. Quality you can trust, style you can feel.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <FiMapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Fashion Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="h-4 w-4 flex-shrink-0" />
                <span>support@hazzard.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mb-6 max-w-md mx-auto">
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Subscribe to our newsletter
          </h3>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 text-sm"
            />
            <Button className="h-10 px-4">
              <FiMail className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Get the latest updates on new products and exclusive offers.
          </p>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {currentYear} Hazzard. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-all hover:bg-foreground hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground mr-2">
                We accept
              </span>
              <div className="flex items-center gap-1.5">
                {["Visa", "Mastercard", "PayPal", "Amex"].map((method) => (
                  <div
                    key={method}
                    className="flex h-6 items-center justify-center rounded border border-border/40 bg-background px-2 text-[10px] font-medium text-muted-foreground"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
