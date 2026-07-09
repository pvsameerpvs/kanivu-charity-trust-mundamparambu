import type { Metadata } from "next"
import FamilyDonationCheckout from "@/components/FamilyDonationCheckout"
import { Heart, ShieldCheck, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "കുടുംബ സംരക്ഷണ പദ്ധതി | കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്",
  description:
    "കുടുംബ സംരക്ഷണ പദ്ധതി - മാസം 1,000 രൂപ മാത്രം. ഒരു കുടുംബത്തിന്റെ ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന ആവശ്യങ്ങൾക്കായി സഹായിക്കുക.",
  openGraph: {
    title: "കുടുംബ സംരക്ഷണ പദ്ധതി - കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
    description: "മാസം 1,000 രൂപ മാത്രം - ഒരു കുടുംബത്തിന് ആശ്വാസമായി മാറുക",
  },
}

const impactItems = [
  {
    icon: Heart,
    title: "പോഷകാഹാര സഹായം",
    desc: "കുടുംബത്തിന് മാസാന്ത ഭക്ഷ്യ കിറ്റ്",
    colors: { bg: "bg-red-50", icon: "text-red-500", border: "border-red-100" },
  },
  {
    icon: Heart,
    title: "വൈദ്യ സഹായം",
    desc: "അടിസ്ഥാന ആരോഗ്യ പരിരക്ഷയും മരുന്ന് സഹായവും",
    colors: { bg: "bg-blue-50", icon: "text-blue-500", border: "border-blue-100" },
  },
  {
    icon: Users,
    title: "അന്തസ്സും പ്രതീക്ഷയും",
    desc: "കുടുംബങ്ങൾ അന്തസ്സോടെ ജീവിക്കുന്നുവെന്ന് ഉറപ്പാക്കൽ",
    colors: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-100" },
  },
]

export default function FamilyDonationPage() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <Heart className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">കനിവ് ചാരിറ്റി ട്രസ്റ്റ്</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
              കുടുംബ സംരക്ഷണ പദ്ധതി
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto">
              ഒരു കുടുംബത്തിന്റെ മാസ ചിലവ് സ്പോൺസർ ചെയ്യുക — ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന ആവശ്യങ്ങൾ.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <div className="inline-flex items-center gap-1.5 text-white/70 text-sm">
                <ShieldCheck className="w-4 h-4" />
                സുതാര്യം
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white font-semibold">₹1,000/മാസം ഒരു കുടുംബത്തിന്</span>
              <div className="w-px h-4 bg-white/20" />
              <div className="inline-flex items-center gap-1.5 text-white/70 text-sm">
                <ArrowRight className="w-4 h-4" />
                100% കുടുംബങ്ങളിലേക്ക്
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Checkout - 2 columns */}
            <div className="lg:col-span-2">
              <FamilyDonationCheckout />
            </div>

            {/* Impact Sidebar - 1 column */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  നിങ്ങളുടെ സംഭാവന എത്തുന്നത്
                </h3>
                <div className="space-y-3">
                  {impactItems.map((item) => {
                    const colors = item.colors
                    const Icon = item.icon
                    return (
                      <div key={item.title} className={`${colors.bg} ${colors.border} border rounded-xl p-3`}>
                        <div className="flex items-start gap-2.5">
                          <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center shrink-0`}>
                            <Icon className={`w-4 h-4 ${colors.icon}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-xs">{item.title}</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-5 text-center">
                <p className="text-xs text-red-700 font-medium">
                  നിങ്ങളുടെ സംഭാവനയുടെ 100% കുടുംബ സഹായത്തിനായി എത്തുന്നു.
                </p>
                <div className="flex items-center justify-center gap-1 mt-2 text-[11px] text-red-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  പൂർണ്ണ സുതാര്യത ഉറപ്പ്
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
