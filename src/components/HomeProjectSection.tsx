"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, CheckCircle2, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";

const features = [
  "നിർധന കുടുംബങ്ങൾക്ക് വീടൊരുക്കൽ",
  "ജനപങ്കാളിത്തത്തോടെ സഹായനിധി സമാഹരണം",
  "സുതാര്യമായ സഹായ വിതരണം",
  "കുടുംബങ്ങളുടെ മാന്യതയും സുരക്ഷയും മുൻനിർത്തിയുള്ള പ്രവർത്തനം",
];

export default function HomeProjectSection() {
  return (
    <SectionWrapper id="home-project" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFF4E6] rounded-full px-4 py-1.5 mb-4">
              <Home className="w-4 h-4 text-[#F7941D]" />
              <span className="text-sm font-medium text-[#F7941D]">
                ഭവന പദ്ധതി
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              &ldquo;ഒരു ഭവനം&rdquo; — ഒരു കുടുംബത്തിന് സുരക്ഷിതമായ ജീവിതം
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              നാടിലെ നിർധനരായ കുടുംബങ്ങൾക്ക് സുരക്ഷിതമായ താമസസൗകര്യം
              ഒരുക്കുക എന്ന ലക്ഷ്യത്തോടെ കനിവ് ആരംഭിച്ച പ്രധാന ജീവകാരുണ്യ
              പദ്ധതികളിലൊന്നാണ് &ldquo;ഒരു ഭവനം&rdquo;. ജനങ്ങളുടെ
              സഹായവും സഹകരണവും ചേർന്നാൽ ഒരു കുടുംബത്തിന്റെ ജീവിതത്തിൽ വലിയ
              മാറ്റം സൃഷ്ടിക്കാം എന്ന വിശ്വാസത്തിലാണ് ഈ പദ്ധതി മുന്നോട്ട്
              പോകുന്നത്.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1CA3D8] mt-0.5 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#F7941D] hover:bg-[#e0851a] text-white rounded-full px-8 h-12 gap-2 shadow-lg shadow-orange-200">
                <Heart className="w-5 h-5 fill-current" />
                ഈ പദ്ധതിയിലേക്ക് സഹായിക്കാം
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/kaniv/kaniv-home-support.svg"
                  alt="കനിവ് ഭവന സഹായ പദ്ധതി"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#EF1C25]/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F7941D]/20 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
