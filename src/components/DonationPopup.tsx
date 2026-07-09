"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
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

export default function DonationPopup() {
  const [showIndex, setShowIndex] = useState(-1);
  const [slideIndex, setSlideIndex] = useState(0);
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

  const slides = [
    {
      icon: <HandHeart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
      title: "ഒരു ചെറിയ സഹായം ഒരാളുടെ ജീവിതം മാറ്റും",
      content: (
        <div>
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

          <div className="mt-2 sm:mt-2.5 bg-amber-50 border border-amber-200 rounded-xl p-2 sm:p-3 text-left">
            <p className="text-[9px] sm:text-[11px] font-semibold text-amber-800 mb-1">
              ✓ Bank Transfer
            </p>
            <div className="space-y-0.5 text-[8px] sm:text-[10px] text-amber-700 leading-normal">
              <p><span className="font-medium">A/c:</span> <span className="font-mono font-bold text-amber-900 select-all">25150200002214</span></p>
              <p><span className="font-medium">IFSC:</span> <span className="font-mono font-bold text-amber-900 select-all">FDRL0002515</span></p>
              <p><span className="font-medium">Bank:</span> Federal Bank, Kizhisseri</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
      title: "ഷിബിൽ റഹ്മാൻ — ഓർമ്മയിൽ എന്നും",
      content: (
        <div>
          <div className="flex justify-center mb-3">
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-[50%] overflow-hidden border-2 border-stone-200 shadow-md">
              <Image
                src="/images/shibili/shibili.jpeg"
                alt="ഷിബിൽ റഹ്മാൻ"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-stone-600 leading-relaxed text-center max-w-xs mx-auto">
            മൂന്ന് മനുഷ്യജീവനുകൾ രക്ഷിക്കാൻ നടത്തിയ ധീരമായ ശ്രമത്തിനിടെയാണ് നമ്മുടെ പ്രിയ സുഹൃത്ത് ഷിബിൽ റഹ്മാൻ അകാലത്തിൽ നമ്മെ വിട്ടുപിരിഞ്ഞത്. സ്വന്തം സുരക്ഷയെക്കാൾ മറ്റുള്ളവരുടെ ജീവന് പ്രാധാന്യം നൽകിയ അദ്ദേഹത്തിന്റെ മാനവികതയും ആത്മത്യാഗവും എന്നും ആദരിക്കപ്പെടും.
          </p>
        </div>
      ),
    },

  ];

  const current = slides[slideIndex];

  const prev = () => setSlideIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setSlideIndex((i) => (i + 1) % slides.length);

  const popup =
    showIndex >= 0 && current ? (
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={close}
        />
        <div className="relative z-10 flex min-h-full items-center justify-center p-3 sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-[340px] sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200/60 max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] overflow-y-auto animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200"
          >
            <button
              onClick={close}
              className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/90 shadow-sm border border-gray-200/60 hover:bg-white hover:shadow-md transition-all"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            <button
              onClick={prev}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/90 shadow-sm border border-gray-200/60 hover:bg-white hover:shadow-md transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/90 shadow-sm border border-gray-200/60 hover:bg-white hover:shadow-md transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
            <div className="bg-gradient-to-br from-[#EF1C25]/10 via-[#F7941D]/15 to-[#1CA3D8]/10 p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#EF1C25] to-[#d9161e] flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shadow-[#EF1C25]/30">
                {current.icon}
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/60 backdrop-blur-sm text-[8px] sm:text-[10px] font-semibold text-[#EF1C25] mb-1.5 tracking-wide">
                കനിവ് ചാരിറ്റി ട്രസ്റ്റ്
              </div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 leading-snug px-4">
                {current.title}
              </h3>
            </div>

            <div className="p-3 sm:p-5">
              {current.content}

              <div className="flex items-center justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === slideIndex
                        ? "w-5 h-2 bg-[#EF1C25]"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {slideIndex !== 1 && (
                <div className="mt-3 sm:mt-4 border-t border-gray-100 pt-3 sm:pt-4 space-y-2.5">
                  <Link href="/family-donation" onClick={close} className="block">
                    <Button className="w-full h-9 sm:h-10 bg-gradient-to-r from-[#EF1C25] to-[#d9161e] hover:from-[#d9161e] hover:to-[#c0141a] text-white text-[10px] sm:text-xs gap-2 rounded-xl shadow-md shadow-[#EF1C25]/20 py-0">
                      <Heart className="size-3.5 sm:size-4" />
                      കുടുംബ സംരക്ഷണ പദ്ധതി
                    </Button>
                  </Link>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-9 sm:h-10 bg-gradient-to-r from-[#25D366] to-[#22c35e] hover:from-[#22c35e] hover:to-[#1da851] text-white text-[10px] sm:text-xs gap-2 rounded-xl shadow-md shadow-[#25D366]/20 py-0">
                      <WhatsAppIcon className="size-3.5 sm:size-4" />
                      WhatsApp വഴിയും സഹായിക്കാം
                    </Button>
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    ) : null;

  if (typeof document === "undefined") return null;

  return createPortal(popup, document.body);
}
