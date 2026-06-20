"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Heart,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF7FD] rounded-full px-4 py-1.5 mb-4">
            <Phone className="w-4 h-4 text-[#1CA3D8]" />
            <span className="text-sm font-medium text-[#1CA3D8]">
              ബന്ധപ്പെടുക
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ഞങ്ങളുമായി ബന്ധപ്പെടാം
          </h2>
          <p className="text-gray-600 leading-relaxed">
            കനിവ് ചാരിറ്റി ട്രസ്റ്റിന്റെ പ്രവർത്തനങ്ങളെ കുറിച്ച് അറിയാനും
            സഹായിക്കാനും വോളണ്ടിയറായി ചേരാനും ഞങ്ങളുമായി ബന്ധപ്പെടാം.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
          >
            <Card className="h-full border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EAF7FD] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-[#1CA3D8]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">വിലാസം</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  മുണ്ടംപറമ്പ്
                  <br />
                  പള്ളിപ്പടി, മലപ്പുറം
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="h-full border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm font-semibold">
                  +91 9567178007
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="h-full border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-[#EF1C25]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  സംഭാവന / സഹായം
                </h3>
                <p className="text-gray-600 text-sm">
                  സഹായങ്ങൾക്കായി WhatsApp വഴി ബന്ധപ്പെടുക
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919567178007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-7 h-11 gap-2 shadow-lg shadow-green-200">
              <MessageCircle className="w-4 h-4" />
              WhatsApp ചെയ്യുക
            </Button>
          </a>
          <a
            href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#EF1C25] hover:bg-[#d91920] text-white rounded-full px-7 h-11 gap-2 shadow-lg shadow-red-200">
              <Heart className="w-4 h-4 fill-current" />
              സംഭാവന ചെയ്യുക
            </Button>
          </a>
          <a
            href="https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%B8%E0%B5%87%E0%B4%B5%E0%B4%A8%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B3%E0%B4%BF%E0%B5%BD%20%E0%B4%B5%E0%B5%8B%E0%B4%B3%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%AF%E0%B4%B0%E0%B4%BE%E0%B4%AF%E0%B4%BF%20%E0%B4%9A%E0%B5%87%E0%B4%B0%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#1CA3D8] hover:bg-[#1890c0] text-white rounded-full px-7 h-11 gap-2 shadow-lg shadow-blue-200">
              <HandHeart className="w-4 h-4" />
              വോളണ്ടിയറായി ചേരുക
            </Button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
