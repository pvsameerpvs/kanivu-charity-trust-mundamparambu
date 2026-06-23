"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const TOTAL_IMAGES = 100

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
]

const aspectRatios = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[16/10]",
  "aspect-[2/3]",
  "aspect-[3/2]",
]

interface GalleryImage {
  src: string
  caption: string
  aspect: string
  id: string
}

const images: GalleryImage[] = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
  const num = i + 1
  return {
    src: `/images/gallery/gallery${num}.jpeg`,
    caption: captions[i % captions.length],
    aspect: aspectRatios[i % aspectRatios.length],
    id: `g-${num}`,
  }
})

export default function GalleryGrid() {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 md:gap-4 space-y-3 md:space-y-4">
      {images.map((img, i) => (
        <motion.div
          key={img.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.01 }}
          className={`relative break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group ${img.aspect}`}
        >
          <Image
            src={img.src}
            alt={img.caption}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />

        </motion.div>
      ))}
    </div>
  )
}
