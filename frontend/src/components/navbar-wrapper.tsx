"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Navbar = dynamic(() => import("@/components/navbar"), {
  
});

export default function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="h-16" />}>
      <Navbar />
    </Suspense>
  );
}
