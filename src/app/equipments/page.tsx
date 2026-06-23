import type { Metadata } from "next"
import { Pill } from "lucide-react"
import EquipmentGrid from "@/components/EquipmentGrid"

export const metadata: Metadata = {
  title: "വൈദ്യുപകരണങ്ങൾ | കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
  description:
    "കനിവ് ചാരിറ്റി ട്രസ്റ്റിൽ ലഭ്യമായ വൈദ്യുപകരണങ്ങൾ - വീൽചെയർ, വാക്കർ, കമോഡ് കസേര, ഓക്സിജൻ സിലിണ്ടർ, എയർ ബെഡ് എന്നിവ വാടകയ്ക്കും വിൽപ്പനയ്ക്കും ലഭ്യമാണ്.",
}

export default function EquipmentsPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1CA3D8]/5 via-transparent to-[#F7941D]/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1CA3D8]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1CA3D8]/10 text-[#1CA3D8] text-sm font-medium mb-5">
              <Pill className="size-4" />
              മെഡിക്കൽ ഉപകരണങ്ങൾ
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              വൈദ്യുപകരണങ്ങൾ
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              രോഗികൾക്കും പ്രായമായവർക്കും ആവശ്യമായ വിവിധ മെഡിക്കൽ ഉപകരണങ്ങൾ ഞങ്ങളുടെ ട്രസ്റ്റിൽ ലഭ്യമാണ്. വാടകയ്ക്കും വിൽപ്പനയ്ക്കും എടുക്കാവുന്നതാണ്.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <EquipmentGrid />
        </div>
      </section>
    </main>
  )
}
