import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mb-4">
            <Image
              src="/images/kaniv/kaniv-logo.png"
              alt="കനിവ് ചാരിറ്റി ട്രസ്റ്റ് ലോഗോ"
              width={240}
              height={80}
              className="object-contain brightness-0 invert h-16 w-auto"
            />
          </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2 italic">
              &ldquo;കയ്യെത്തും ദൂരത്തൊരു കൈത്താങ്ങ്&rdquo;
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              മനുഷ്യസ്നേഹവും കൂട്ടായ്മയും കരുണയും അടിസ്ഥാനമാക്കി
              പ്രവർത്തിക്കുന്ന മുണ്ടംപറമ്പിന്റെ സാമൂഹിക സേവന കൂട്ടായ്മ.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              പ്രധാന ലിങ്കുകൾ
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "ഹോം", href: "#home" },
                { label: "ഞങ്ങളെ കുറിച്ച്", href: "#about" },
                { label: "സേവനങ്ങൾ", href: "#services" },
                { label: "ഗ്യാലറി", href: "#gallery" },
                { label: "ബന്ധപ്പെടുക", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              പ്രവർത്തന മേഖലകൾ
            </h3>
            <ul className="space-y-2.5">
              {[
                "ചികിത്സാ സഹായം",
                "വിദ്യാഭ്യാസ സഹായം",
                "ഭവന സഹായം",
                "സാമൂഹിക പ്രവർത്തനം",
                "കായിക പ്രോത്സാഹനം",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              ബന്ധപ്പെടുക
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-400 block">
                  WhatsApp:
                </span>
                <a
                  href="https://wa.me/919567178007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1CA3D8] hover:text-[#25D366] transition-colors"
                >
                  +91 9567178007
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-400 block">
                  വിലാസം:
                </span>
                <span className="text-sm text-gray-400">
                  മുണ്ടംപറമ്പ്, പള്ളിപ്പടി
                  <br />
                  മലപ്പുറം
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; 2026 കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്. എല്ലാ
            അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.
          </p>
          <p className="text-xs text-gray-600">
            Reg: 99/23 • മുണ്ടംപറമ്പ്, മലപ്പുറം
          </p>
        </div>
      </div>
    </footer>
  );
}
