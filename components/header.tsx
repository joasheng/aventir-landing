"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="#early-access"
            className="rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground transition-all hover:bg-cta/90 hover:shadow-lg"
          >
            Get Early Access
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-primary/10 bg-background md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <Link
              href="#features"
              className="text-base font-medium text-primary/80 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-medium text-primary/80 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#early-access"
              className="rounded-full bg-cta px-5 py-2.5 text-center text-base font-medium text-cta-foreground transition-all hover:bg-cta/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
