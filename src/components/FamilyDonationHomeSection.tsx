"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FamilyDonationHomeSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Users className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-600">
              കുടുംബ സംരക്ഷണ പദ്ധതി
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Sponsor a Family&apos;s Monthly Expenses
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Just <span className="font-bold text-red-600">₹750/month</span> can cover a family&apos;s basic needs — food, medicine, and essential supplies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 mb-8">
            {[
              { months: "1 Month", amount: "₹750" },
              { months: "2 Months", amount: "₹1,500" },
              { months: "3 Months", amount: "₹2,250" },
              { months: "6 Months", amount: "₹4,500" },
              { months: "1 Year", amount: "₹9,000" },
            ].map((opt) => (
              <div
                key={opt.months}
                className="bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 text-center min-w-[100px]"
              >
                <div className="text-xs text-gray-400">{opt.months}</div>
                <div className="font-bold text-gray-900">{opt.amount}</div>
              </div>
            ))}
          </div>

          <Link href="/family-donation">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-12 text-base gap-2 shadow-lg shadow-red-200 hover:shadow-xl transition-all">
              Sponsor Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Heart className="w-3.5 h-3.5 text-red-400" />
            100% reaches the families
          </div>
        </motion.div>
      </div>
    </section>
  );
}
