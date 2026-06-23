"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Users,
  QrCode,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import UPIPaymentWidget from "@/components/UPIPaymentWidget";

export default function DonationSection() {
  const [showUPI, setShowUPI] = useState(false);

  return (
    <SectionWrapper
      id="donation"
      className="py-20 md:py-28 bg-gradient-to-br from-[#EF1C25]/5 via-[#F7941D]/5 to-[#1CA3D8]/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#EF1C25]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1CA3D8]/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#F7941D]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <Heart className="w-4 h-4 text-[#EF1C25] fill-current" />
              <span className="text-sm font-medium text-[#EF1C25]">
                സംഭാവന
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              നിങ്ങളുടെ ചെറിയ സഹായം ഒരാളുടെ വലിയ പ്രതീക്ഷയാണ്
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              കനിവിന്റെ ഓരോ പ്രവർത്തനവും ജനങ്ങളുടെ സഹായത്തോടെയാണ് മുന്നോട്ട്
              പോകുന്നത്. ചികിത്സ, വിദ്യാഭ്യാസം, ഭവന സഹായം, ഭക്ഷണ സഹായം
              തുടങ്ങിയ പദ്ധതികൾക്ക് നിങ്ങളുടെ സംഭാവന വലിയ മാറ്റം സൃഷ്ടിക്കും.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                  <WhatsAppIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  WhatsApp വഴി ബന്ധപ്പെടുക
                </h3>
                <p className="text-sm text-gray-500">
                  ഞങ്ങളുമായി നേരിട്ട് സംസാരിക്കുക
                </p>
              </CardContent>
            </Card>

            <button
              onClick={() => setShowUPI(!showUPI)}
              className="text-left w-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                    <QrCode className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Google Pay / UPI
                  </h3>
                  <p className="text-sm text-gray-500">
                    ഓൺലൈൻ വഴി സഹായം നൽകുക
                  </p>
                </CardContent>
              </Card>
            </button>

            <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  നേരിട്ട് സംസാരിക്കുക
                </h3>
                <p className="text-sm text-gray-500">
                  ട്രസ്റ്റ് ഭാരവാഹികളുമായി ബന്ധപ്പെടുക
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {showUPI && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-10"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <UPIPaymentWidget />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#25D366] hover:bg-[#22c35e] text-white rounded-full px-10 h-14 text-lg gap-3 shadow-xl shadow-green-200 hover:shadow-2xl transition-all duration-300 animate-pulse-soft">
                <WhatsAppIcon className="w-6 h-6" />
                WhatsApp വഴി സഹായിക്കാം
              </Button>
            </a>

            <p className="text-2xl font-bold text-gray-900 tracking-wide">
              +91 9567178007
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              നിങ്ങളുടെ സഹായം അർഹരായവരിലേക്ക് സുതാര്യമായി എത്തിക്കുന്നതാണ്
              കനിവിന്റെ വാഗ്ദാനം.
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
