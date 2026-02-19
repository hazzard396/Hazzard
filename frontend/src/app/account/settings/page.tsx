"use client";

import { useState } from"react";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Label } from"@/components/ui/label";
import { Camera, Mail, Phone, Calendar, User } from"lucide-react";

export default function AccountSettingsPage() {
 const [formData, setFormData] = useState({
 firstName:"Alex",
 lastName:"Rivera",
 email:"alex.rivera@example.com",
 phone:"+1 (555) 123-4567",
 dateOfBirth:"1990-05-15",
 currentPassword:"",
 newPassword:"",
 confirmPassword:"",
 });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value,
 });
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // Handle form submission
 console.log("Form submitted:", formData);
 };

 return (
 <div className="space-y-6">
 {/* Header */}
 <div>
 <h1 className="text-3xl font-bold text-foreground mb-2">
 Account Settings
 </h1>
 <p className="text-muted-foreground">
 Manage your account information and preferences
 </p>
 </div>

 {/* Profile Picture */}
 <div className="bg-card rounded-lg p-6 border border-border">
 <h2 className="text-lg font-semibold text-foreground mb-4">
 Profile Picture
 </h2>
 <div className="flex items-center gap-6">
 <div className="relative">
 <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-semibold text-3xl">
 AR
 </div>
 <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-white border-4 border-card transition-colors">
 <Camera className="w-4 h-4" />
 </button>
 </div>
 <div>
 <h3 className="font-medium text-foreground mb-1">
 Alex Rivera
 </h3>
 <p className="text-sm text-muted-foreground mb-3">
 JPG, PNG or GIF. Max size 2MB.
 </p>
 <div className="flex gap-2">
 <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
 Upload New
 </Button>
 <Button size="sm" variant="outline">
 Remove
 </Button>
 </div>
 </div>
 </div>
 </div>

 {/* Personal Information */}
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="bg-card rounded-lg p-6 border border-border">
 <h2 className="text-lg font-semibold text-foreground mb-4">
 Personal Information
 </h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="space-y-2">
 <Label htmlFor="firstName" className="flex items-center gap-2">
 <User className="w-4 h-4 text-muted-foreground" />
 First Name
 </Label>
 <Input
 id="firstName"
 name="firstName"
 value={formData.firstName}
 onChange={handleInputChange}
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="lastName" className="flex items-center gap-2">
 <User className="w-4 h-4 text-muted-foreground" />
 Last Name
 </Label>
 <Input
 id="lastName"
 name="lastName"
 value={formData.lastName}
 onChange={handleInputChange}
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="email" className="flex items-center gap-2">
 <Mail className="w-4 h-4 text-muted-foreground" />
 Email Address
 </Label>
 <Input
 id="email"
 name="email"
 type="email"
 value={formData.email}
 onChange={handleInputChange}
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="phone" className="flex items-center gap-2">
 <Phone className="w-4 h-4 text-muted-foreground" />
 Phone Number
 </Label>
 <Input
 id="phone"
 name="phone"
 type="tel"
 value={formData.phone}
 onChange={handleInputChange}
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
 <Calendar className="w-4 h-4 text-muted-foreground" />
 Date of Birth
 </Label>
 <Input
 id="dateOfBirth"
 name="dateOfBirth"
 type="date"
 value={formData.dateOfBirth}
 onChange={handleInputChange}
 className="bg-background border-border"
 />
 </div>
 </div>

 <div className="mt-6 pt-6 border-t border-border flex justify-end gap-2">
 <Button type="button" variant="outline">
 Cancel
 </Button>
 <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
 Save Changes
 </Button>
 </div>
 </div>

 {/* Change Password */}
 <div className="bg-card rounded-lg p-6 border border-border">
 <h2 className="text-lg font-semibold text-foreground mb-4">
 Change Password
 </h2>
 
 <div className="space-y-4 max-w-md">
 <div className="space-y-2">
 <Label htmlFor="currentPassword">Current Password</Label>
 <Input
 id="currentPassword"
 name="currentPassword"
 type="password"
 value={formData.currentPassword}
 onChange={handleInputChange}
 placeholder="Enter current password"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="newPassword">New Password</Label>
 <Input
 id="newPassword"
 name="newPassword"
 type="password"
 value={formData.newPassword}
 onChange={handleInputChange}
 placeholder="Enter new password"
 className="bg-background border-border"
 />
 </div>

 <div className="space-y-2">
 <Label htmlFor="confirmPassword">Confirm New Password</Label>
 <Input
 id="confirmPassword"
 name="confirmPassword"
 type="password"
 value={formData.confirmPassword}
 onChange={handleInputChange}
 placeholder="Confirm new password"
 className="bg-background border-border"
 />
 </div>
 </div>

 <div className="mt-6 pt-6 border-t border-border flex justify-end gap-2">
 <Button type="button" variant="outline">
 Cancel
 </Button>
 <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
 Update Password
 </Button>
 </div>
 </div>

 {/* Preferences */}
 <div className="bg-card rounded-lg p-6 border border-border">
 <h2 className="text-lg font-semibold text-foreground mb-4">
 Preferences
 </h2>
 
 <div className="space-y-4">
 <div className="flex items-center justify-between py-2">
 <div>
 <h3 className="font-medium text-foreground">Email Notifications</h3>
 <p className="text-sm text-muted-foreground">
 Receive email updates about your orders
 </p>
 </div>
 <label className="relative inline-flex items-center cursor-pointer">
 <input type="checkbox" className="sr-only peer" defaultChecked />
 <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
 </label>
 </div>

 <div className="flex items-center justify-between py-2">
 <div>
 <h3 className="font-medium text-foreground">Marketing Emails</h3>
 <p className="text-sm text-muted-foreground">
 Receive promotional offers and updates
 </p>
 </div>
 <label className="relative inline-flex items-center cursor-pointer">
 <input type="checkbox" className="sr-only peer" />
 <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
 </label>
 </div>

 <div className="flex items-center justify-between py-2">
 <div>
 <h3 className="font-medium text-foreground">SMS Notifications</h3>
 <p className="text-sm text-muted-foreground">
 Get text messages about order status
 </p>
 </div>
 <label className="relative inline-flex items-center cursor-pointer">
 <input type="checkbox" className="sr-only peer" defaultChecked />
 <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
 </label>
 </div>
 </div>
 </div>

 {/* Danger Zone */}
 <div className="bg-card rounded-lg p-6 border border-red-500/30">
 <h2 className="text-lg font-semibold text-red-500 mb-4">
 Danger Zone
 </h2>
 
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div>
 <h3 className="font-medium text-foreground">Delete Account</h3>
 <p className="text-sm text-muted-foreground">
 Permanently delete your account and all data
 </p>
 </div>
 <Button variant="destructive">
 Delete Account
 </Button>
 </div>
 </div>
 </div>
 </form>
 </div>
 );
}
