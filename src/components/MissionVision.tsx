"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const cards = [
  {
    icon: Target,
    title: "ഞങ്ങളുടെ ദൗത്യം",
    text: "ആവശ്യക്കാരുടെ അടുത്തെത്തി, സമയബന്ധിതമായ സഹായവും പിന്തുണയും നൽകുക.",
    color: "from-[#1CA3D8] to-[#1890c0]",
    bgLight: "bg-[#EAF7FD]",
  },
  {
    icon: Eye,
    title: "ഞങ്ങളുടെ കാഴ്ചപ്പാട്",
    text: "കരുണയും ഉത്തരവാദിത്തവും സഹകരണവും നിറഞ്ഞ ഒരു നല്ല സമൂഹം രൂപപ്പെടുത്തുക.",
    color: "from-[#EF1C25] to-[#d91920]",
    bgLight: "bg-red-50",
  },
  {
    icon: Sparkles,
    title: "ഞങ്ങളുടെ മൂല്യങ്ങൾ",
    text: "സുതാര്യത, കൂട്ടായ്മ, വിശ്വാസം, മാനവികത, സേവന മനോഭാവം.",
    color: "from-[#F7941D] to-[#e0851a]",
    bgLight: "bg-[#FFF4E6]",
  },
];

export default function MissionVision() {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-[#F8FBFF]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`${card.bgLight} rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
