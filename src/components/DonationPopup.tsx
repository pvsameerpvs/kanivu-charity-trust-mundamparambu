"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  HandHeart,
  Scan,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const INTERVALS = [5, 10, 20, 60, 180, 180, 180, 180, 180, 180, 180, 180];
const UPI_ID = "kanivu2214@fbl";
const PAYEE_NAME = "KANIVU CHARITY TRUST MUNDAMPARAMBU";
const ENCODED_NAME = encodeURIComponent(PAYEE_NAME);
const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${ENCODED_NAME}&cu=INR`;
const WHATSAPP_LINK = "https://wa.me/919567178007?text=%E0%B4%A8%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%82%2C%20%E0%B4%95%E0%B4%A8%E0%B4%BF%E0%B4%B5%E0%B5%8D%20%E0%B4%9A%E0%B4%BE%E0%B4%B0%E0%B4%BF%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%20%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%B5%E0%B5%BC%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%A8%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%A8%E0%B5%BD%E0%B4%95%E0%B4%BE%E0%B5%BB%20%E0%B4%86%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%B9%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%81.%20%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B4%A6%E0%B4%BE%E0%B4%82%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%20%E0%B4%85%E0%B4%B1%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%AE%E0%B5%8B%3F";

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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

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

  useEffect(() => {
    if (showIndex < 0) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showIndex]);

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
              <div className="flex flex-col items-center justify-center">
                <a
                  href={UPI_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white p-2 shadow-sm ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer"
                >
                  <Image
                    src="/images/qr-code/paymentq-r.jpeg"
                    alt="UPI QR Code"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </a>
                <div className="flex items-center gap-1 mt-1.5 text-[9px] sm:text-xs text-gray-400">
                  <Scan className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="whitespace-nowrap">Scan with any UPI app to pay</span>
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

              <div className="mt-2 sm:mt-2.5 border-t border-gray-100 pt-2 sm:pt-2.5 space-y-2">
                <Link href="/family-donation" onClick={close} className="block">
                  <Button className="w-full h-9 sm:h-10 bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs gap-2 rounded-lg shadow-sm py-0">
                    <Heart className="size-3.5 sm:size-4" />
                    കുടുംബ സംരക്ഷണ പദ്ധതി
                  </Button>
                </Link>
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
