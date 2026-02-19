"use client";

import { useState } from"react";
import { Heart, ShoppingCart, Trash2, Search } from"lucide-react";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";

const wishlistItems = [
 {
 id: 1,
 name:"Air Jordan 4 Retro 'Military Black'",
 price:"$215.00",
 image:"/placeholder.jpg",
 inStock: true,
 size:"US 10.5",
 dateAdded:"Jan 15, 2024",
 },
 {
 id: 2,
 name:"Nike SB Dunk Low 'Travis Scott'",
 price:"$1,200.00",
 image:"/placeholder.jpg",
 inStock: false,
 size:"US 11",
 dateAdded:"Jan 10, 2024",
 },
 {
 id: 3,
 name:"Adidas Yeezy Boost 350 V2 'Onyx'",
 price:"$230.00",
 image:"/placeholder.jpg",
 inStock: true,
 size:"US 10",
 dateAdded:"Jan 08, 2024",
 },
 {
 id: 4,
 name:"New Balance 550 'White Green'",
 price:"$120.00",
 image:"/placeholder.jpg",
 inStock: true,
 size:"US 10.5",
 dateAdded:"Jan 05, 2024",
 },
 {
 id: 5,
 name:"Air Jordan 1 High OG 'Lost and Found'",
 price:"$180.00",
 image:"/placeholder.jpg",
 inStock: true,
 size:"US 11",
 dateAdded:"Dec 28, 2023",
 },
 {
 id: 6,
 name:"Nike Dunk Low 'UNC'",
 price:"$110.00",
 image:"/placeholder.jpg",
 inStock: false,
 size:"US 10",
 dateAdded:"Dec 20, 2023",
 },
];

export default function WishlistPage() {
 const [searchQuery, setSearchQuery] = useState("");
 const [items, setItems] = useState(wishlistItems);

 const removeItem = (id: number) => {
 setItems(items.filter((item) => item.id !== id));
 };

 const filteredItems = items.filter((item) =>
 item.name.toLowerCase().includes(searchQuery.toLowerCase())
 );

 return (
 <div className="space-y-6">
 {/* Header */}
 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
 <div>
 <h1 className="text-3xl font-bold text-foreground mb-2">Wishlist</h1>
 <p className="text-muted-foreground">
 {items.length} items saved for later
 </p>
 </div>

 {/* Search */}
 <div className="relative max-w-sm">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
 <Input
 type="text"
 placeholder="Search wishlist..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="pl-10 bg-card border-border"
 />
 </div>
 </div>

 {/* Wishlist Grid */}
 {filteredItems.length === 0 ? (
 <div className="bg-card rounded-lg p-12 border border-border text-center">
 <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
 <h3 className="text-xl font-semibold text-foreground mb-2">
 {searchQuery ?"No items found" :"Your wishlist is empty"}
 </h3>
 <p className="text-muted-foreground mb-6">
 {searchQuery
 ?"Try searching for something else"
 :"Start adding items you love to your wishlist"}
 </p>
 {!searchQuery && (
 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
 Browse Products
 </Button>
 )}
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredItems.map((item) => (
 <div
 key={item.id}
 className="bg-card rounded-lg border border-border overflow-hidden group hover:border-primary transition-colors"
 >
 {/* Product Image */}
 <div className="relative aspect-square bg-muted overflow-hidden">
 <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
 
 {/* Remove Button */}
 <button
 onClick={() => removeItem(item.id)}
 className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-red-500 transition-colors"
 >
 <Trash2 className="w-4 h-4 text-white" />
 </button>

 {/* Stock Status */}
 {!item.inStock && (
 <div className="absolute top-3 left-3">
 <span className="px-2 py-1 rounded-md text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30 backdrop-blur-sm">
 Out of Stock
 </span>
 </div>
 )}
 </div>

 {/* Product Info */}
 <div className="p-4">
 <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
 {item.name}
 </h3>
 
 <div className="flex items-center justify-between mb-3">
 <span className="text-lg font-bold text-foreground">
 {item.price}
 </span>
 <span className="text-sm text-muted-foreground">
 Size: {item.size}
 </span>
 </div>

 <p className="text-xs text-muted-foreground mb-4">
 Added {item.dateAdded}
 </p>

 {/* Actions */}
 <div className="flex gap-2">
 <Button
 className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
 disabled={!item.inStock}
 >
 <ShoppingCart className="w-4 h-4 mr-2" />
 {item.inStock ?"Add to Cart" :"Unavailable"}
 </Button>
 <Button
 size="icon"
 variant="outline"
 onClick={() => removeItem(item.id)}
 className="border-border hover:border-red-500 hover:text-red-500"
 >
 <Trash2 className="w-4 h-4" />
 </Button>
 </div>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 );
}
