"use client";

import { motion } from "framer-motion";
import {
  Users,
  HandHeart,
  Heart,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";

const reasons = [
  {
    icon: HandHeart,
    title: "സാമ്പത്തിക സഹായം മാത്രമല്ല",
    text: "നിങ്ങളുടെ സമയം, കഴിവ്, സേവന മനോഭാവം എന്നിവയും കനിവിന് വിലപ്പെട്ടതാണ്.",
    color: "text-[#1CA3D8]",
    bg: "bg-[#EAF7FD]",
  },
  {
    icon: Users,
    title: "സമൂഹത്തിന് വേണ്ടി ഒന്നിക്കുക",
    text: "സമൂഹത്തിന് വേണ്ടി പ്രവർത്തിക്കാൻ താൽപര്യമുള്ളവർക്ക് കനിവിനൊപ്പം ചേരാം.",
    color: "text-[#EF1C25]",
    bg: "bg-red-50",
  },
  {
    icon: Heart,
    title: "മാറ്റത്തിന്റെ ഭാഗമാകുക",
    text: "ഒരു വ്യക്തിയുടെ ജീവിതത്തിൽ പോലും മാറ്റം വരുത്തുന്നത് വലിയ കാര്യമാണ്.",
    color: "text-[#F7941D]",
    bg: "bg-[#FFF4E6]",
  },
];

export default function VolunteerSection() {
  return (
    <SectionWrapper id="volunteer" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
              <HandHeart className="w-4 h-4 text-[#1CA3D8]" />
              <span className="text-sm font-medium text-[#1CA3D8]">
                വോളണ്ടിയർ
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              സേവനത്തിനായി കൈകോർക്കാം
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              സാമ്പത്തിക സഹായം മാത്രമല്ല, നിങ്ങളുടെ സമയം, കഴിവ്, സേവന
              മനോഭാവം എന്നിവയും കനിവിന് വിലപ്പെട്ടതാണ്. സമൂഹത്തിന് വേണ്ടി
              പ്രവർത്തിക്കാൻ താൽപര്യമുള്ളവർക്ക് കനിവിനൊപ്പം ചേരാം.
            </p>

            <div className="space-y-4 mb-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${reason.bg} flex items-center justify-center shrink-0`}
                  >
                    <reason.icon className={`w-5 h-5 ${reason.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%B8%E0%B5%87%E0%B4%B5%E0%B4%A8%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B3%E0%B4%BF%E0%B5%BD%20%E0%B4%B5%E0%B5%8B%E0%B4%B3%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%AF%E0%B4%B0%E0%B4%BE%E0%B4%AF%E0%B4%BF%20%E0%B4%9A%E0%B5%87%E0%B4%B0%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#1CA3D8] hover:bg-[#1890c0] text-white rounded-full px-8 h-12 gap-2 shadow-lg shadow-blue-200">
                <WhatsAppIcon className="size-5" />
                വോളണ്ടിയറായി ചേരാം
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  stat: "50+",
                  label: "സഹായ പ്രവർത്തനങ്ങൾ",
                  color: "from-[#1CA3D8] to-[#1890c0]",
                },
                {
                  stat: "100+",
                  label: "കുടുംബങ്ങൾക്ക് കൈത്താങ്ങ്",
                  color: "from-[#EF1C25] to-[#d91920]",
                },
                {
                  stat: "25+",
                  label: "വോളണ്ടിയർമാർ",
                  color: "from-[#F7941D] to-[#e0851a]",
                },
                {
                  stat: "5+",
                  label: "വർഷങ്ങളുടെ സേവനം",
                  color: "from-[#1CA3D8] to-[#1890c0]",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center"
                >
                  <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-1`}
                  >
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
