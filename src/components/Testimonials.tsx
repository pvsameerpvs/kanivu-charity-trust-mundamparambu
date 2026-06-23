"use client";

import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const testimonials = [
  {
    quote: "നമ്മുടെ നാട്ടിലെ ആവശ്യക്കാരുടെ കൂടെ നിൽക്കുന്ന വിശ്വാസമുള്ള കൂട്ടായ്മയാണ് കനിവ്.",
    author: "നാട്ടുകാരുടെ അഭിപ്രായം",
  },
  {
    quote: "ചെറിയ സഹായങ്ങൾ ഒന്നിച്ചാൽ വലിയ മാറ്റങ്ങൾ സൃഷ്ടിക്കാം എന്ന് കനിവ് തെളിയിക്കുന്നു.",
    author: "സമൂഹ പ്രവർത്തകർ",
  },
  {
    quote: "ചികിത്സ, വിദ്യാഭ്യാസം, ഭവന സഹായം — എല്ലായിടത്തും കനിവിന്റെ കൈത്താങ്ങ് കാണാം.",
    author: "സഹായം ലഭിച്ച കുടുംബം",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper className="py-20 md:py-28 bg-gradient-to-b from-[#F8FBFF] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
            <Heart className="w-4 h-4 text-[#EF1C25] fill-current" />
            <span className="text-sm font-medium text-[#1CA3D8]">
              സമൂഹത്തിന്റെ ശബ്ദം
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ജനങ്ങൾ പറയുന്നു
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-[#1CA3D8]/20 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1CA3D8]" />
                <span className="text-sm font-medium text-gray-500">
                  {item.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
