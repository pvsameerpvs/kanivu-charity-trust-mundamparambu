import type { Metadata } from "next"
import FamilyDonationCheckout from "@/components/FamilyDonationCheckout"
import { Heart, ShieldCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "കുടുംബ സംരക്ഷണ പദ്ധതി | കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്",
  description:
    "കുടുംബ സംരക്ഷണ പദ്ധതി - മാസം 1,000 രൂപ മാത്രം. ഒരു കുടുംബത്തിന്റെ ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന ആവശ്യങ്ങൾക്കായി സഹായിക്കുക.",
  openGraph: {
    title: "കുടുംബ സംരക്ഷണ പദ്ധതി - കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
    description: "മാസം 1,000 രൂപ മാത്രം - ഒരു കുടുംബത്തിന് ആശ്വാസമായി മാറുക",
  },
}

export default function FamilyDonationPage() {
  return (
    <div className="min-h-dvh bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              കനിവ് ചാരിറ്റി ട്രസ്റ്റ്
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              കുടുംബ സംരക്ഷണ പദ്ധതി
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              ഒരു കുടുംബത്തിന്റെ മാസ ചിലവ് സ്പോൺസർ ചെയ്യുക — ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന ആവശ്യങ്ങൾ.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                സുതാര്യം
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <span>₹1,000/മാസം ഒരു കുടുംബത്തിന്</span>
              <div className="w-px h-3 bg-gray-200" />
              <span>100% കുടുംബങ്ങളിലേക്ക്</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <FamilyDonationCheckout />
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">പോഷകാഹാര സഹായം</h4>
              <p className="text-xs text-gray-500 mt-1">കുടുംബത്തിന് മാസാന്ത ഭക്ഷ്യ കിറ്റ്</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5 text-blue-500" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">വൈദ്യ സഹായം</h4>
              <p className="text-xs text-gray-500 mt-1">അടിസ്ഥാന ആരോഗ്യ പരിരക്ഷയും മരുന്ന് സഹായവും</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">അന്തസ്സും പ്രതീക്ഷയും</h4>
              <p className="text-xs text-gray-500 mt-1">കുടുംബങ്ങൾ അന്തസ്സോടെ ജീവിക്കുന്നുവെന്ന് ഉറപ്പാക്കൽ</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            നിങ്ങളുടെ സംഭാവനയുടെ 100% കുടുംബ സഹായത്തിനായി എത്തുന്നു.
          </p>
        </div>
      </div>
    </div>
  )
}
