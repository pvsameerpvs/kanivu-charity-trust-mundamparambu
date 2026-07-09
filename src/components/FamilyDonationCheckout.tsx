"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  IndianRupee,
  Check,
  Copy,
  Scan,
  Heart,
} from "lucide-react";

const MONTHLY_EXPENSE = 750;
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
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedAmount = selectedMonths ? selectedMonths * MONTHLY_EXPENSE * 100 : null;
  const hasValidAmount = selectedMonths !== null || customAmount.trim() !== "";

  const getDisplayAmount = () => {
    if (selectedMonths) return selectedMonths * MONTHLY_EXPENSE;
    if (customAmount) return Math.round(parseFloat(customAmount));
    return 0;
  };

  const displayAmount = getDisplayAmount();

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
      <div className="text-center mb-6">
        <h3 className="font-bold text-gray-900 text-xl">
          ഒരു കുടുംബത്തിന്റെ മാസച്ചെലവ് സ്പോൺസർ ചെയ്യുക
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          ഓരോ കുടുംബത്തിനും മാസ ചെലവ്: <span className="font-semibold text-gray-700">₹{MONTHLY_EXPENSE}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {DURATIONS.map((d) => {
          const amount = d.months * MONTHLY_EXPENSE;
          return (
            <button
              key={d.months}
              onClick={() => {
                setSelectedMonths(d.months);
                setCustomAmount("");
              }}
              className={`py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                selectedMonths === d.months
                  ? "border-[#EF1C25] bg-[#EF1C25]/10 text-[#EF1C25]"
                  : "border-gray-200 bg-white text-gray-700 hover:border-[#EF1C25]/40 hover:text-[#EF1C25]"
              }`}
            >
              <div className="text-xs text-gray-400 mb-0.5">{d.label}</div>
              <div>₹{amount}</div>
            </button>
          );
        })}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          നിശ്ചിത തുക (₹)
        </label>
        <div className="relative">
          <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="number"
            min="1"
            step="1"
            placeholder="തുക നൽകുക"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedMonths(null);
            }}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#EF1C25] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4 mb-4">
        <div className="flex items-start gap-2">
          <Heart className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs sm:text-sm font-medium text-red-800">
              നിങ്ങളുടെ ₹{MONTHLY_EXPENSE}/മാസം ഒരു കുടുംബത്തിന്റെ അവശ്യ ആവശ്യങ്ങളായ ഭക്ഷണം, മരുന്ന്, അടിസ്ഥാന സാധനങ്ങൾ എന്നിവ നിറവേറ്റും.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white p-3 shadow-lg ring-1 ring-gray-100">
              <Image
                src="/images/qr-code/paymentq-r.jpeg"
                alt="UPI Payment QR Code"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 144px, 160px"
              />
            </div>
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
                {hasValidAmount && displayAmount > 0 && (
                  <p><span className="font-medium">Amount:</span> ₹{displayAmount}</p>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Scan the QR code with any UPI app to make your contribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
