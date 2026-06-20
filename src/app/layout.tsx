import type { Metadata } from "next";
import { Noto_Sans_Malayalam, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const notoSansMalayalam = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ് | Charity Trust in Malappuram",
  description:
    "മുണ്ടംപറമ്പിലെ ജീവകാരുണ്യ പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകുന്ന കനിവ് ചാരിറ്റി ട്രസ്റ്റ് ചികിത്സാ സഹായം, വിദ്യാഭ്യാസ സഹായം, ഭവന സഹായം, സാമൂഹിക സേവനം എന്നിവയിൽ പ്രവർത്തിക്കുന്നു.",
  keywords: [
    "കനിവ് ചാരിറ്റി ട്രസ്റ്റ്",
    "മുണ്ടംപറമ്പ് ചാരിറ്റി",
    "Malappuram Charity Trust",
    "Charity Trust Kerala",
    "ചികിത്സാ സഹായം",
    "വിദ്യാഭ്യാസ സഹായം",
    "ഭവന സഹായം",
  ],
  openGraph: {
    title: "കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്",
    description:
      "കയ്യെത്തും ദൂരത്തൊരു കൈത്താങ്ങ് - മുണ്ടംപറമ്പിലെ സാമൂഹിക ജീവകാരുണ്യ കൂട്ടായ്മ",
    type: "website",
    locale: "ml_IN",
    siteName: "കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്",
    images: [
      {
        url: "/images/kaniv/kaniv-group.svg",
        width: 800,
        height: 500,
        alt: "കനിവ് ചാരിറ്റി ട്രസ്റ്റ് കൂട്ടായ്മ",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ml"
      className={`${notoSansMalayalam.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-[#F8FBFF] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
