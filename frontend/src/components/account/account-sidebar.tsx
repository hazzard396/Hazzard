"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Heart,
  Settings,
  MapPin,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    label: "Overview",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    label: "My Orders",
    href: "/account/orders",
    icon: Package,
  },
  {
    label: "Wishlist",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    label: "Account Settings",
    href: "/account/settings",
    icon: Settings,
  },
  {
    label: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      {/* User Profile */}
      <div className="mb-6 pb-6 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-semibold text-lg">
            AR
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Alex Rivera</h3>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Elite Member
            </span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-medium",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}

        {/* Sign Out */}
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </nav>
    </div>
  );
}
