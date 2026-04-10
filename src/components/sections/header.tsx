"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Header({ bgColor }: { bgColor?: string }) {
  const { t } = useLanguage();

    const NAV_LINKS = [
      { label: t("nav.home"), href: "/" },              // 1. Home
      { label: t("nav.offplan"), href: "/off-plan" },   // 2. Off-Plan
      { label: t("nav.holidayhomes"), href: "/services" }, // 3. Holiday Homes

      { label: t("nav.contact"), href: "/contact-us" }, // 5. Contact Us
    ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-outline ${
        scrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
        <div className="container mx-auto max-w-[1400px] px-2 md:px-4">
              <div
              className={`relative flex items-center justify-between rounded-full border border-[#e9e2d4] px-4 py-2.5 transition-all duration-300 md:px-8 md:py-3 ${
                scrolled ? "shadow-lg backdrop-blur-md" : ""
              }`}
              style={{
                backgroundColor: bgColor || (scrolled ? "rgba(255, 255, 255, 0.96)" : "#ffffff")
              }}
            >
              {/* Spacer left — keeps nav visually centered */}
              <div className="hidden lg:block w-[110px]" />

              {/* Desktop Navigation — centered */}
              <nav className="hidden lg:flex items-center justify-center flex-1">
                <ul className="flex items-center gap-x-10 xl:gap-x-14">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-block whitespace-nowrap text-sm font-medium text-[#1A1A1A] transition-all duration-300 hover:scale-105 hover:text-[#C5A059]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA — far right */}
              <div className="hidden lg:flex items-center w-[110px] justify-end">
                <Link
                  href="/contact-us"
                  className="whitespace-nowrap rounded-full border border-[#C5A059] px-4 py-1.5 text-xs font-medium text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-white"
                >
                    {t("nav.sendRequest")}
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059]/50 text-[#C5A059] lg:hidden hover:border-[#C5A059] transition-colors"
                aria-label={t("social.toggleMenu")}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
      </div>

      {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-x-0 top-[90px] mx-4 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-500 ease-in-out lg:hidden border border-[#e9e2d4] ${
            isMobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
        <div className="flex flex-col p-6 space-y-6">
            <nav>
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block text-lg font-medium text-[#1A1A1A] transition-all duration-300 hover:scale-105 hover:text-[#C5A059]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>


        </div>
      </div>
    </header>
  );
}
