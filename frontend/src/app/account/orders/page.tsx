"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const orders = [
  {
    id: "SV-29401",
    product: {
      name: "Air Jordan 1 Retro High 'Chicago'",
      image: "/placeholder.jpg",
      size: "US 10.5",
      color: "Red/White",
    },
    date: "Oct 24, 2023",
    total: "$490.00",
    status: "IN TRANSIT",
    statusColor: "cyan",
  },
  {
    id: "SV-29104",
    product: {
      name: "Nike Dunk Low 'Panda'",
      image: "/placeholder.jpg",
      size: "US 9.5",
      color: "Black/White",
    },
    date: "Sep 12, 2023",
    total: "$190.00",
    status: "DELIVERED",
    statusColor: "green",
  },
  {
    id: "SV-28562",
    product: {
      name: "Nike Air Max 270",
      image: "/placeholder.jpg",
      size: "US 11",
      color: "Chile Red",
    },
    date: "Jul 05, 2023",
    total: "$150.00",
    status: "CANCELLED",
    statusColor: "gray",
  },
];

const statusFilters = ["All Status", "In Transit", "Delivered", "Cancelled"];
const dateFilters = ["Past 3 months", "Past 6 months", "Past year", "All time"];

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("Past 3 months");
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadgeClasses = (statusColor: string) => {
    switch (statusColor) {
      case "cyan":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "green":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "red":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getStatusButtonClasses = (status: string) => {
    switch (status) {
      case "IN TRANSIT":
        return "text-blue-500 hover:text-blue-400 hover:bg-blue-500/10";
      case "DELIVERED":
        return "text-green-400 hover:text-green-300 hover:bg-green-500/10";
      case "CANCELLED":
        return "text-red-400 hover:text-red-300 hover:bg-red-500/10";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-accent";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">My Orders</h1>
        <p className="text-muted-foreground">
          Manage your recent acquisitions and track shipments.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>

          {/* Date Filter */}
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {dateFilters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {statusFilters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Item Details
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Order ID
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Total
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-[#2a2d31]">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-background dark:hover:bg-[#1a1d21] transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border">
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">
                          {order.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Size: {order.product.size} • Color:{" "}
                          {order.product.color}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-foreground">
                      #{order.id}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-muted-foreground">
                      {order.date}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-foreground">
                      {order.total}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeClasses(
                        order.statusColor,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {order.status === "IN TRANSIT" && (
                        <>
                          <Button
                            size="sm"
                            className="text-white"
                          >
                            Track Order
                          </Button>
                          <Button size="sm" variant="outline">
                            View Invoice
                          </Button>
                        </>
                      )}
                      {order.status === "DELIVERED" && (
                        <>
                          <Button
                            size="sm"
                            className="text-white"
                          >
                            Buy It Again
                          </Button>
                          <Button size="sm" variant="outline">
                            View Invoice
                          </Button>
                          <Button size="sm" variant="outline">
                            Support
                          </Button>
                        </>
                      )}
                      {order.status === "CANCELLED" && (
                        <>
                          <Button
                            size="sm"
                            className="text-white"
                          >
                            Reorder
                          </Button>
                          <Button size="sm" variant="outline">
                            Details
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-4 border-t border-border">
          <Button
            size="icon-sm"
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            size="sm"
            className={
              currentPage === 1
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }
            variant={currentPage === 1 ? "default" : "outline"}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>

          <Button
            size="sm"
            className={
              currentPage === 2
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }
            variant={currentPage === 2 ? "default" : "outline"}
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>

          <Button
            size="sm"
            className={
              currentPage === 3
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }
            variant={currentPage === 3 ? "default" : "outline"}
            onClick={() => setCurrentPage(3)}
          >
            3
          </Button>

          <Button
            size="icon-sm"
            variant="outline"
            disabled={currentPage === 3}
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
