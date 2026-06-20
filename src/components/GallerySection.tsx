"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionWrapper from "@/components/SectionWrapper";

const galleryItems = [
  {
    src: "/images/hero-section/hero1.jpeg",
    caption: "കനിവ് കൂട്ടായ്മ",
    category: "പരിപാടികൾ",
  },
  {
    src: "/images/hero-section/hero5.jpeg",
    caption: "ആദരവും സഹായവും",
    category: "സഹായ വിതരണം",
  },
  {
    src: "/images/hero-section/hero10.jpeg",
    caption: "ഭവന സഹായ പ്രവർത്തനം",
    category: "ഭവന പദ്ധതി",
  },
  {
    src: "/images/hero-section/hero15.jpeg",
    caption: "ഫുട്ബോൾ ടൂർണമെന്റ്",
    category: "കായിക പ്രവർത്തനങ്ങൾ",
  },
  {
    src: "/images/hero-section/hero25.jpeg",
    caption: "വിദ്യാർത്ഥികൾക്ക് കൈത്താങ്ങ്",
    category: "വിദ്യാഭ്യാസ സഹായം",
  },
  {
    src: "/images/hero-section/hero20.jpeg",
    caption: "ഓഫീസ് ഉദ്ഘാടനം",
    category: "പരിപാടികൾ",
  },
];

const categories = [
  "എല്ലാം",
  "പരിപാടികൾ",
  "സഹായ വിതരണം",
  "ഭവന പദ്ധതി",
  "കായിക പ്രവർത്തനങ്ങൾ",
  "വിദ്യാഭ്യാസ സഹായം",
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("എല്ലാം");

  const filtered =
    activeCategory === "എല്ലാം"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      const items =
        activeCategory === "എല്ലാം"
          ? galleryItems
          : galleryItems.filter((item) => item.category === activeCategory);
      setLightboxIndex((lightboxIndex + 1) % items.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      const items =
        activeCategory === "എല്ലാം"
          ? galleryItems
          : galleryItems.filter((item) => item.category === activeCategory);
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <SectionWrapper id="gallery" className="py-20 md:py-28 bg-[#F8FBFF]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
            <Heart className="w-4 h-4 fill-current text-[#EF1C25]" />
            <span className="text-sm font-medium text-[#1CA3D8]">
              ഗ്യാലറി
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ഞങ്ങളുടെ പ്രവർത്തന ഗ്യാലറി
          </h2>
          <p className="text-gray-600">
            കനിവ് ചാരിറ്റി ട്രസ്റ്റിന്റെ വിവിധ പ്രവർത്തനങ്ങളുടെ ചിത്രങ്ങൾ
          </p>
        </div>

        <Tabs
          defaultValue="എല്ലാം"
          onValueChange={setActiveCategory}
          className="mb-10"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-full px-5 py-2 data-[state=active]:bg-[#1CA3D8] data-[state=active]:text-white text-gray-600 border border-gray-200 data-[state=active]:border-[#1CA3D8]"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.caption}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-sm">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-0 rounded-2xl overflow-hidden">
          {lightboxIndex !== null && (
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].caption}
                fill
                className="object-contain"
              />
            </div>
          )}
          <DialogClose className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70">
            <X className="w-5 h-5" />
          </DialogClose>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {lightboxIndex !== null && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-center font-medium">
                {filtered[lightboxIndex].caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
