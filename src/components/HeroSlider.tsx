"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    src: "/images/kaniv/kaniv-group.svg",
    alt: "കനിവ് ചാരിറ്റി ട്രസ്റ്റ് കൂട്ടായ്മ",
  },
  {
    src: "/images/kaniv/kaniv-award.svg",
    alt: "കനിവ് ആദരവും അംഗീകാരവും",
  },
  {
    src: "/images/kaniv/kaniv-home-support.svg",
    alt: "കനിവ് ഭവന സഹായ പദ്ധതി",
  },
  {
    src: "/images/kaniv/kaniv-football.svg",
    alt: "കനിവ് ഫുട്ബോൾ ടൂർണമെന്റ്",
  },
  {
    src: "/images/kaniv/kaniv-office-opening.svg",
    alt: "കനിവ് ഓഫീസ് ഉദ്ഘാടനം",
  },
  {
    src: "/images/kaniv/kaniv-education-support.svg",
    alt: "കനിവ് വിദ്യാഭ്യാസ സഹായ പ്രവർത്തനം",
  },
];

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
      className="relative w-full h-dvh min-h-[600px] max-h-[900px] overflow-hidden"
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
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-[#F8FBFF]/90" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1CA3D8]/10 via-transparent to-[#F7941D]/10" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FBFF] to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 rounded-full px-4 py-1.5 text-sm mb-6 shadow-sm">
                <span className="text-[#EF1C25] font-semibold">Reg: 99/23</span>
                <span className="mx-2 text-gray-300">•</span>
                മുണ്ടംപറമ്പ്
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4"
            >
              കയ്യെത്തും ദൂരത്തൊരു{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF1C25] via-[#F7941D] to-[#1CA3D8]">
                കൈത്താങ്ങ്
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl"
            >
              കരുണയും കൂട്ടായ്മയും സേവനവും ഒന്നിക്കുന്ന മുണ്ടംപറമ്പിന്റെ
              ജീവകാരുണ്യ പ്രസ്ഥാനം.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl"
            >
              ചികിത്സാ സഹായം, വിദ്യാഭ്യാസ പിന്തുണ, ഭവന സഹായം, സാമൂഹിക
              ഇടപെടലുകൾ എന്നിവയിലൂടെ ആവശ്യക്കാരുടെ ജീവിതത്തിൽ പ്രതീക്ഷയുടെ
              വെളിച്ചം പകരുകയാണ് കനിവ് ചാരിറ്റി ട്രസ്റ്റ്.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#EF1C25] hover:bg-[#d91920] text-white rounded-full px-8 h-12 text-base gap-2 shadow-xl shadow-red-200 hover:shadow-2xl transition-all duration-300 animate-pulse-soft">
                  <Heart className="w-5 h-5 fill-current" />
                  സഹായിക്കാം
                </Button>
              </a>
              <a href="#about">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-[#1CA3D8] text-gray-700 hover:text-[#1CA3D8] rounded-full px-8 h-12 text-base transition-all duration-300"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#1CA3D8] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
