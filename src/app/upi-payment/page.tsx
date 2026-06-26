import type { Metadata } from "next"
import UPIPaymentWidget from "@/components/UPIPaymentWidget"
import RazorpayCheckout from "@/components/RazorpayCheckout"

export const metadata: Metadata = {
  title: "Donate Online | കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്",
  description:
    "കാർഡ്, UPI, നെറ്റ് ബാങ്കിംഗ്, ഗൂഗിൾ പേ, ഫോൺപേ, പേടിഎം എന്നിവ വഴി കനിവ് ചാരിറ്റി ട്രസ്റ്റിലേക്ക് സംഭാവന ചെയ്യുക.",
  openGraph: {
    title: "Donate Online - കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
    description: "കനിവ് ചാരിറ്റി ട്രസ്റ്റിലേക്ക് ഓൺലൈൻ വഴി സംഭാവന ചെയ്യുക",
  },
}

export default function UPIPaymentPage() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-[#EF1C25]/5 via-[#F7941D]/5 to-[#1CA3D8]/5">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              ഓൺലൈൻ വഴി സഹായം നൽകുക
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              കാർഡ്, UPI, നെറ്റ് ബാങ്കിംഗ്, Google Pay, PhonePe, Paytm എന്നിവ വഴി
              സംഭാവന ചെയ്യാം
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
              <UPIPaymentWidget />
            </div>

            <div className="flex items-center gap-3 max-w-md mx-auto">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
              <RazorpayCheckout />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
