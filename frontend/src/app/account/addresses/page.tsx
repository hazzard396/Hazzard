"use client";

import { useState } from"react";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Label } from"@/components/ui/label";
import { MapPin, Plus, Edit, Trash2, Check } from"lucide-react";

interface Address {
 id: number;
 type: string;
 name: string;
 street: string;
 city: string;
 state: string;
 zipCode: string;
 country: string;
 phone: string;
 isDefault: boolean;
}

const initialAddresses: Address[] = [
 {
 id: 1,
 type:"Home",
 name:"Alex Rivera",
 street:"123 Main Street",
 city:"New York",
 state:"NY",
 zipCode:"10001",
 country:"United States",
 phone:"+1 (555) 123-4567",
 isDefault: true,
 },
 {
 id: 2,
 type:"Work",
 name:"Alex Rivera",
 street:"456 Business Ave, Suite 200",
 city:"Brooklyn",
 state:"NY",
 zipCode:"11201",
 country:"United States",
 phone:"+1 (555) 987-6543",
 isDefault: false,
 },
 {
 id: 3,
 type:"Other",
 name:"Alex Rivera",
 street:"789 Family Road",
 city:"Queens",
 state:"NY",
 zipCode:"11354",
 country:"United States",
 phone:"+1 (555) 246-8135",
 isDefault: false,
 },
];

export default function AddressesPage() {
 const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
 const [showAddForm, setShowAddForm] = useState(false);
 const [editingId, setEditingId] = useState<number | null>(null);
 
 const [formData, setFormData] = useState({
 type:"Home",
 name:"",
 street:"",
 city:"",
 state:"",
 zipCode:"",
 country:"United States",
 phone:"",
 });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value,
 });
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 
 if (editingId) {
 // Update existing address
 setAddresses(
 addresses.map((addr) =>
 addr.id === editingId
 ? { ...addr, ...formData }
 : addr
 )
 );
 setEditingId(null);
 } else {
 // Add new address
 const newAddress: Address = {
 id: Date.now(),
 ...formData,
 isDefault: addresses.length === 0,
 };
 setAddresses([...addresses, newAddress]);
 }
 
 // Reset form
 setFormData({
 type:"Home",
 name:"",
 street:"",
 city:"",
 state:"",
 zipCode:"",
 country:"United States",
 phone:"",
 });
 setShowAddForm(false);
 };

 const handleEdit = (address: Address) => {
 setFormData({
 type: address.type,
 name: address.name,
 street: address.street,
 city: address.city,
 state: address.state,
 zipCode: address.zipCode,
 country: address.country,
 phone: address.phone,
 });
 setEditingId(address.id);
 setShowAddForm(true);
 };

 const handleDelete = (id: number) => {
 setAddresses(addresses.filter((addr) => addr.id !== id));
 };

 const handleSetDefault = (id: number) => {
 setAddresses(
 addresses.map((addr) => ({
 ...addr,
 isDefault: addr.id === id,
 }))
 );
 };

 const handleCancel = () => {
 setShowAddForm(false);
 setEditingId(null);
 setFormData({
 type:"Home",
 name:"",
 street:"",
 city:"",
 state:"",
 zipCode:"",
 country:"United States",
 phone:"",
 });
 };

 return (
 <div className="space-y-6">
 {/* Header */}
 <div className="flex items-center justify-between">
 <div>
 <h1 className="text-3xl font-bold text-foreground mb-2">Addresses</h1>
 <p className="text-muted-foreground">
 Manage your delivery addresses
 </p>
 </div>
 
 {!showAddForm && (
 <Button
 onClick={() => setShowAddForm(true)}
 className="bg-primary hover:bg-primary/90 text-primary-foreground"
 >
 <Plus className="w-4 h-4 mr-2" />
 Add New Address
 </Button>
 )}
 </div>

 {/* Add/Edit Form */}
 {showAddForm && (
 <div className="bg-card rounded-lg p-6 border border-border">
 <h2 className="text-lg font-semibold text-foreground mb-4">
 {editingId ?"Edit Address" :"Add New Address"}
 </h2>
 
 <form onSubmit={handleSubmit} className="space-y-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="space-y-2">
 <Label htmlFor="type">Address Type</Label>
 <select
 id="type"
 name="type"
 value={formData.type}
 onChange={handleInputChange}
 required
 className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
 >
 <option value="Home">Home</option>
 <option value="Work">Work</option>
 <option value="Other">Other</option>
 </select>
 </div>

 <div className="space-y-2">
 <Label htmlFor="name">Full Name</Label>
 <Input
 id="name"
 name="name"
 value={formData.name}
 onChange={handleInputChange}
 required
 placeholder="John Doe"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2 md:col-span-2">
 <Label htmlFor="street">Street Address</Label>
 <Input
 id="street"
 name="street"
 value={formData.street}
 onChange={handleInputChange}
 required
 placeholder="123 Main Street, Apt 4B"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="city">City</Label>
 <Input
 id="city"
 name="city"
 value={formData.city}
 onChange={handleInputChange}
 required
 placeholder="New York"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="state">State/Province</Label>
 <Input
 id="state"
 name="state"
 value={formData.state}
 onChange={handleInputChange}
 required
 placeholder="NY"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="zipCode">ZIP/Postal Code</Label>
 <Input
 id="zipCode"
 name="zipCode"
 value={formData.zipCode}
 onChange={handleInputChange}
 required
 placeholder="10001"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="country">Country</Label>
 <Input
 id="country"
 name="country"
 value={formData.country}
 onChange={handleInputChange}
 required
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2 md:col-span-2">
 <Label htmlFor="phone">Phone Number</Label>
 <Input
 id="phone"
 name="phone"
 type="tel"
 value={formData.phone}
 onChange={handleInputChange}
 required
 placeholder="+1 (555) 123-4567"
 className="bg-background border-border"
 />
 </div>
 </div>

 <div className="flex justify-end gap-2 pt-4">
 <Button type="button" variant="outline" onClick={handleCancel}>
 Cancel
 </Button>
 <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
 {editingId ?"Update Address" :"Add Address"}
 </Button>
 </div>
 </form>
 </div>
 )}

 {/* Addresses List */}
 {addresses.length === 0 ? (
 <div className="bg-card rounded-lg p-12 border border-border text-center">
 <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
 <h3 className="text-xl font-semibold text-foreground mb-2">
 No addresses saved
 </h3>
 <p className="text-muted-foreground mb-6">
 Add your first delivery address to get started
 </p>
 <Button
 onClick={() => setShowAddForm(true)}
 className="bg-primary hover:bg-primary/90 text-primary-foreground"
 >
 <Plus className="w-4 h-4 mr-2" />
 Add Address
 </Button>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {addresses.map((address) => (
 <div
 key={address.id}
 className="bg-card rounded-lg p-6 border border-border relative"
 >
 {/* Default Badge */}
 {address.isDefault && (
 <div className="absolute top-4 right-4">
 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
 <Check className="w-3 h-3 mr-1" />
 Default
 </span>
 </div>
 )}

 {/* Address Type */}
 <div className="flex items-center gap-2 mb-4">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
 <MapPin className="w-5 h-5 text-primary" />
 </div>
 <h3 className="text-lg font-semibold text-foreground">
 {address.type}
 </h3>
 </div>

 {/* Address Details */}
 <div className="space-y-2 mb-6">
 <p className="font-medium text-foreground">{address.name}</p>
 <p className="text-sm text-muted-foreground">{address.street}</p>
 <p className="text-sm text-muted-foreground">
 {address.city}, {address.state} {address.zipCode}
 </p>
 <p className="text-sm text-muted-foreground">{address.country}</p>
 <p className="text-sm text-muted-foreground">{address.phone}</p>
 </div>

 {/* Actions */}
 <div className="flex gap-2 pt-4 border-t border-border">
 {!address.isDefault && (
 <Button
 size="sm"
 variant="outline"
 onClick={() => handleSetDefault(address.id)}
 className="flex-1"
 >
 Set as Default
 </Button>
 )}
 <Button
 size="sm"
 variant="outline"
 onClick={() => handleEdit(address)}
 className={address.isDefault ?"flex-1" :""}
 >
 <Edit className="w-4 h-4 mr-2" />
 Edit
 </Button>
 <Button
 size="sm"
 variant="outline"
 onClick={() => handleDelete(address.id)}
 className="hover:border-red-500 hover:text-red-500"
 >
 <Trash2 className="w-4 h-4" />
 </Button>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 );
}
