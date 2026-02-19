import { Package, Heart, MapPin, CreditCard, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AccountOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's a summary of your account.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">12</h3>
          <p className="text-sm text-muted-foreground">Total Orders</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border hover:border-green-500/50 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Package className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">8</h3>
          <p className="text-sm text-muted-foreground">Delivered</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border hover:border-purple-500/50 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">24</h3>
          <p className="text-sm text-muted-foreground">Wishlist Items</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border hover:border-orange-500/50 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">3</h3>
          <p className="text-sm text-muted-foreground">Saved Addresses</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Orders
          </h2>
          <Link href="/account/orders">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80"
            >
              View All
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {/* Order Item 1 */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/30">
            <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">
                Air Jordan 1 Retro High 'Chicago'
              </h3>
              <p className="text-sm text-muted-foreground">
                Order #SV-29401 • Oct 24, 2023
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground mb-1">$490.00</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
                In Transit
              </span>
            </div>
          </div>

          {/* Order Item 2 */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/30">
            <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">
                Nike Dunk Low 'Panda'
              </h3>
              <p className="text-sm text-muted-foreground">
                Order #SV-29104 • Sep 12, 2023
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground mb-1">$190.00</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                Delivered
              </span>
            </div>
          </div>

          {/* Order Item 3 */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/30">
            <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">
                Nike Air Max 270
              </h3>
              <p className="text-sm text-muted-foreground">
                Order #SV-28562 • Jul 05, 2023
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground mb-1">$150.00</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                Cancelled
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/account/settings" className="block">
          <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Account Settings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Update your profile and preferences
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/account/addresses" className="block">
          <div className="bg-card rounded-lg p-6 border border-border hover:border-orange-500 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Manage Addresses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add or edit delivery addresses
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
