"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import WhatsAppIcon from "@/components/WhatsAppIcon"
import { Badge } from "@/components/ui/badge"
import type { Equipment } from "@/lib/equipments"
import { getWhatsAppUrl } from "@/lib/equipments"

interface EquipmentCardProps {
  equipment: Equipment
  index: number
}

export default function EquipmentCard({ equipment, index }: EquipmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#1CA3D8]/20 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F0F9FF] to-[#E8F4FD]">
          <Image
            src={equipment.image}
            alt={equipment.nameMl}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 border-0 shadow-sm"
          >
            {equipment.categoryMl}
          </Badge>
        </div>

        <div className="flex-1 flex flex-col p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">{equipment.nameMl}</h3>
          <p className="text-xs text-gray-500 mb-2">{equipment.nameEn}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{equipment.shortDescMl}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs text-gray-500 line-clamp-1">{equipment.patientUseMl}</span>
          </div>

          <div className="mt-auto flex items-center gap-2">
            <Link
              href={`/equipments/${equipment.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 h-10 rounded-xl bg-gradient-to-r from-[#1CA3D8] to-[#1A8FC0] text-white text-sm font-medium hover:from-[#1A8FC0] hover:to-[#1579A8] transition-all duration-300 shadow-md shadow-[#1CA3D8]/20"
            >
              കൂടുതൽ വിവരങ്ങൾ
              <ChevronRight className="size-4" />
            </Link>
            <a
              href={getWhatsAppUrl(equipment.nameMl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-10 rounded-xl bg-[#25D366] hover:bg-[#1DA95A] text-white transition-all duration-300 shadow-md shadow-[#25D366]/20 shrink-0"
              title="WhatsApp വഴി അന്വേഷിക്കുക"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
