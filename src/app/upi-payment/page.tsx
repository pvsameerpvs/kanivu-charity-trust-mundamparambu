import type { Metadata } from "next"
import UPIPaymentWidget from "@/components/UPIPaymentWidget"
import RazorpayCheckout from "@/components/RazorpayCheckout"
import { HandHeart, ShieldCheck, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-dvh bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
              <HandHeart className="w-4 h-4 text-gray-400" />
              കനിവ് ചാരിറ്റി ട്രസ്റ്റ്
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Donate Online
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Support education, healthcare, and housing for those in need.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Secure
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <span>256-bit Encryption</span>
              <div className="w-px h-3 bg-gray-200" />
              <span>Razorpay</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-10">
        <div className="max-w-5xl mx-auto">
          {/* Family Sponsorship Banner */}
          <Link href="/family-donation">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-lg shadow-red-200 hover:shadow-xl transition-all cursor-pointer group">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 sm:size-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Users className="size-5 sm:size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base">കുടുംബ സംരക്ഷണ പദ്ധതി</h3>
                    <p className="text-white/80 text-xs sm:text-sm">മാസം ₹750 മാത്രം - ഒരു കുടുംബത്തിന് ആശ്വാസമായി മാറുക</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white font-semibold text-sm bg-white/20 rounded-full px-4 py-2 group-hover:bg-white/30 transition-colors">
                  കൂടുതൽ അറിയുക
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* UPI Section */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Pay via UPI</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Google Pay, PhonePe, Paytm or scan QR</p>
              </div>
              <UPIPaymentWidget />
            </div>

            {/* Card Section */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Pay via Card / NetBanking</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Credit Card, Debit Card, or Internet Banking</p>
              </div>
              <RazorpayCheckout />
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            All payments are processed securely through Razorpay. We do not store your card or bank details.
          </p>
        </div>
      </div>
    </div>
  )
}
