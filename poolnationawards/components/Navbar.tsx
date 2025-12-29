"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔒 Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg dark:bg-gray-900/90 border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-5 py-3 md:py-5">
          {/* Logo */}
          <div className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Pool Nation"
              width={240}
              height={56}
              className="hidden md:block"
            />
            <Image
              src="/mobile-logo.png"
              alt="Pool Nation"
              width={64}
              height={64}
              className="md:hidden"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 font-medium">
              <li className="cursor-pointer hover:text-primary">Home</li>
              <li className="cursor-pointer hover:text-primary">About</li>
              <li className="cursor-pointer hover:text-primary">Support</li>
              <li className="cursor-pointer hover:text-primary">FAQ</li>
              <li className="cursor-pointer hover:text-primary">Contact</li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </button>

            <Button className="hidden md:inline-flex" size="lg">
              Sign In
            </Button>
            <Button
              className="hidden md:inline-flex"
              variant="outline"
              size="lg"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* ================= BACKDROP ================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm
          bg-linear-to-b from-[#0b0218] to-[#1a0b2e]
          text-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg">Pool Nation Awards</span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between h-[calc(100%-64px)]">
          {/* Nav */}
          <ul className="flex flex-col px-6 pt-8 space-y-6 text-lg font-medium">
            {["Home", "About", "Support", "FAQ", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer tracking-wide hover:text-purple-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="px-6 my-6">
            <div className="h-px bg-white/10" />
          </div>

          {/* CTA */}
          <div className="px-6 pb-8 space-y-3">
            <Button className="w-full bg-white text-black hover:bg-gray-200">
              Sign In
            </Button>
            <Button className="w-full" variant="outline">
              Sign Up
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
