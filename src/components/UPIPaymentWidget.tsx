"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";
import {
  Check,
  Copy,
  ShieldCheck,
  Smartphone,
  Scan,
  Building2,
  Lock,
  CircleCheck,
} from "lucide-react";

const UPI_ID = "kanivu2214@fbl";
const PAYEE_NAME = "KANIVU CHARITY TRUST MUNDAMPARAMBU";
const ENCODED_NAME = encodeURIComponent(PAYEE_NAME);
const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&cu=INR`;

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
    <div className="w-full max-w-3xl mx-auto min-w-0">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
          <CircleCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          UPI Verified
        </div>
        <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
          <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          256-bit
        </div>
        <div className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
          <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Federal Bank
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start min-w-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex w-full min-w-0 flex-col items-center md:items-start"
        >
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/images/qr-code/paymentq-r.jpeg';
              link.download = 'kanivu-qr-code.jpeg';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              toast.success("QR code saved successfully");
            }}
            className="block relative w-44 sm:w-48 md:w-52 h-44 sm:h-48 md:h-52 rounded-2xl overflow-hidden bg-white p-3 shadow-lg ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer"
          >
            <Image
              src="/images/qr-code/paymentq-r.jpeg"
              alt="UPI Payment QR Code - Kanivu Charity Trust"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, 208px"
              priority
            />
          </button>
          <div className="flex items-center gap-1.5 mt-3 text-sm text-gray-500">
            <Scan className="w-4 h-4" />
            <span>Scan with any UPI app to pay</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex w-full min-w-0 flex-col gap-3"
        >
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 text-lg">Pay via UPI</h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mb-1 border border-gray-100 min-w-0 overflow-hidden">
            <div className="flex items-start gap-2 text-sm min-w-0">
              <div className="min-w-0 flex-1">
                <span className="font-medium text-gray-900">Recipient</span>
                <p className="text-gray-600 text-xs sm:text-sm break-words leading-snug mt-0.5">
                  {PAYEE_NAME}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center gap-2 mt-1 pt-3 border-t border-gray-100 min-w-0">
            <code className="flex-1 text-xs sm:text-sm bg-gray-100 px-3 py-1.5 rounded-lg text-gray-700 font-mono select-all truncate min-w-0">
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

      <div className="mt-6 md:mt-8 bg-blue-50 border border-blue-100 rounded-xl p-3 sm:p-4 text-left">
        <p className="text-[11px] sm:text-xs font-semibold text-blue-800 mb-2">
          ✓ UPI Payment Details
        </p>
        <div className="space-y-1 text-[11px] sm:text-xs text-blue-700 leading-relaxed break-words">
          <p><span className="font-medium">Recipient:</span> {PAYEE_NAME}</p>
          <p><span className="font-medium">UPI ID:</span> {UPI_ID}</p>
          <p><span className="font-medium">Bank:</span> Federal Bank <span className="text-blue-500">(@fbl)</span></p>
          <p><span className="font-medium">Currency:</span> INR</p>
        </div>
        <p className="text-[10px] sm:text-[11px] text-amber-700 bg-amber-50 rounded-lg p-2 mt-2 leading-tight border border-amber-200">
          ⚠ This is not an account number. It is a UPI ID linked through Federal Bank. Before paying, scan with any UPI app and confirm the recipient name shows <span className="font-semibold">{PAYEE_NAME}</span>
        </p>
      </div>

      <div className="mt-6 md:mt-8 bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4 text-left">
        <p className="text-[11px] sm:text-xs font-semibold text-amber-800 mb-2">
          ✓ Bank Transfer Details
        </p>
        <div className="space-y-1 text-[11px] sm:text-xs text-amber-700 leading-relaxed break-words">
          <p><span className="font-medium">Account Name:</span> {PAYEE_NAME}</p>
          <p><span className="font-medium">Account No:</span> <span className="font-mono font-bold text-amber-900 select-all">25150200002214</span></p>
          <p><span className="font-medium">Bank:</span> Federal Bank</p>
          <p><span className="font-medium">Branch:</span> Kizhisseri</p>
          <p><span className="font-medium">IFSC:</span> <span className="font-mono font-bold text-amber-900 select-all">FDRL0002515</span></p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-1 text-sm text-gray-500 mt-6 md:mt-8 pt-4 md:pt-5 border-t border-gray-100"
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
