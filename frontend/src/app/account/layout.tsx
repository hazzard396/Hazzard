import AccountSidebar from"@/components/account/account-sidebar";

export default function AccountLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <div className="min-h-screen bg-background">
 <div className="container mx-auto px-4 py-8">
 <div className="flex flex-col lg:flex-row gap-6">
 {/* Sidebar */}
 <aside className="lg:w-64 shrink-0">
 <AccountSidebar />
 </aside>
 
 {/* Main Content */}
 <main className="flex-1">
 {children}
 </main>
 </div>
 </div>
 </div>
 );
}
