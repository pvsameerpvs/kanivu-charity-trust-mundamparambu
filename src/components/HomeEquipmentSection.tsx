"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Pill } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionWrapper from "@/components/SectionWrapper"
import { equipments } from "@/lib/equipments"

export default function HomeEquipmentSection() {
  const displayEquipments = equipments.slice(0, 8)

  return (
    <SectionWrapper
      id="equipments"
      className="py-16 md:py-24 bg-gradient-to-b from-[#F8FBFF] to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1CA3D8]/10 text-[#1CA3D8] text-sm font-medium mb-4">
              <Pill className="size-4" />
              വൈദ്യുപകരണങ്ങൾ
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              വാടകയ്ക്ക് ലഭ്യമായ മെഡിക്കൽ ഉപകരണങ്ങൾ
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed max-w-xl">
              രോഗികൾക്കും പ്രായമായവർക്കും ആവശ്യമായ വിവിധ വൈദ്യുപകരണങ്ങൾ വാടകയ്ക്കും വിൽപ്പനയ്ക്കും ലഭ്യമാണ്.
            </p>
          </div>
          <Link href="/equipments" className="hidden md:block shrink-0">
            <Button
              variant="outline"
              className="rounded-full h-11 border-gray-300 text-gray-700 hover:text-[#1CA3D8] hover:border-[#1CA3D8] gap-2"
            >
              എല്ലാ ഉപകരണങ്ങളും
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {displayEquipments.map((eq, i) => (
            <motion.div
              key={eq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/equipments/${eq.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#1CA3D8]/20 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#F0F9FF] to-[#E8F4FD] overflow-hidden">
                  <Image
                    src={eq.image}
                    alt={eq.nameMl}
                    fill
                    className="object-contain p-3 md:p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-snug line-clamp-2 text-center">
                    {eq.nameMl}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/equipments">
            <Button
              variant="outline"
              className="rounded-full h-11 border-gray-300 text-gray-700 hover:text-[#1CA3D8] hover:border-[#1CA3D8] gap-2"
            >
              എല്ലാ ഉപകരണങ്ങളും
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
