"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = Array.from({ length: 22 }, (_, i) => ({
  src: `/images/hero-section/hero${i + 1}.jpeg`,
  alt: `കനിവ് ചാരിറ്റി ട്രസ്റ്റ് - ചിത്രം ${i + 1}`,
}));

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section
      id="home"
      className="relative w-full h-[calc(100dvh-80px)] md:h-[calc(100dvh-76px)] min-h-[400px] sm:min-h-[450px] overflow-hidden"
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1CA3D8]/15 via-transparent to-[#F7941D]/15" />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FBFF] to-transparent" />

      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span className="inline-flex items-center text-xs md:text-sm text-white/80">
            <span className="text-[#F7941D] font-bold">Reg: 99/23</span>
            <span className="mx-2 text-white/40">•</span>
            <span>മുണ്ടംപറമ്പ്</span>
          </span>
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-3 md:mb-4"
            >
              കയ്യെത്തും ദൂരത്തൊരു{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] via-[#EF1C25] to-[#1CA3D8]">
                കൈത്താങ്ങ്
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-3 md:mb-4 max-w-2xl"
            >
              കരുണയും കൂട്ടായ്മയും സേവനവും ഒന്നിക്കുന്ന മുണ്ടംപറമ്പിന്റെ
              ജീവകാരുണ്യ പ്രസ്ഥാനം.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm md:text-base text-white/70 leading-relaxed mb-6 md:mb-8 max-w-2xl hidden md:block"
            >
              ചികിത്സാ സഹായം, വിദ്യാഭ്യാസ പിന്തുണ, ഭവന സഹായം, സാമൂഹിക
              ഇടപെടലുകൾ എന്നിവയിലൂടെ ആവശ്യക്കാരുടെ ജീവിതത്തിൽ പ്രതീക്ഷയുടെ
              വെളിച്ചം പകരുകയാണ് കനിവ് ചാരിറ്റി ട്രസ്റ്റ്.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <a
                href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#EF1C25] hover:bg-[#d91920] text-white rounded-full px-6 md:px-8 h-10 md:h-12 text-sm md:text-base gap-2 shadow-xl shadow-red-500/30 hover:shadow-2xl transition-all duration-300 animate-pulse-soft border-2 border-white/20">
                  <Heart className="size-4 md:size-5 fill-current" />
                  സഹായിക്കാം
                </Button>
              </a>
              <a href="#about">
                <Button
                  variant="outline"
                  className="border-2 border-white/40 hover:border-white text-white/90 hover:text-white rounded-full px-6 md:px-8 h-10 md:h-12 text-sm md:text-base transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                >
                  പ്രവർത്തനങ്ങൾ കാണാം
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
        </motion.div>
      </motion.div>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-11 md:h-11 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/50 transition-all z-10"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-11 md:h-11 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/50 transition-all z-10"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 right-6 md:bottom-28 md:right-8 z-10"
      >
        <a
          href="https://www.instagram.com/kaniv_mundamparamba?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-500/30"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </motion.div>

    </section>
  );
}
