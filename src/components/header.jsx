"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

export default function Header() {
  const navLinks = [
    {
      label: "Features",
      href: "/features",
      items: [{ label: "Features", href: "/features" }],
    },
    { label: "Testimonials", href: "/testimonials", items: [] },
    { label: "Pricing", href: "/pricing", items: [] },
    { label: "Contact", href: "/contact", items: [] },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full md:w-full bg-white md:bg-transparent border-b md:border-none shadow-lg md:shadow-none">
      <div className="container flex h-16 items-center justify-between p-2 md:p-4 lgp-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 p-2">
        
          <span className="text-xl font-bold">Logo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            Array.isArray(link?.items) && link?.items.length > 0 ? (
              <div key={link.href}>Options</div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Auth & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-4 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:underline underline-offset-4 border-l p-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Button className="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
