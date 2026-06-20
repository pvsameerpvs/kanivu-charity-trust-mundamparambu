"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "ഹോം", href: "#home" },
  { label: "ഞങ്ങളെ കുറിച്ച്", href: "#about" },
  { label: "സേവനങ്ങൾ", href: "#services" },
  { label: "പ്രവർത്തനങ്ങൾ", href: "#activities" },
  { label: "ഭവന പദ്ധതി", href: "#home-project" },
  { label: "വിദ്യാഭ്യാസ സഹായം", href: "#education" },
  { label: "ഗ്യാലറി", href: "#gallery" },
  { label: "സംഭാവന", href: "#donation" },
  { label: "ബന്ധപ്പെടുക", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
            <Image
              src="/images/kaniv/kaniv-logo.svg"
              alt="കനിവ് ചാരിറ്റി ട്രസ്റ്റ് ലോഗോ"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold text-gray-900 leading-tight">
              കനിവ് ചാരിറ്റി ട്രസ്റ്റ്
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 tracking-wider">
              KANIV CHARITY TRUST • MUNDAMPARAMBU
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1CA3D8] rounded-lg hover:bg-[#EAF7FD] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden sm:inline-flex bg-[#EF1C25] hover:bg-[#d91920] text-white rounded-full px-5 h-10 gap-2 shadow-lg shadow-red-200 hover:shadow-xl transition-all duration-300">
              <Heart className="w-4 h-4 fill-current" />
              സഹായിക്കാം
            </Button>
          </a>

          <Button variant="ghost" size="icon" className="h-10 w-10 lg:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-bold text-gray-900">മെനു</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1CA3D8] hover:bg-[#EAF7FD] rounded-xl transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t">
                  <a
                    href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-[#EF1C25] hover:bg-[#d91920] text-white rounded-full gap-2">
                      <Heart className="w-4 h-4 fill-current" />
                      സഹായിക്കാം
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
