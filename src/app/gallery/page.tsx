import type { Metadata } from "next"
import { Camera } from "lucide-react"
import GalleryGrid from "@/components/GalleryGrid"

export const metadata: Metadata = {
  title: "ഗ്യാലറി | കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
  description:
    "കനിവ് ചാരിറ്റി ട്രസ്റ്റിന്റെ പ്രവർത്തന ചിത്രങ്ങൾ - സഹായം, സേവനം, കൂട്ടായ്മ എന്നിവയുടെ ഓർമ്മ ചിത്രങ്ങൾ.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1CA3D8]/5 via-transparent to-[#F7941D]/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1CA3D8]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1CA3D8]/10 text-[#1CA3D8] text-sm font-medium mb-5">
              <Camera className="size-4" />
              പ്രവർത്തന ഗ്യാലറി
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              കനിവിന്റെ ഓർമ്മ ചിത്രങ്ങൾ
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              സഹായം, സേവനം, കൂട്ടായ്മ — കനിവിന്റെ ഓരോ പ്രവർത്തനവും
              സമൂഹത്തിനായുള്ള സ്നേഹത്തിന്റെ അടയാളങ്ങളാണ്.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>
    </main>
  )
}
