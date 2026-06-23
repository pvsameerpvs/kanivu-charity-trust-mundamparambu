"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "ഹോം", href: "/" },
  { label: "ഞങ്ങളെ കുറിച്ച്", href: "/#about" },
  { label: "വൈദ്യുപകരണങ്ങൾ", href: "/equipments" },
  { label: "സേവനങ്ങൾ", href: "/#services" },
  { label: "പ്രവർത്തനങ്ങൾ", href: "/#activities" },
  { label: "ഗ്യാലറി", href: "/gallery" },
  { label: "സംഭാവന", href: "/#donation" },
  { label: "ബന്ധപ്പെടുക", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg shadow-gray-900/10 border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-white/70"
        }`}
      >
        <div className="container mx-auto flex h-20 md:h-[76px] items-center justify-between pl-3 pr-8 sm:px-4">
          <Link href="/" className="flex h-full shrink-0 items-center">
            <Image
              src="/images/kaniv/kaniv-logo.png"
              alt="കനിവ് ചാരിറ്റി ട്രസ്റ്റ് ലോഗോ"
              width={180}
              height={55}
              className="h-[76px] w-auto object-contain md:h-[70px]"
              sizes="(max-width: 640px) 104px, 180px"
              priority
            />
          </Link>

          {/* Mobile centered title */}
          <div className="hidden max-lg:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 text-center pointer-events-none z-0">
            <div className="font-['Baloo_Chettan_2',_sans-serif] font-extrabold text-black text-[10px] leading-tight">
              “കയ്യെത്തും ദൂരത്തൊരു കൈത്താങ്ങ്”
            </div>
            <div className="font-['Baloo_Chettan_2',_Manjari,_sans-serif] font-bold text-black text-[9px] leading-snug">
              കനിവ് ചാരിറ്റബിൾ ട്രസ്റ്റ് മുണ്ടംപറമ്പ്
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-0.5 mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1CA3D8] rounded-lg hover:bg-[#EAF7FD] transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex"
            >
              <Button className="inline-flex h-9 bg-[#EF1C25] hover:bg-[#d91920] text-white rounded-full px-4 text-xs gap-1.5 shadow-lg shadow-red-200 hover:shadow-xl transition-all duration-300">
                <Heart className="size-4 fill-current" />
                സഹായിക്കാം
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full bg-gray-50 text-gray-900 hover:bg-[#EAF7FD] hover:text-[#1CA3D8] lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetContent side="right" className="w-80 max-w-[85vw] p-0" showCloseButton={false}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-5 border-b">
                    <Image
                      src="/images/kaniv/kaniv-logo.png"
                      alt="കനിവ് ചാരിറ്റി ട്രസ്റ്റ് ലോഗോ"
                      width={180}
                      height={60}
                      className="object-contain h-16 w-auto"
                    />
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3.5 text-base font-medium text-gray-700 hover:text-[#1CA3D8] hover:bg-[#EAF7FD] rounded-xl transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-5 border-t">
                    <a
                      href="https://www.instagram.com/kaniv_mundamparamba?utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full h-12 text-base font-semibold shadow-md shadow-pink-500/10 hover:opacity-90 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="h-20 md:h-[76px]" aria-hidden="true" />
    </>
  );
}
