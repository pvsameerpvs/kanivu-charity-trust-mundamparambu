"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919567178007";

const captions = [
  "കനിവ് കൂട്ടായ്മ",
  "സഹായം കൈമാറുന്ന നിമിഷം",
  "ഒരു ഭവനം പദ്ധതി",
  "വിദ്യാർത്ഥികൾക്ക് കൈത്താങ്ങ്",
  "ഫുട്ബോൾ ടൂർണമെന്റ്",
  "ഓഫീസ് ഉദ്ഘാടനം",
  "ജനകീയ കൂട്ടായ്മ",
  "സ്നേഹത്തിന്റെ നിമിഷങ്ങൾ",
  "കരുണയുടെ കൈത്താങ്ങ്",
  "കനിവിന്റെ പ്രവർത്തകർ",
];

const aspectRatios = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[16/10]",
  "aspect-[2/3]",
  "aspect-[3/2]",
];

interface GalleryImage {
  src: string;
  caption: string;
  aspect: string;
  id: string;
}

function buildRowImages(startIdx: number, count: number): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => {
    const num = ((startIdx - 1 + i) % 68) + 1;
    return {
      src: `/images/gallery/gallery${num}.jpeg`,
      caption: captions[i % captions.length],
      aspect: aspectRatios[i % aspectRatios.length],
      id: `g-${num}`,
    };
  });
}

const row1 = buildRowImages(1, 23);
const row2 = buildRowImages(24, 23);
const row3 = buildRowImages(47, 22);

function MarqueeRow({
  images,
  direction,
  speed = 60,
}: {
  images: GalleryImage[];
  direction: "left" | "right";
  speed?: number;
}) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-container relative flex overflow-hidden w-full">
      <div
        className={`flex gap-3 md:gap-4 ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={`${img.id}-${i}`}
            className={`relative flex-shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${img.aspect} w-[170px] sm:w-[210px] md:w-[250px] lg:w-[280px] group/card`}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover/card:scale-110"
              sizes="(max-width: 640px) 170px, (max-width: 768px) 210px, (max-width: 1024px) 250px, 280px"
            />

          </div>
        ))}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-20 md:py-28 bg-[#F8FBFF] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CA3D8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F7941D]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 md:mb-5 text-[#1CA3D8] border-[#1CA3D8]/30 bg-[#1CA3D8]/5 rounded-full text-xs md:text-sm font-medium"
            >
              <Camera className="w-3.5 h-3.5" />
              പ്രവർത്തന ഗ്യാലറി
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] mb-4 leading-tight">
              കനിവിന്റെ ഓർമ്മ ചിത്രങ്ങൾ
            </h2>

            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              സഹായം, സേവനം, കൂട്ടായ്മ — കനിവിന്റെ ഓരോ പ്രവർത്തനവും
              സമൂഹത്തിനായുള്ള സ്നേഹത്തിന്റെ അടയാളങ്ങളാണ്.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MarqueeRow images={row1} direction="left" speed={60} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MarqueeRow images={row2} direction="right" speed={65} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MarqueeRow images={row3} direction="left" speed={55} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-12 md:mt-16"
          >
            <Link href="/gallery">
              <Button className="h-11 md:h-12 px-6 md:px-8 rounded-full bg-[#1CA3D8] hover:bg-[#1CA3D8]/90 text-white font-medium text-sm md:text-base gap-2 shadow-lg shadow-[#1CA3D8]/20">
                കൂടുതൽ ചിത്രങ്ങൾ കാണാം
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-11 md:h-12 px-6 md:px-8 rounded-full border-[#1CA3D8]/30 text-[#1CA3D8] hover:bg-[#1CA3D8]/5 font-medium text-sm md:text-base gap-2"
              >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp വഴി ബന്ധപ്പെടുക
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
