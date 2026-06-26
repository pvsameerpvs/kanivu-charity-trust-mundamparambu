"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  HandHeart,
  Scan,
  Loader2,
  CheckCircle2,
  XCircle,
  IndianRupee,
  RefreshCw,
  ExternalLink,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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

const INTERVALS = [5, 10, 20, 60, 180, 180, 180, 180, 180, 180, 180, 180];
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
const WHATSAPP_LINK = "https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F";
const PRESET_AMOUNTS = [1000, 2000, 5000, 10000, 50000, 100000];

const MESSAGES = [
  {
    title: "ഒരു ചെറിയ സഹായം ഒരാളുടെ ജീവിതം മാറ്റും",
    desc: "കനിവ് ചാരിറ്റി ട്രസ്റ്റിന്റെ പ്രവർത്തനങ്ങൾക്ക് താങ്കളുടെ സംഭാവന വലിയ മാറ്റം സൃഷ്ടിക്കും.",
  },
  {
    title: "നിങ്ങൾക്ക് കഴിയുമോ?",
    desc: "ചികിത്സ, വിദ്യാഭ്യാസം, ഭവനം... ഓരോ സംഭാവനയും ഒരു കുടുംബത്തിന് പ്രതീക്ഷ നൽകുന്നു.",
  },
  {
    title: "കനിവിന്റെ കൂടെ നിൽക്കൂ",
    desc: "നിങ്ങളുടെ പിന്തുണ കൊണ്ടാണ് ഞങ്ങൾ ഇത്രയും ജനങ്ങളിലേക്ക് എത്തിയത്.",
  },
  {
    title: "ഓരോ രൂപയും വിലപ്പെട്ടത്",
    desc: "ചെറിയ തുക പോലും വലിയ മാറ്റത്തിന് കാരണമാകും. ഇന്ന് തന്നെ സഹായിക്കൂ.",
  },
];

function getAmountInPaise(
  selectedAmount: number | null,
  customAmount: string
): number {
  if (selectedAmount) return selectedAmount;
  if (customAmount) return Math.round(parseFloat(customAmount) * 100);
  return 1000;
}

export default function DonationPopup() {
  const [showIndex, setShowIndex] = useState(-1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });
  const [modalLoading, setModalLoading] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  const createOrderAndOpenApp = async (deepLinkFn: (am: number) => string) => {
    const amountPaise = getAmountInPaise(selectedAmount, customAmount);
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
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create order");
      }
      const order = await res.json();
      setCurrentOrderId(order.order_id);

      const amountINR = amountPaise / 100;
      const link = deepLinkFn(amountINR);
      window.open(link, "_blank");

      setStatus({
        type: "info",
        message: `App opened. After payment, tap "Check Payment" below to confirm.`,
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong. Try again.",
      });
    }
    setLoading(false);
  };

  const checkPaymentStatus = async () => {
    if (!currentOrderId) return;
    setCheckingStatus(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch(
        `/api/check-payment-status?order_id=${currentOrderId}`
      );
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Check failed");
      }
      const data = await res.json();
      if (data.paid) {
        setStatus({
          type: "success",
          message: `Payment successful! ₹${data.amount / 100}`,
        });
        setCurrentOrderId(null);
        setSelectedAmount(null);
        setCustomAmount("");
      } else {
        setStatus({
          type: "error",
          message: "Payment not received yet. Please try again after paying.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error ? err.message : "Failed to check payment",
      });
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
    const amountPaise = getAmountInPaise(selectedAmount, customAmount);
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
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create order");
      }
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
            if (!verifyRes.ok) {
              const err = await verifyRes.json();
              throw new Error(err.error || "Verification failed");
            }
            setStatus({
              type: "success",
              message: `Payment successful! ID: ${response.razorpay_payment_id.slice(-6)}`,
            });
            setSelectedAmount(null);
            setCustomAmount("");
          } catch (err) {
            setStatus({
              type: "error",
              message: err instanceof Error ? err.message : "Verification failed",
            });
          }
          setModalLoading(false);
        },
        modal: {
          ondismiss: function () {
            setModalLoading(false);
          },
        },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#1CA3D8" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function () {
        setStatus({ type: "error", message: "Payment failed. Try again." });
        setModalLoading(false);
      });
      rzp.open();
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong",
      });
      setModalLoading(false);
    }
  };

  useEffect(() => {
    const scheduleNext = (delay: number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        const idx = indexRef.current;
        if (idx >= INTERVALS.length) return;
        setShowIndex(idx);
        indexRef.current = idx + 1;
      }, delay * 1000);
    };
    scheduleNext(INTERVALS[0]);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (showIndex >= 0) {
      const nextDelay = INTERVALS[showIndex + 1];
      if (nextDelay) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          const idx = indexRef.current;
          if (idx >= INTERVALS.length) return;
          setShowIndex(idx);
          indexRef.current = idx + 1;
        }, nextDelay * 1000);
      }
    }
  }, [showIndex]);

  const dismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const idx = indexRef.current;
    if (idx >= INTERVALS.length) return;
    timerRef.current = setTimeout(() => {
      setShowIndex(idx);
      indexRef.current = idx + 1;
    }, INTERVALS[idx] * 1000);
  };

  const close = () => {
    setShowIndex(-1);
    setStatus({ type: null, message: "" });
    setCurrentOrderId(null);
    setCustomAmount("");
    setModalLoading(false);
    if (scriptRef.current && document.body.contains(scriptRef.current)) {
      document.body.removeChild(scriptRef.current);
      scriptRef.current = null;
    }
    dismiss();
  };

  useEffect(() => {
    if (showIndex < 0) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showIndex]);

  const hasValidAmount =
    selectedAmount !== null || customAmount.trim() !== "";

  const getDeepLink = () => {
    const ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua) ? GPAY_IOS : GPAY_ANDROID;
  };

  const gpayLink = (am: number) => getDeepLink()(am);

  const msg = MESSAGES[showIndex % MESSAGES.length];

  const popup =
    showIndex >= 0 && msg ? (
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={close}
        />
        <div className="relative z-10 flex min-h-full items-center justify-center p-3 sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-[340px] sm:max-w-md bg-white rounded-2xl shadow-2xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] overflow-y-auto animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200"
          >
            <button
              onClick={close}
              className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-gray-100/80 hover:bg-gray-200 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-500" />
            </button>

            <div className="bg-gradient-to-br from-[#EF1C25]/10 via-[#F7941D]/10 to-[#1CA3D8]/10 p-3 sm:p-5 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#EF1C25] flex items-center justify-center mx-auto mb-1.5 sm:mb-3 shadow-lg shadow-[#EF1C25]/30">
                <HandHeart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 leading-snug">
                {msg.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1.5 leading-relaxed max-w-xs sm:max-w-sm mx-auto">
                {msg.desc}
              </p>
            </div>

            <div className="p-3 sm:p-5">
              <div className="mb-2.5 sm:mb-3">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2">
                  {PRESET_AMOUNTS.map((paise) => (
                    <button
                      key={paise}
                      onClick={() => {
                        setSelectedAmount(paise);
                        setCustomAmount("");
                        setStatus({ type: null, message: "" });
                        setCurrentOrderId(null);
                      }}
                      className={`py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold transition-all border ${
                        selectedAmount === paise
                          ? "border-[#1CA3D8] bg-[#1CA3D8]/10 text-[#1CA3D8]"
                          : "border-gray-200 bg-white text-gray-700 hover:border-[#1CA3D8]/40 hover:text-[#1CA3D8]"
                      }`}
                    >
                      ₹{paise / 100}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <IndianRupee className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Custom amount (₹)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                      setStatus({ type: null, message: "" });
                      setCurrentOrderId(null);
                    }}
                    className="w-full pl-6 sm:pl-7 pr-2 py-1.5 sm:py-2 rounded-lg border border-gray-200 bg-white text-[10px] sm:text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#1CA3D8] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
                <div className="col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-white p-1.5 shadow-sm ring-1 ring-gray-100">
                    <Image
                      src="/images/qr-code/paymentq-r.jpeg"
                      alt="UPI QR Code"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 128px"
                    />
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-[9px] sm:text-xs text-gray-400">
                    <Scan className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="whitespace-nowrap">Scan to pay</span>
                  </div>
                </div>

                <div className="col-span-7 flex flex-col gap-2">
                  <button
                    onClick={() =>
                      createOrderAndOpenApp((am) => gpayLink(am))
                    }
                    disabled={loading || !hasValidAmount}
                    className="flex items-center justify-center gap-1.5 h-8 sm:h-9 rounded-lg border-2 border-[#4285F4] bg-white text-[#4285F4] hover:bg-[#4285F4] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-[10px] sm:text-xs font-semibold transition-all"
                  >
                    <svg viewBox="0 0 40 40" className="size-4 sm:size-5 shrink-0">
                      <rect width="40" height="40" rx="6" fill="white" />
                      <path d="M29.4 20.1c0-1.1-.1-2.1-.3-3H20v5.7h5.3c-.2 1.1-.8 2.1-1.8 2.8v2.3h2.9c1.7-1.5 2.7-3.8 2.7-6.5z" fill="#4285F4" />
                      <path d="M20 30c2.4 0 4.4-.8 5.9-2.1l-2.9-2.3c-.8.5-1.8.8-3 .8-2.3 0-4.3-1.6-5-3.7H9v2.4C10.5 27.9 14.9 30 20 30z" fill="#34A853" />
                      <path d="M15 22.7c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9v-2.4H9c-.6 1.2-1 2.6-1 4.1s.4 2.9 1 4.1l3-2.3 2.7-1.7z" fill="#FBBC05" />
                      <path d="M20 11.8c1.3 0 2.5.5 3.4 1.3l2.5-2.5C24.1 9.2 22.2 8.5 20 8.5c-5.1 0-9.5 2.1-11 5.1l3.6 2.8c.7-2.2 2.7-3.8 5-3.8z" fill="#EA4335" />
                    </svg>
                    Google Pay
                  </button>

                  <button
                    onClick={() =>
                      createOrderAndOpenApp(PHONEPE_LINK)
                    }
                    disabled={loading || !hasValidAmount}
                    className="flex items-center justify-center gap-1.5 h-8 sm:h-9 rounded-lg border-2 border-[#5F259F] bg-white text-[#5F259F] hover:bg-[#5F259F] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-[10px] sm:text-xs font-semibold transition-all"
                  >
                    <svg viewBox="0 0 40 40" className="size-4 sm:size-5 shrink-0">
                      <rect width="40" height="40" rx="7" fill="#5F259F" />
                      <text x="10" y="24" fontSize="15" fontWeight="900" fill="white" fontFamily="Arial">P</text>
                      <text x="18" y="21" fontSize="5.5" fontWeight="700" fill="white" fontFamily="Arial" letterSpacing="0.3">hone</text>
                      <text x="18" y="27" fontSize="5.5" fontWeight="700" fill="white" fontFamily="Arial" letterSpacing="0.3">Pe</text>
                    </svg>
                    PhonePe
                  </button>

                  <button
                    onClick={() =>
                      createOrderAndOpenApp(PAYTM_LINK)
                    }
                    disabled={loading || !hasValidAmount}
                    className="flex items-center justify-center gap-1.5 h-8 sm:h-9 rounded-lg border-2 border-[#00BAF2] bg-white text-[#00BAF2] hover:bg-[#00BAF2] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-[10px] sm:text-xs font-semibold transition-all"
                  >
                    <svg viewBox="0 0 40 40" className="size-4 sm:size-5 shrink-0">
                      <rect width="40" height="40" rx="6" fill="#00BAF2" />
                      <text x="8" y="26" fontSize="12" fontWeight="800" fill="white" fontFamily="Arial">P</text>
                      <text x="16" y="26" fontSize="10" fontWeight="600" fill="white" fontFamily="Arial">aytm</text>
                    </svg>
                    Paytm
                  </button>

                  <button
                    onClick={openCardPaymentModal}
                    disabled={modalLoading || !hasValidAmount}
                    className="flex items-center justify-center gap-1.5 h-8 sm:h-9 rounded-lg border-2 border-[#1CA3D8] bg-white text-[#1CA3D8] hover:bg-[#1CA3D8] hover:text-white disabled:opacity-40 disabled:pointer-events-none text-[10px] sm:text-xs font-semibold transition-all"
                  >
                    {modalLoading ? (
                      <Loader2 className="size-3 sm:size-3.5 animate-spin" />
                    ) : (
                      <CreditCard className="size-3.5 sm:size-4 shrink-0" />
                    )}
                    {modalLoading ? "Opening..." : "Card / NetBanking"}
                  </button>

                  {currentOrderId && (
                    <Button
                      onClick={checkPaymentStatus}
                      disabled={checkingStatus}
                      className="w-full h-8 sm:h-9 bg-green-600 hover:bg-green-700 text-white text-[10px] sm:text-xs gap-1.5 rounded-lg shadow-sm transition-all py-0"
                    >
                      {checkingStatus ? (
                        <><Loader2 className="size-3 sm:size-3.5 animate-spin" /> Checking...</>
                      ) : (
                        <><RefreshCw className="size-3 sm:size-3.5 shrink-0" /> Check Payment</>
                      )}
                    </Button>
                  )}

                  {status.type && (
                    <div
                      className={`flex items-center gap-1 text-[9px] sm:text-[10px] p-1.5 rounded-lg ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700"
                          : status.type === "info"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="size-3 shrink-0" />
                      ) : status.type === "info" ? (
                        <ExternalLink className="size-3 shrink-0" />
                      ) : (
                        <XCircle className="size-3 shrink-0" />
                      )}
                      <span>{status.message}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-2.5 sm:mt-3 bg-blue-50/60 border border-blue-100/80 rounded-xl p-2 sm:p-3 text-left">
                <div className="flex flex-col gap-0.5 text-[9px] sm:text-[11px] text-blue-700 leading-normal">
                  <p className="font-semibold text-blue-800 text-[10px] sm:text-xs flex justify-between items-center">
                    <span>✓ UPI ID: <span className="font-bold select-all text-blue-900">{UPI_ID}</span></span>
                    <span className="text-[8px] sm:text-[10px] font-normal text-blue-500">Federal Bank</span>
                  </p>
                  <p><span className="font-medium text-blue-800">Recipient:</span> {PAYEE_NAME}</p>
                </div>
              </div>

              <div className="mt-2 sm:mt-2.5 border-t border-gray-100 pt-2 sm:pt-2.5">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-9 sm:h-10 bg-[#25D366] hover:bg-[#22c35e] text-white text-[10px] sm:text-xs gap-2 rounded-lg shadow-sm py-0">
                    <WhatsAppIcon className="size-3.5 sm:size-4" />
                    WhatsApp വഴിയും സഹായിക്കാം
                  </Button>
                </a>
              </div>

              <button
                onClick={close}
                className="w-full text-[10px] sm:text-xs text-gray-400 hover:text-gray-600 pt-2 pb-0.5 transition-colors"
              >
                പിന്നീട്
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  if (typeof document === "undefined") return null;

  return createPortal(popup, document.body);
}
