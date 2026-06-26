"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/about.jpeg"
                  alt="കനിവ് ചാരിറ്റി ട്രസ്റ്റ് കൂട്ടായ്മ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F7941D]/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1CA3D8]/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
              <Heart className="w-4 h-4 text-[#EF1C25] fill-current" />
              <span className="text-sm font-medium text-[#1CA3D8]">
                ഞങ്ങളെ കുറിച്ച്
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              കനിവ് എന്താണ്?
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                മുണ്ടംപറമ്പ് പ്രദേശത്തെ സാമൂഹിക-ജീവകാരുണ്യ പ്രവർത്തനങ്ങളിൽ
                ജനങ്ങളുടെ പങ്കാളിത്തത്തോടെ മുന്നോട്ട് പോകുന്ന ഒരു സേവന
                കൂട്ടായ്മയാണ് കനിവ് ചാരിറ്റി ട്രസ്റ്റ്.
              </p>
              <p>
                &ldquo;കയ്യെത്തും ദൂരത്തൊരു കൈത്താങ്ങ്&rdquo; എന്ന
                ആശയവുമായി, സഹായം ആവശ്യമുള്ള ഓരോ മനുഷ്യനിലേക്കും കരുണയുടെ
                സന്ദേശം എത്തിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.
              </p>
              <p>
                നിർധന കുടുംബങ്ങൾ, ചികിത്സാ സഹായം ആവശ്യമായ രോഗികൾ,
                പഠനസഹായം ആവശ്യമായ വിദ്യാർത്ഥികൾ, വീടില്ലാത്തവർ, സാമൂഹികമായി
                പിന്നാക്കം നിൽക്കുന്നവർ എന്നിവർക്കായി കഴിയുന്ന സഹായങ്ങൾ
                ജനങ്ങളുടെ സഹകരണത്തോടെ എത്തിക്കുകയാണ് കനിവിന്റെ പ്രധാന
                പ്രവർത്തനം.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#volunteer">
                <Button className="bg-[#1CA3D8] hover:bg-[#1890c0] text-white rounded-full px-7 h-11 gap-2 shadow-lg shadow-blue-200">
                  കനിവിനൊപ്പം ചേരൂ
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/upi-payment">
                <Button
                  variant="outline"
                  className="border-2 border-[#EF1C25] text-[#EF1C25] hover:bg-[#EF1C25] hover:text-white rounded-full px-7 h-11"
                >
                  സംഭാവന ചെയ്യൂ
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
