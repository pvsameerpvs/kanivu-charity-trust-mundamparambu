"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Copy,
  ShieldCheck,
  Smartphone,
  Scan,
  Building2,
  Banknote,
  Lock,
  CircleCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const UPI_ID = "kanivu2214@fbl";
const PAYEE_NAME = "KANIVU CHARITY TRUST MUNDAMPARAMBU";
const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&cu=INR`;

function GooglePayIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
      <rect width="40" height="40" rx="8" fill="white" />
      <path d="M29.4 20.1c0-1.1-.1-2.1-.3-3H20v5.7h5.3c-.2 1.1-.8 2.1-1.8 2.8v2.3h2.9c1.7-1.5 2.7-3.8 2.7-6.5z" fill="#4285F4" />
      <path d="M20 30c2.4 0 4.4-.8 5.9-2.1l-2.9-2.3c-.8.5-1.8.8-3 .8-2.3 0-4.3-1.6-5-3.7H9v2.4C10.5 27.9 14.9 30 20 30z" fill="#34A853" />
      <path d="M15 22.7c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9v-2.4H9c-.6 1.2-1 2.6-1 4.1s.4 2.9 1 4.1l3-2.3 2.7-1.7z" fill="#FBBC05" />
      <path d="M20 11.8c1.3 0 2.5.5 3.4 1.3l2.5-2.5C24.1 9.2 22.2 8.5 20 8.5c-5.1 0-9.5 2.1-11 5.1l3.6 2.8c.7-2.2 2.7-3.8 5-3.8z" fill="#EA4335" />
    </svg>
  );
}

function PhonePeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
      <rect width="40" height="40" rx="9" fill="#5F259F" />
      <text x="13" y="24" fontSize="17" fontWeight="900" fill="white" fontFamily="Arial, sans-serif">P</text>
      <text x="21" y="21" fontSize="6.5" fontWeight="700" fill="white" fontFamily="Arial, sans-serif" letterSpacing="0.3">hone</text>
      <text x="21" y="28" fontSize="6.5" fontWeight="700" fill="white" fontFamily="Arial, sans-serif" letterSpacing="0.3">Pe</text>
    </svg>
  );
}

function PaytmIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
      <rect width="40" height="40" rx="8" fill="#00BAF2" />
      <text x="10" y="26" fontSize="13" fontWeight="800" fill="white" fontFamily="Arial, sans-serif">P</text>
      <text x="18" y="26" fontSize="11" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">aytm</text>
    </svg>
  );
}

function BHIMIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
      <rect width="40" height="40" rx="8" fill="#003366" />
      <text x="20" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="Arial">BHIM</text>
    </svg>
  );
}

export default function UPIPaymentWidget() {
  const [copied, setCopied] = useState(false);

  const copyUPIId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = UPI_ID;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
          <CircleCheck className="w-3.5 h-3.5" />
          UPI Verified
        </div>
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
          <Lock className="w-3.5 h-3.5" />
          256-bit Secure
        </div>
        <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full">
          <Building2 className="w-3.5 h-3.5" />
          Federal Bank
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="relative w-52 h-52 rounded-2xl overflow-hidden bg-white p-3 shadow-lg ring-1 ring-gray-100">
            <Image
              src="/images/qr-code/paymentq-r.jpeg"
              alt="UPI Payment QR Code - Kanivu Charity Trust"
              fill
              className="object-contain"
              sizes="208px"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-sm text-gray-500">
            <Scan className="w-4 h-4" />
            <span>Scan with any UPI app to pay</span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <BHIMIcon />
            <span className="text-xs text-gray-400">Works with all UPI apps</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col gap-3"
        >
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 text-lg">Pay via UPI</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Choose your preferred payment app
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mb-1 border border-gray-100">
            <div className="flex items-center gap-2 text-sm">
              <Banknote className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-medium text-gray-900">Recipient:</span>
              <span className="text-gray-600 text-xs sm:text-sm truncate">
                {PAYEE_NAME}
              </span>
            </div>
          </div>

          <a
            href={UPI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full h-12 bg-white border-2 border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white text-base gap-3 rounded-xl shadow-sm transition-all duration-200">
              <GooglePayIcon />
              Google Pay
            </Button>
          </a>

          <a
            href={UPI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full h-12 bg-white border-2 border-[#5F259F] text-[#5F259F] hover:bg-[#5F259F] hover:text-white text-base gap-3 rounded-xl shadow-sm transition-all duration-200">
              <PhonePeIcon />
              PhonePe
            </Button>
          </a>

          <a
            href={UPI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full h-12 bg-white border-2 border-[#00BAF2] text-[#00BAF2] hover:bg-[#00BAF2] hover:text-white text-base gap-3 rounded-xl shadow-sm transition-all duration-200">
              <PaytmIcon />
              Paytm
            </Button>
          </a>

          <div className="flex items-center gap-2 mt-1 pt-3 border-t border-gray-100">
            <code className="text-xs sm:text-sm bg-gray-100 px-3 py-1.5 rounded-lg text-gray-700 font-mono select-all">
              {UPI_ID}
            </code>
            <button
              onClick={copyUPIId}
              className="shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Copy UPI ID"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-500" />
              )}
            </button>
          </div>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-green-600 font-medium"
            >
              UPI ID copied!
            </motion.p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-gray-500 mt-8 pt-5 border-t border-gray-100"
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
          <span>100% Secure UPI Payment</span>
        </div>
        <span className="hidden sm:inline text-gray-300">•</span>
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-4 h-4 text-blue-500 shrink-0" />
          <span>Works on all UPI apps</span>
        </div>
        <span className="hidden sm:inline text-gray-300">•</span>
        <span className="text-gray-400">No hidden charges</span>
      </motion.div>
    </div>
  );
}
