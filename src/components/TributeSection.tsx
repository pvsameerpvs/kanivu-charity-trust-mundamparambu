"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame } from "lucide-react";

export default function TributeSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100/20 rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-3">
            <Flame className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">
              ആദരാഞ്ജലികൾ
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">ഷിബിൽ റഹ്മാൻ</p>

          <div className="flex justify-center mb-8">
            <div className="relative w-56 h-64 sm:w-64 sm:h-72">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-200/50 to-transparent rounded-[50%] -top-3 -left-3 -right-3 -bottom-3" />
              <div className="relative w-full h-full rounded-[50%] overflow-hidden border-4 border-amber-100 shadow-xl shadow-amber-200/50">
                <Image
                  src="/images/shibili/shibili.jpeg"
                  alt="ആദരാഞ്ജലികൾ - ഷിബിലി"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, 256px"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              മൂന്ന് മനുഷ്യജീവനുകൾ രക്ഷിക്കുന്നതിനുള്ള ധീരമായ ശ്രമത്തിനിടെയാണ് നമ്മുടെ പ്രിയ സുഹൃത്ത് അകാലത്തിൽ നമ്മെ വിട്ടുപിരിഞ്ഞത്. സ്വന്തം സുരക്ഷയെക്കാൾ മറ്റുള്ളവരുടെ ജീവന് പ്രാധാന്യം നൽകിയ അദ്ദേഹത്തിന്റെ മാനവികതയും ആത്മത്യാഗവും എന്നും സ്മരിക്കപ്പെടും.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              എപ്പോഴും പുഞ്ചിരിയോടെ, എല്ലാവരോടും സ്നേഹത്തോടെയും കരുതലോടെയും പെരുമാറിയ അദ്ദേഹത്തിന്റെ വേർപാട് കുടുംബത്തിനും സുഹൃത്തുക്കൾക്കും സമൂഹത്തിനും തീരാനഷ്ടമാണ്.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              ഇന്ന് കനിവ് ചാരിറ്റിയുടെ വെബ്സൈറ്റ് സമർപ്പിക്കുന്ന ഈ വേളയിൽ, അദ്ദേഹത്തിന്റെ സ്മരണയ്ക്ക് ഞങ്ങൾ ആദരാഞ്ജലികൾ അർപ്പിക്കുന്നു. മനുഷ്യസ്നേഹത്തിന്റെയും നിസ്വാർത്ഥ സേവനത്തിന്റെയും പ്രതീകമായി അദ്ദേഹത്തിന്റെ ജീവിതവും പ്രവർത്തനവും എന്നും പ്രചോദനമായി നിലനിൽക്കും.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              അദ്ദേഹത്തിന്റെ കുടുംബാംഗങ്ങളുടെയും പ്രിയപ്പെട്ടവരുടെയും ദുഃഖത്തിൽ ഞങ്ങളും പങ്കുചേരുന്നു. ഈ വേർപാടിന്റെ വേദന അതിജീവിക്കാനുള്ള ശക്തിയും ധൈര്യവും അവർക്ക് ലഭിക്കട്ടെയെന്ന് ആത്മാർത്ഥമായി ആശംസിക്കുന്നു.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              പ്രിയ സുഹൃത്തിന് കണ്ണീരോടെ ആദരാഞ്ജലികൾ.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
