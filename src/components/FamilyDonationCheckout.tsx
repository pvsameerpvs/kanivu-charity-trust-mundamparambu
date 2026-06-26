"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  IndianRupee,
  Loader2,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ExternalLink,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  handler: (response: RazorpayPaymentResponse) => void;
  prefill?: { name?: string; email?: string; contact?: string };
  notes?: Record<string, string>;
  theme?: { color?: string };
  modal?: { ondismiss?: () => void };
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (response: unknown) => void) => void;
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const MONTHLY_EXPENSE = 750;
const UPI_ID = "kanivu2214@fbl";
const PAYEE_NAME = "KANIVU CHARITY TRUST MUNDAMPARAMBU";
const ENCODED_NAME = encodeURIComponent(PAYEE_NAME);
const GPAY_ANDROID = (am: number) =>
  `intent://pay#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;S.pa=${UPI_ID};S.pn=${ENCODED_NAME};S.am=${am};S.cu=INR;end`;
const GPAY_IOS = (am: number) =>
  `upi://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&am=${am}&cu=INR`;
const PHONEPE_LINK = (am: number) =>
  `phonepe://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&am=${am}&cu=INR`;
const PAYTM_LINK = (am: number) =>
  `paytmmp://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&am=${am}&cu=INR`;

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
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const selectedAmount = selectedMonths ? selectedMonths * MONTHLY_EXPENSE * 100 : null;
  const hasValidAmount = selectedMonths !== null || customAmount.trim() !== "";

  const getAmountInPaise = () => {
    if (selectedMonths) return selectedMonths * MONTHLY_EXPENSE * 100;
    if (customAmount) return Math.round(parseFloat(customAmount) * 100);
    return 750 * 100;
  };

  const createOrderAndOpenApp = async (deepLinkFn: (am: number) => string) => {
    const amountPaise = getAmountInPaise();
    if (amountPaise < 100) {
      setStatus({ type: "error", message: "കുറഞ്ഞത് ₹10 സംഭാവന നൽകണം" });
      return;
    }
    setLoading(true);
    setStatus({ type: null, message: "" });
    setCurrentOrderId(null);
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountPaise,
          currency: "INR",
          receipt: `family_${Date.now()}`,
        }),
      });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "പരാജയപ്പെട്ടു"); }
      const order = await res.json();
      setCurrentOrderId(order.order_id);
      window.open(deepLinkFn(amountPaise / 100), "_blank");
      setStatus({ type: "info", message: `ആപ്പ് തുറന്നു. പേയ്മെന്റ് കഴിഞ്ഞ് താഴെയുള്ള "പേയ്മെന്റ് സ്റ്റാറ്റസ് പരിശോധിക്കുക" ബട്ടൺ അമർത്തുക.` });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "എന്തോ പിഴവ് സംഭവിച്ചു" });
    }
    setLoading(false);
  };

  const checkPaymentStatus = async () => {
    if (!currentOrderId) return;
    setCheckingStatus(true);
    setStatus({ type: null, message: "" });
    try {
      const res = await fetch(`/api/check-payment-status?order_id=${currentOrderId}`);
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "പരിശോധന പരാജയപ്പെട്ടു"); }
      const data = await res.json();
      if (data.paid) {
        setStatus({ type: "success", message: `പേയ്മെന്റ് വിജയിച്ചു! ₹${data.amount / 100}` });
        setCurrentOrderId(null);
        setSelectedMonths(null);
        setCustomAmount("");
      } else {
        setStatus({ type: "error", message: "പേയ്മെന്റ് ഇതുവരെ ലഭിച്ചിട്ടില്ല. പേയ്മെന്റ് കഴിഞ്ഞ ശേഷം വീണ്ടും പരിശോധിക്കുക." });
      }
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "പരിശോധന പരാജയപ്പെട്ടു" });
    }
    setCheckingStatus(false);
  };

  const loadRazorpayScript = () =>
    new Promise<void>((resolve) => {
      if (window.Razorpay) { resolve(); return; }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
      scriptRef.current = script;
    });

  const openCardPaymentModal = async () => {
    const amountPaise = getAmountInPaise();
    if (amountPaise < 100) {
      setStatus({ type: "error", message: "കുറഞ്ഞത് ₹10 സംഭാവന നൽകണം" });
      return;
    }
    setModalLoading(true);
    setStatus({ type: null, message: "" });
    try {
      await loadRazorpayScript();
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountPaise,
          currency: "INR",
          receipt: `family_card_${Date.now()}`,
        }),
      });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "പരാജയപ്പെട്ടു"); }
      const order = await res.json();
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: "KANIVU CHARITY TRUST",
        description: "കുടുംബ സംരക്ഷണ പദ്ധതി",
        image: "/images/kaniv/kaniv-logo.png",
        order_id: order.order_id,
        handler: async function (response: RazorpayPaymentResponse) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            if (!verifyRes.ok) { const err = await verifyRes.json(); throw new Error(err.error || "വെരിഫിക്കേഷൻ പരാജയപ്പെട്ടു"); }
            setStatus({ type: "success", message: `പേയ്മെന്റ് വിജയിച്ചു! സ്പോൺസർ ചെയ്തതിന് നന്ദി.` });
            setSelectedMonths(null);
            setCustomAmount("");
          } catch (err) {
            setStatus({ type: "error", message: err instanceof Error ? err.message : "വെരിഫിക്കേഷൻ പരാജയപ്പെട്ടു" });
          }
          setModalLoading(false);
        },
        modal: { ondismiss: () => setModalLoading(false) },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#EF1C25" },
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        setStatus({ type: "error", message: "പേയ്മെന്റ് പരാജയപ്പെട്ടു. വീണ്ടും ശ്രമിക്കുക." });
        setModalLoading(false);
      });
      rzp.open();
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "എന്തോ പിഴവ് സംഭവിച്ചു" });
      setModalLoading(false);
    }
  };

  const getDeepLink = () => {
    const ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua) ? GPAY_IOS : GPAY_ANDROID;
  };
  const gpayLink = (am: number) => getDeepLink()(am);

  const displayAmount = getAmountInPaise() / 100;

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
                setStatus({ type: null, message: "" });
                setCurrentOrderId(null);
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
              setStatus({ type: null, message: "" });
              setCurrentOrderId(null);
            }}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#EF1C25] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <button
          onClick={() => createOrderAndOpenApp((am) => gpayLink(am))}
          disabled={loading || !hasValidAmount}
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border-2 border-[#4285F4] bg-white text-[#4285F4] hover:bg-[#4285F4] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold transition-all"
        >
          <svg viewBox="0 0 40 40" className="size-4 shrink-0">
            <rect width="40" height="40" rx="6" fill="white" />
            <path d="M29.4 20.1c0-1.1-.1-2.1-.3-3H20v5.7h5.3c-.2 1.1-.8 2.1-1.8 2.8v2.3h2.9c1.7-1.5 2.7-3.8 2.7-6.5z" fill="#4285F4" />
            <path d="M20 30c2.4 0 4.4-.8 5.9-2.1l-2.9-2.3c-.8.5-1.8.8-3 .8-2.3 0-4.3-1.6-5-3.7H9v2.4C10.5 27.9 14.9 30 20 30z" fill="#34A853" />
            <path d="M15 22.7c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9v-2.4H9c-.6 1.2-1 2.6-1 4.1s.4 2.9 1 4.1l3-2.3 2.7-1.7z" fill="#FBBC05" />
            <path d="M20 11.8c1.3 0 2.5.5 3.4 1.3l2.5-2.5C24.1 9.2 22.2 8.5 20 8.5c-5.1 0-9.5 2.1-11 5.1l3.6 2.8c.7-2.2 2.7-3.8 5-3.8z" fill="#EA4335" />
          </svg>
          GPay{hasValidAmount ? ` ₹${displayAmount}` : ""}
        </button>
        <button
          onClick={() => createOrderAndOpenApp(PHONEPE_LINK)}
          disabled={loading || !hasValidAmount}
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border-2 border-[#5F259F] bg-white text-[#5F259F] hover:bg-[#5F259F] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold transition-all"
        >
          <svg viewBox="0 0 40 40" className="size-4 shrink-0">
            <rect width="40" height="40" rx="7" fill="#5F259F" />
            <text x="10" y="24" fontSize="15" fontWeight="900" fill="white" fontFamily="Arial">P</text>
            <text x="18" y="21" fontSize="5.5" fontWeight="700" fill="white" fontFamily="Arial" letterSpacing="0.3">hone</text>
            <text x="18" y="27" fontSize="5.5" fontWeight="700" fill="white" fontFamily="Arial" letterSpacing="0.3">Pe</text>
          </svg>
          PhonePe{hasValidAmount ? ` ₹${displayAmount}` : ""}
        </button>
        <button
          onClick={() => createOrderAndOpenApp(PAYTM_LINK)}
          disabled={loading || !hasValidAmount}
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border-2 border-[#00BAF2] bg-white text-[#00BAF2] hover:bg-[#00BAF2] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold transition-all"
        >
          <svg viewBox="0 0 40 40" className="size-4 shrink-0">
            <rect width="40" height="40" rx="6" fill="#00BAF2" />
            <text x="8" y="26" fontSize="12" fontWeight="800" fill="white" fontFamily="Arial">P</text>
            <text x="16" y="26" fontSize="10" fontWeight="600" fill="white" fontFamily="Arial">aytm</text>
          </svg>
          Paytm{hasValidAmount ? ` ₹${displayAmount}` : ""}
        </button>
        <button
          onClick={openCardPaymentModal}
          disabled={modalLoading || !hasValidAmount}
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border-2 border-[#1CA3D8] bg-white text-[#1CA3D8] hover:bg-[#1CA3D8] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold transition-all"
        >
          {modalLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <CreditCard className="size-4 shrink-0" />
          )}
          {modalLoading ? "തുറക്കുന്നു..." : `കാർഡ്${hasValidAmount ? ` ₹${displayAmount}` : ""}`}
        </button>
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

      {currentOrderId ? (
        <Button
          onClick={checkPaymentStatus}
          disabled={checkingStatus}
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-base gap-2 rounded-xl shadow-lg transition-all duration-200"
        >
              {checkingStatus ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> പരിശോധിക്കുന്നു...</>
              ) : (
                <><RefreshCw className="w-5 h-5" /> പേയ്മെന്റ് സ്റ്റാറ്റസ് പരിശോധിക്കുക</>
              )}
        </Button>
      ) : (
        <Button
          onClick={() => createOrderAndOpenApp((am) => gpayLink(am))}
          disabled={loading || !hasValidAmount}
          className="w-full h-12 bg-[#EF1C25] hover:bg-[#d0181f] text-white text-base gap-2 rounded-xl shadow-lg shadow-[#EF1C25]/20 transition-all duration-200 disabled:opacity-40"
        >
          {loading ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> പ്രോസസ്സ് ചെയ്യുന്നു...</>
          ) : (
            <><Heart className="w-5 h-5" /> അടയ്ക്കുക{hasValidAmount ? ` ₹${displayAmount}` : ""}</>
          )}
        </Button>
      )}

      {status.type && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 flex items-center gap-2 text-sm p-3 rounded-xl ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : status.type === "info"
              ? "bg-blue-50 text-blue-700 border border-blue-200"
              : "bg-red-50 text-red-600 border border-red-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : status.type === "info" ? (
            <ExternalLink className="w-4 h-4 shrink-0" />
          ) : (
            <XCircle className="w-4 h-4 shrink-0" />
          )}
          <span className="text-xs sm:text-sm">{status.message}</span>
        </motion.div>
      )}
    </div>
  );
}
