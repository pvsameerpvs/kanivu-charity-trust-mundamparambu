import type { Metadata } from "next"
import FamilyDonationCheckout from "@/components/FamilyDonationCheckout"
import { Heart, ShieldCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Family Sponsorship | കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്",
  description:
    "കുടുംബ സംരക്ഷണ പദ്ധതി - മാസം 750 രൂപ മാത്രം. ഒരു കുടുംബത്തിന്റെ ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന ആവശ്യങ്ങൾക്കായി സഹായിക്കുക.",
  openGraph: {
    title: "Family Sponsorship - കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
    description: "മാസം 750 രൂപ മാത്രം - ഒരു കുടുംബത്തിന് ആശ്വാസമായി മാറുക",
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
              Family Sponsorship Program
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Sponsor a struggling family&apos;s monthly expenses — food, medicine, and basic supplies.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Transparent
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <span>₹750/month per family</span>
              <div className="w-px h-3 bg-gray-200" />
              <span>100% reaches families</span>
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
              <h4 className="font-semibold text-gray-900 text-sm">Nutrition Support</h4>
              <p className="text-xs text-gray-500 mt-1">Monthly food supplies for the family</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5 text-blue-500" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Medical Aid</h4>
              <p className="text-xs text-gray-500 mt-1">Basic healthcare & medicine support</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Dignity & Hope</h4>
              <p className="text-xs text-gray-500 mt-1">Ensuring families live with dignity</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            All payments are processed securely through Razorpay. 100% of your donation goes to family support.
          </p>
        </div>
      </div>
    </div>
  )
}
