"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, HandHeart, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const INTERVALS = [5, 10, 20, 60, 180, 180, 180, 180, 180, 180, 180, 180];

const UPI_ID = "kanivu2214@fbl";
const PAYEE_NAME = "KANIVU CHARITY TRUST MUNDAMPARAMBU";
const ENCODED_NAME = encodeURIComponent(PAYEE_NAME);
const GPAY_ANDROID = `intent://pay#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;S.pa=${UPI_ID};S.pn=${ENCODED_NAME};S.cu=INR;end`;
const GPAY_IOS = `upi://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&cu=INR`;
const PHONEPE_LINK = `phonepe://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&cu=INR`;
const PAYTM_LINK = `paytmmp://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&cu=INR`;
const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&cu=INR`;
const WHATSAPP_LINK = "https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F";

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

export default function DonationPopup() {
  const [showIndex, setShowIndex] = useState(-1);
  const [gpayLink, setGpayLink] = useState(UPI_LINK);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      setGpayLink(GPAY_IOS);
    } else {
      setGpayLink(GPAY_ANDROID);
    }
  }, []);

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
    dismiss();
  };

  const msg = MESSAGES[showIndex % MESSAGES.length];

  return (
    <AnimatePresence>
      {showIndex >= 0 && msg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
        >
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
             className="relative w-full max-w-sm sm:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            <div className="bg-gradient-to-br from-[#EF1C25]/10 via-[#F7941D]/10 to-[#1CA3D8]/10 p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EF1C25] flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shadow-[#EF1C25]/30">
                <HandHeart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                {msg.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-relaxed max-w-sm mx-auto">
                {msg.desc}
              </p>
            </div>

            <div className="p-4 sm:p-5">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-white p-2 shadow-md ring-1 ring-gray-100">
                    <Image
                      src="/images/qr-code/paymentq-r.jpeg"
                      alt="UPI QR Code"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 text-xs sm:text-xs text-gray-400">
                    <Scan className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Scan to pay</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-900 text-center sm:text-left">
                    Pay via UPI
                  </p>

                  <a href={gpayLink} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-9 sm:h-10 bg-white border-2 border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white text-xs sm:text-sm gap-1.5 sm:gap-2 rounded-lg shadow-sm transition-all duration-200">
                      <GooglePayIcon />
                      Google Pay
                    </Button>
                  </a>

                  <a href={PHONEPE_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-9 sm:h-10 bg-white border-2 border-[#5F259F] text-[#5F259F] hover:bg-[#5F259F] hover:text-white text-xs sm:text-sm gap-1.5 sm:gap-2 rounded-lg shadow-sm transition-all duration-200">
                      <PhonePeIcon />
                      PhonePe
                    </Button>
                  </a>

                  <a href={PAYTM_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-9 sm:h-10 bg-white border-2 border-[#00BAF2] text-[#00BAF2] hover:bg-[#00BAF2] hover:text-white text-xs sm:text-sm gap-1.5 sm:gap-2 rounded-lg shadow-sm transition-all duration-200">
                      <PaytmIcon />
                      Paytm
                    </Button>
                  </a>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-9 sm:h-11 bg-[#25D366] hover:bg-[#22c35e] text-white text-xs sm:text-sm gap-1.5 sm:gap-2 rounded-xl shadow-sm">
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp വഴിയും സഹായിക്കാം
                  </Button>
                </a>
              </div>

              <div className="mt-2 sm:mt-3 bg-green-50 border border-green-100 rounded-xl p-2 sm:p-3 text-center">
                <p className="text-[10px] sm:text-xs font-semibold text-green-800">
                  ✓ സംഭാവന രസീത് ലഭ്യമാണ്
                </p>
                <p className="text-[10px] sm:text-[11px] text-green-700 font-medium mt-0.5 leading-tight">
                  {PAYEE_NAME}
                </p>
                <p className="text-[10px] sm:text-[11px] text-green-600 mt-0.5 leading-tight">
                  നിങ്ങളുടെ സംഭാവനയ്ക്ക് ഔദ്യോഗിക രസീത് നൽകുന്നതാണ്. രജിസ്റ്റേർഡ് ട്രസ്റ്റ്.
                </p>
              </div>

              <button
                onClick={close}
                className="w-full text-xs text-gray-400 hover:text-gray-600 pt-3 pb-1 transition-colors"
              >
                പിന്നീട്
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
