"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Trophy,
  Award,
  Home,
  GraduationCap,
  Heart,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const activities = [
  {
    icon: Building2,
    title: "ഓഫീസ് ഉദ്ഘാടനം",
    text: "മുണ്ടംപറമ്പ് കനിവ് ചാരിറ്റി ട്രസ്റ്റിന്റെ പ്രവർത്തനങ്ങൾ കൂടുതൽ ഏകോപിപ്പിക്കുന്നതിനായി ഓഫീസ് ഉദ്ഘാടനം നടത്തി. നാട്ടുകാരുടെയും സാമൂഹിക പ്രവർത്തകരുടെയും സാന്നിധ്യത്തിൽ പരിപാടി സംഘടിപ്പിച്ചു.",
    color: "bg-[#1CA3D8]",
    lightBg: "bg-[#EAF7FD]",
    iconColor: "text-[#1CA3D8]",
  },
  {
    icon: Trophy,
    title: "ഫുട്ബോൾ ടൂർണമെന്റ്",
    text: "യുവജനങ്ങളുടെ കായിക ശേഷിയും കൂട്ടായ്മയും വളർത്തുന്നതിനായി കനിവിന്റെ നേതൃത്വത്തിൽ ഫുട്ബോൾ ടൂർണമെന്റുകൾ സംഘടിപ്പിച്ചു.",
    color: "bg-[#F7941D]",
    lightBg: "bg-[#FFF4E6]",
    iconColor: "text-[#F7941D]",
  },
  {
    icon: Award,
    title: "ആദരവും സഹായ വിതരണവും",
    text: "സമൂഹത്തിൽ മികച്ച സംഭാവനകൾ നൽകിയവരെ ആദരിക്കുകയും ആവശ്യക്കാർക്ക് സഹായങ്ങൾ കൈമാറുകയും ചെയ്തു.",
    color: "bg-[#EF1C25]",
    lightBg: "bg-red-50",
    iconColor: "text-[#EF1C25]",
  },
  {
    icon: Home,
    title: "ഭവന സഹായ പദ്ധതി",
    text: "വീടില്ലാത്ത കുടുംബങ്ങൾക്ക് സുരക്ഷിതമായ ഭവനം ഒരുക്കുന്നതിനുള്ള പ്രവർത്തനങ്ങൾക്ക് കനിവ് നേതൃത്വം നൽകുന്നു.",
    color: "bg-[#1CA3D8]",
    lightBg: "bg-[#EAF7FD]",
    iconColor: "text-[#1CA3D8]",
  },
  {
    icon: GraduationCap,
    title: "വിദ്യാർത്ഥി സഹായം",
    text: "കുട്ടികൾക്ക് പഠനോപകരണങ്ങളും പ്രോത്സാഹനങ്ങളും നൽകി വിദ്യാഭ്യാസ മുന്നേറ്റത്തിന് പിന്തുണ നൽകുന്നു.",
    color: "bg-[#F7941D]",
    lightBg: "bg-[#FFF4E6]",
    iconColor: "text-[#F7941D]",
  },
];

export default function ActivitiesTimeline() {
  return (
    <SectionWrapper id="activities" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
            <Heart className="w-4 h-4 text-[#1CA3D8]" />
            <span className="text-sm font-medium text-[#1CA3D8]">
              പ്രവർത്തനങ്ങൾ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ
          </h2>
          <p className="text-gray-600">
            കനിവ് ചാരിറ്റി ട്രസ്റ്റ് ഇതുവരെ നടത്തിയ പ്രധാന പ്രവർത്തനങ്ങൾ
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1CA3D8] via-[#EF1C25] to-[#F7941D] md:-translate-x-px" />

          {activities.map((activity, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 md:mb-14 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden md:flex w-1/2 ${
                    isLeft ? "justify-end pr-12" : "justify-start pl-12"
                  }`}
                >
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {activity.text}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute left-6 md:left-1/2 w-12 h-12 rounded-full ${activity.color} flex items-center justify-center shadow-lg md:-translate-x-6 z-10`}
                >
                  <activity.icon className="w-5 h-5 text-white" />
                </div>

                <div className="ml-16 md:hidden">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.text}
                  </p>
                </div>

                <div className={`hidden md:flex w-1/2 ${isLeft ? "pl-12" : "pr-12"}`}>
                  {isLeft ? null : (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {activity.text}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
