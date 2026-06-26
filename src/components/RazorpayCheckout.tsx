"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  IndianRupee,
  Loader2,
  CheckCircle2,
  XCircle,
  Wallet,
  RefreshCw,
  ExternalLink,
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
const PRESET_AMOUNTS = [1000, 2000, 5000, 10000, 50000, 100000];

export default function RazorpayCheckout() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const hasValidAmount =
    selectedAmount !== null || customAmount.trim() !== "";

  const getAmountInPaise = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return Math.round(parseFloat(customAmount) * 100);
    return 1000;
  };

  const createOrderAndOpenApp = async (deepLinkFn: (am: number) => string) => {
    const amountPaise = getAmountInPaise();
    if (amountPaise < 100) {
      setStatus({ type: "error", message: "Minimum donation is ₹10" });
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
          receipt: `donation_${Date.now()}`,
        }),
      });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "Failed"); }
      const order = await res.json();
      setCurrentOrderId(order.order_id);
      window.open(deepLinkFn(amountPaise / 100), "_blank");
      setStatus({ type: "info", message: `App opened. After payment, tap "Check Payment" below.` });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
    setLoading(false);
  };

  const checkPaymentStatus = async () => {
    if (!currentOrderId) return;
    setCheckingStatus(true);
    setStatus({ type: null, message: "" });
    try {
      const res = await fetch(`/api/check-payment-status?order_id=${currentOrderId}`);
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "Check failed"); }
      const data = await res.json();
      if (data.paid) {
        setStatus({ type: "success", message: `Payment successful! ₹${data.amount / 100}` });
        setCurrentOrderId(null);
        setSelectedAmount(null);
        setCustomAmount("");
      } else {
        setStatus({ type: "error", message: "Payment not received yet. Try again after paying." });
      }
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Failed to check" });
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
      setStatus({ type: "error", message: "Minimum donation is ₹10" });
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
          receipt: `donation_card_${Date.now()}`,
        }),
      });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "Failed"); }
      const order = await res.json();
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: "KANIVU CHARITY TRUST",
        description: "Donation via Card / NetBanking",
        image: "/images/kaniv/kaniv-logo.png",
        order_id: order.order_id,
        handler: async function (response: RazorpayPaymentResponse) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            if (!verifyRes.ok) { const err = await verifyRes.json(); throw new Error(err.error || "Verification failed"); }
            setStatus({ type: "success", message: `Payment successful! ID: ${response.razorpay_payment_id.slice(-6)}` });
            setSelectedAmount(null);
            setCustomAmount("");
          } catch (err) {
            setStatus({ type: "error", message: err instanceof Error ? err.message : "Verification failed" });
          }
          setModalLoading(false);
        },
        modal: { ondismiss: () => setModalLoading(false) },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#1CA3D8" },
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        setStatus({ type: "error", message: "Payment failed. Try again." });
        setModalLoading(false);
      });
      rzp.open();
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Something went wrong" });
      setModalLoading(false);
    }
  };

  const getDeepLink = () => {
    const ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua) ? GPAY_IOS : GPAY_ANDROID;
  };
  const gpayLink = (am: number) => getDeepLink()(am);

  const presets = PRESET_AMOUNTS.map((paise) => ({
    label: `₹${paise / 100}`,
    value: paise,
  }));

  return (
    <div className="w-full max-w-3xl mx-auto min-w-0">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
          <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          UPI / GPay / PhonePe / Paytm
        </div>
        <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
          <Wallet className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Direct App Payment
        </div>
      </div>

      <div className="text-center mb-4 md:mb-6">
        <h3 className="font-bold text-gray-900 text-lg">
          Donate via UPI Apps
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">
          Select amount, tap your app, pay & confirm
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
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
            GPay
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
            PhonePe
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
            Paytm
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
            {modalLoading ? "Opening..." : "Card"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
        {presets.map((p) => (
          <button
            key={p.value}
            onClick={() => {
              setSelectedAmount(p.value);
              setCustomAmount("");
              setStatus({ type: null, message: "" });
              setCurrentOrderId(null);
            }}
            className={`py-2.5 rounded-xl text-sm font-semibold transition-all border-2 ${
              selectedAmount === p.value
                ? "border-[#1CA3D8] bg-[#1CA3D8]/10 text-[#1CA3D8]"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#1CA3D8]/40 hover:text-[#1CA3D8]"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Custom Amount
        </label>
        <div className="relative">
          <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="number"
            min="1"
            step="1"
            placeholder="Enter amount (₹)"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
              setStatus({ type: null, message: "" });
              setCurrentOrderId(null);
            }}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1CA3D8] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {currentOrderId ? (
        <Button
          onClick={checkPaymentStatus}
          disabled={checkingStatus}
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-base gap-2 rounded-xl shadow-lg transition-all duration-200"
        >
          {checkingStatus ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Checking Payment...</>
          ) : (
            <><RefreshCw className="w-5 h-5" /> Check Payment Status</>
          )}
        </Button>
      ) : (
        <div className="flex gap-3">
          <Button
            onClick={() => createOrderAndOpenApp((am) => gpayLink(am))}
            disabled={loading || !hasValidAmount}
            className="flex-1 h-12 bg-[#1CA3D8] hover:bg-[#1890c0] text-white text-base gap-2 rounded-xl shadow-lg shadow-[#1CA3D8]/20 transition-all duration-200 disabled:opacity-40"
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
            ) : (
              <><CreditCard className="w-5 h-5" /> Pay ₹{getAmountInPaise() / 100}</>
            )}
          </Button>
          <Button
            onClick={openCardPaymentModal}
            disabled={modalLoading || !hasValidAmount}
            variant="outline"
            className="h-12 text-base gap-2 rounded-xl transition-all duration-200 border-[#1CA3D8] text-[#1CA3D8] disabled:opacity-40"
          >
            {modalLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <CreditCard className="w-5 h-5" />
            )}
            {modalLoading ? "Opening..." : "Card"}
          </Button>
        </div>
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
