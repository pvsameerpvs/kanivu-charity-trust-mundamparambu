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
  Volleyball,
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
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (showIndex >= 0) {
      autoSlideRef.current = setInterval(() => {
        setSlideIndex((i) => (i + 1) % 3);
      }, 5000);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [showIndex]);

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
      title: "ഷിബിൽ റഹ്മാൻ — ആദരാഞ്ജലികൾ",
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
    {
      icon: <Volleyball className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
      title: "സൗഹൃദ ഫുട്ബോൾ മേള",
      content: (
        <div>
          <p className="text-[9px] sm:text-[11px] text-stone-700 leading-relaxed text-center mb-2 px-1">
            പ്രിയപ്പെട്ട കനിവ് ചാരിറ്റി ട്രസ്റ്റിന്റെ സുഹൃത്തുക്കളെ!
          </p>
          <p className="text-[9px] sm:text-[11px] text-stone-600 leading-relaxed text-center px-1">
            നമ്മുടെ കനിവിന്റെ ജീവകാരുണ്യ പ്രവർത്തനങ്ങൾക്ക് കരുത്തേകാൻ ധനസമാഹരണത്തിന് നടത്തുന്ന സൗഹൃദ ഫുട്ബോൾ മാജിക് ലാൻഡ് ടർഫിൽ വെച്ച് നടക്കുന്നതായിരിക്കും. ഫുട്ബോളിലേക്കും താര ലേലത്തിലേക്കും മുഴുവൻ കനിവിന്റെ സുഹൃത്തുക്കളെയും ക്ഷണിക്കുന്നു. എല്ലാവരും പങ്കെടുത്ത് ഈ ഫുട്ബോൾമേള വമ്പിച്ച വിജയമാക്കണമെന്നപേക്ഷിക്കുന്നു.
          </p>
          <div className="mt-2 bg-green-50 border border-green-200 rounded-lg p-2 text-center">
            <p className="text-[10px] sm:text-xs font-bold text-green-800">📅 11/07/26 ശനിയാഴ്ച</p>
            <p className="text-[9px] sm:text-[10px] text-green-600">വൈകുന്നേരം | മാജിക് ലാൻഡ് ടർഫ്</p>
          </div>
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
            className="relative w-full max-w-[340px] sm:max-w-md bg-white rounded-2xl shadow-2xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] overflow-y-auto animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200"
          >
            <button
              onClick={close}
              className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-gray-100/80 hover:bg-gray-200 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-500" />
            </button>

            <div className="bg-gradient-to-br from-[#EF1C25]/10 via-[#F7941D]/10 to-[#1CA3D8]/10 p-3 sm:p-5 text-center relative">
              <button
                onClick={prev}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/60 hover:bg-white/80 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={next}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/60 hover:bg-white/80 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#EF1C25] flex items-center justify-center mx-auto mb-1.5 sm:mb-3 shadow-lg shadow-[#EF1C25]/30">
                {current.icon}
              </div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 leading-snug px-6">
                {current.title}
              </h3>
            </div>

            <div className="p-3 sm:p-5">
              {current.content}

              <div className="flex items-center justify-center gap-1.5 mt-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === slideIndex ? "bg-[#EF1C25]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {slideIndex !== 1 && (
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
              )}


            </div>
          </div>
        </div>
      </div>
    ) : null;

  if (typeof document === "undefined") return null;

  return createPortal(popup, document.body);
}
