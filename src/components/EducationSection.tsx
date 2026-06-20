"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Gift,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";

const educationCards = [
  {
    icon: BookOpen,
    title: "പഠനോപകരണ സഹായം",
    text: "വിദ്യാർത്ഥികൾക്ക് പുസ്തകങ്ങളും പഠനോപകരണങ്ങളും നൽകുന്നു",
    color: "text-[#1CA3D8]",
    bg: "bg-[#EAF7FD]",
  },
  {
    icon: GraduationCap,
    title: "വിദ്യാർത്ഥി പ്രോത്സാഹനം",
    text: "മികവ് പുലർത്തുന്ന വിദ്യാർത്ഥികൾക്ക് പ്രോത്സാഹന സമ്മാനങ്ങൾ നൽകുന്നു",
    color: "text-[#EF1C25]",
    bg: "bg-red-50",
  },
  {
    icon: Gift,
    title: "സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന കുട്ടികൾക്ക് കൈത്താങ്ങ്",
    text: "സാമ്പത്തിക ബുദ്ധിമുട്ടുകൾ കാരണം പഠനം തടസ്സപ്പെടാതിരിക്കാനായി ഫീസ് സഹായം നൽകുന്നു",
    color: "text-[#F7941D]",
    bg: "bg-[#FFF4E6]",
  },
];

export default function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      className="py-20 md:py-28 bg-gradient-to-b from-[#F8FBFF] to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/kaniv/kaniv-education-support.svg"
                  alt="കനിവ് വിദ്യാഭ്യാസ സഹായ പ്രവർത്തനം"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1CA3D8]/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EF1C25]/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
              <GraduationCap className="w-4 h-4 text-[#1CA3D8]" />
              <span className="text-sm font-medium text-[#1CA3D8]">
                വിദ്യാഭ്യാസ സഹായം
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              വിദ്യാഭ്യാസം ജീവിതം മാറ്റും
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              നമ്മുടെ നാട്ടിലെ കുട്ടികൾക്ക് നല്ല വിദ്യാഭ്യാസം ലഭിക്കണം എന്ന
              ലക്ഷ്യത്തോടെ കനിവ് പഠനസഹായ പ്രവർത്തനങ്ങൾ നടത്തുന്നു. സാമ്പത്തിക
              ബുദ്ധിമുട്ടുകൾ കാരണം പഠനം തടസ്സപ്പെടാതിരിക്കാനായി
              പഠനോപകരണങ്ങൾ, ഫീസ് സഹായം, പ്രോത്സാഹന സമ്മാനങ്ങൾ എന്നിവ
              നൽകുന്നു.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {educationCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <Card className="h-full border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
