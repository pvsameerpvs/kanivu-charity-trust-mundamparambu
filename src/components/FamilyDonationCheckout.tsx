"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";
import {
  Check,
  Copy,
  Scan,
  Heart,
  ShieldCheck,
  Banknote,
} from "lucide-react";

const MONTHLY_EXPENSE = 1000;
const UPI_ID = "kanivu2214@fbl";
const PAYEE_NAME = "KANIVU CHARITY TRUST MUNDAMPARAMBU";

const DURATIONS = [
  { months: 1, label: "1 മാസം" },
  { months: 2, label: "2 മാസം" },
  { months: 3, label: "3 മാസം" },
  { months: 6, label: "6 മാസം" },
  { months: 12, label: "1 വർഷം" },
];

export default function FamilyDonationCheckout() {
  const [selectedMonths, setSelectedMonths] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"upi" | "bank">("upi");

  const displayAmount = selectedMonths ? selectedMonths * MONTHLY_EXPENSE : 0;

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
    <div className="w-full max-w-3xl mx-auto min-w-0 space-y-6">
      {/* Amount Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100"
      >
        <h3 className="font-bold text-gray-900 text-lg mb-1 text-center">
          ഒരു കുടുംബത്തിന്റെ മാസ ചിലവ് സ്പോൺസർ ചെയ്യുക
        </h3>
        <p className="text-sm text-gray-500 text-center mb-5">
          ഓരോ കുടുംബത്തിനും മാസ ചെലവ്: <span className="font-semibold text-gray-700">₹{MONTHLY_EXPENSE}</span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
          {DURATIONS.map((d) => {
            const amount = d.months * MONTHLY_EXPENSE;
            return (
              <button
                key={d.months}
                onClick={() => {
                  setSelectedMonths(d.months);
                }}
                className={`py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                  selectedMonths === d.months
                    ? "border-[#EF1C25] bg-[#EF1C25]/10 text-[#EF1C25] shadow-sm"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#EF1C25]/40 hover:text-[#EF1C25]"
                }`}
              >
                <div className="text-xs text-gray-400 mb-0.5">{d.label}</div>
                <div>₹{amount}</div>
              </button>
            );
          })}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4 mt-4">
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-red-800">
                നിങ്ങളുടെ ₹{MONTHLY_EXPENSE}/മാസം ഒരു കുടുംബത്തിന്റെ അവശ്യ ആവശ്യങ്ങളായ ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന സാധനങ്ങൾ എന്നിവ നിറവേറ്റും.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Method Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 mb-5">
          <button
            onClick={() => setActiveTab("upi")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "upi"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Scan className="w-4 h-4" />
            UPI
          </button>
          <button
            onClick={() => setActiveTab("bank")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "bank"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Banknote className="w-4 h-4" />
            Bank Transfer
          </button>
        </div>

        {activeTab === "upi" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col items-center">
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
                className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white p-3 shadow-lg ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer"
              >
                <Image
                  src="/images/qr-code/paymentq-r.jpeg"
                  alt="UPI Payment QR Code"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 144px, 160px"
                />
              </button>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                <Scan className="w-4 h-4" />
                <span>Scan to pay via UPI</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-left">
                <p className="text-xs font-semibold text-blue-800 mb-1">✓ UPI Payment Details</p>
                <div className="space-y-0.5 text-xs text-blue-700">
                  <p><span className="font-medium">Recipient:</span> {PAYEE_NAME}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">UPI ID:</span>
                    <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-800 font-mono select-all">{UPI_ID}</code>
                    <button
                      onClick={copyUPIId}
                      className="shrink-0 p-1 rounded hover:bg-blue-200 transition-colors"
                      title="Copy UPI ID"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-blue-600" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-[10px] text-green-600 font-medium">UPI ID copied!</p>
                  )}
                  <p><span className="font-medium">Bank:</span> Federal Bank (@fbl)</p>
                  {selectedMonths && displayAmount > 0 && (
                    <p><span className="font-medium">Amount:</span> ₹{displayAmount}</p>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                Scan the QR code with any UPI app to make your contribution.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-sm mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <p className="text-sm font-semibold text-amber-800">Bank Transfer Details</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-amber-100/60">
                  <span className="text-amber-700">Account Name</span>
                  <span className="font-medium text-amber-900 text-right">{PAYEE_NAME}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-amber-100/60">
                  <span className="text-amber-700">Account No</span>
                  <span className="font-mono font-bold text-amber-900 select-all">25150200002214</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-amber-100/60">
                  <span className="text-amber-700">Bank</span>
                  <span className="text-amber-900">Federal Bank</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-amber-100/60">
                  <span className="text-amber-700">Branch</span>
                  <span className="text-amber-900">Kizhisseri</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-amber-700">IFSC</span>
                  <span className="font-mono font-bold text-amber-900 select-all">FDRL0002515</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Use any banking app or internet banking to transfer.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
