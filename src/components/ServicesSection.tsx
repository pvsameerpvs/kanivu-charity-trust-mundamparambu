"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Home,
  GraduationCap,
  UtensilsCrossed,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    icon: HeartPulse,
    title: "ചികിത്സാ സഹായം",
    text: "സാമ്പത്തിക ബുദ്ധിമുട്ടുകൾ കാരണം ചികിത്സയ്ക്ക് ബുദ്ധിമുട്ടുന്ന രോഗികൾക്കും കുടുംബങ്ങൾക്കും സഹായം എത്തിക്കുന്നു.",
    color: "text-[#EF1C25]",
    bg: "bg-red-50",
  },
  {
    icon: Home,
    title: "ഭവന സഹായം",
    text: "വീടില്ലാത്തവർക്കും സുരക്ഷിതമായ താമസസൗകര്യം ആവശ്യമുള്ള കുടുംബങ്ങൾക്കും ഭവന സഹായ പദ്ധതികളിലൂടെ കൈത്താങ്ങ് നൽകുന്നു.",
    color: "text-[#F7941D]",
    bg: "bg-[#FFF4E6]",
  },
  {
    icon: GraduationCap,
    title: "വിദ്യാഭ്യാസ സഹായം",
    text: "പഠനോപകരണങ്ങൾ, ഫീസ് സഹായം, വിദ്യാർത്ഥികൾക്ക് പ്രോത്സാഹനം തുടങ്ങിയ വിദ്യാഭ്യാസ പിന്തുണകൾ നൽകുന്നു.",
    color: "text-[#1CA3D8]",
    bg: "bg-[#EAF7FD]",
  },
  {
    icon: UtensilsCrossed,
    title: "ഭക്ഷണവും അത്യാവശ്യ സഹായങ്ങളും",
    text: "അത്യാവശ്യ സാഹചര്യങ്ങളിൽ ഭക്ഷണം, വസ്ത്രം, മറ്റു അടിസ്ഥാന ആവശ്യങ്ങൾ എന്നിവ നൽകുന്നു.",
    color: "text-[#EF1C25]",
    bg: "bg-red-50",
  },
  {
    icon: Users,
    title: "സാമൂഹിക പ്രവർത്തനങ്ങൾ",
    text: "നാട്ടിലെ ജനജീവിതത്തെ ശക്തിപ്പെടുത്തുന്ന വിവിധ സാമൂഹിക ഇടപെടലുകളും ബോധവത്കരണ പരിപാടികളും നടത്തുന്നു.",
    color: "text-[#1CA3D8]",
    bg: "bg-[#EAF7FD]",
  },
  {
    icon: Trophy,
    title: "കായിക പ്രോത്സാഹനം",
    text: "യുവജനങ്ങളുടെ കായിക കഴിവുകളെ പ്രോത്സാഹിപ്പിക്കുന്നതിനായി ഫുട്ബോൾ ടൂർണമെന്റുകളും കൂട്ടായ്മകളും സംഘടിപ്പിക്കുന്നു.",
    color: "text-[#F7941D]",
    bg: "bg-[#FFF4E6]",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8FBFF]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
            <HeartPulse className="w-4 h-4 text-[#1CA3D8]" />
            <span className="text-sm font-medium text-[#1CA3D8]">
              ഞങ്ങളുടെ സേവനങ്ങൾ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ഞങ്ങൾ ചെയ്യുന്ന പ്രവർത്തനങ്ങൾ
          </h2>
          <p className="text-gray-600 leading-relaxed">
            സമൂഹത്തിന്റെ വിവിധ മേഖലകളിൽ കനിവിന്റെ സഹായഹസ്തം എത്തിക്കുന്നു
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group bg-white rounded-2xl overflow-hidden">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${service.color}`}
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {service.text}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
