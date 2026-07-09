"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TributeSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f6] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-50/50 rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-50/30 rounded-full translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          {/* In Memoriam */}
          <div className="text-center mb-2">
            <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium">
              In Memoriam
            </span>
          </div>

          {/* Name */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-stone-800 mb-1">
            ഷിബിൽ റഹ്മാൻ
          </h2>
          <p className="text-center text-base text-stone-500 font-medium mb-10">
            ആദരാഞ്ജലികൾ
          </p>

          {/* Photo */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-b from-amber-100/50 via-stone-100/30 to-amber-100/50 rounded-[50%]" />
              <div className="relative w-60 h-68 sm:w-72 sm:h-80 rounded-[50%] overflow-hidden border-[3px] border-stone-200 shadow-xl shadow-stone-200/50">
                <Image
                  src="/images/shibili/shibili.jpeg"
                  alt="ഷിബിൽ റഹ്മാൻ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 288px"
                />
              </div>
            </div>
          </div>

          {/* Tribute text */}
          <div className="space-y-5 text-center max-w-xl mx-auto">
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              മൂന്ന് മനുഷ്യജീവനുകൾ രക്ഷിക്കാൻ നടത്തിയ ധീരമായ ശ്രമത്തിനിടെയാണ് നമ്മുടെ പ്രിയ സുഹൃത്ത് <strong>ഷിബിൽ റഹ്മാൻ</strong> അകാലത്തിൽ നമ്മെ വിട്ടുപിരിഞ്ഞത്. സ്വന്തം സുരക്ഷയെക്കാൾ മറ്റുള്ളവരുടെ ജീവന് പ്രാധാന്യം നൽകിയ അദ്ദേഹത്തിന്റെ മാനവികതയും ആത്മത്യാഗവും എന്നും ആദരിക്കപ്പെടുകയും സ്മരിക്കപ്പെടുകയും ചെയ്യും.
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              എപ്പോഴും പുഞ്ചിരിയോടെ, എല്ലാവരോടും സ്നേഹത്തോടെയും കരുതലോടെയും പെരുമാറിയ അദ്ദേഹത്തിന്റെ വേർപാട് കുടുംബത്തിനും സുഹൃത്തുകൾക്കും സമൂഹത്തിനും തീരാനഷ്ടമാണ്.
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              മനുഷ്യസ്നേഹത്തിന്റെയും നിസ്വാർത്ഥ സേവനത്തിന്റെയും പ്രതീകമായ അദ്ദേഹത്തിന്റെ ജീവിതവും പ്രവർത്തനവും വരുംതലമുറകൾക്ക് എന്നും പ്രചോദനമായി നിലനിൽക്കും.
            </p>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              അദ്ദേഹത്തിന്റെ കുടുംബാംഗങ്ങളുടെയും പ്രിയപ്പെട്ടവരുടെയും ദുഃഖത്തിൽ ഞങ്ങളും പങ്കുചേരുന്നു. ഈ വേർപാടിന്റെ വേദന താങ്ങാനുള്ള ശക്തിയും ധൈര്യവും കുടുംബത്തിനും സുഹൃത്തുകൾക്കും ലഭിക്കട്ടെയെന്ന് ആത്മാർത്ഥമായി ആശംസിക്കുന്നു.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center mt-10 pt-8 border-t border-stone-200">
            <p className="text-lg sm:text-xl font-semibold text-stone-700">
              പ്രിയ സുഹൃത്ത് ഷിബിൽ റഹ്മാന് കണ്ണീരോടെ ആദരാഞ്ജലികൾ.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
