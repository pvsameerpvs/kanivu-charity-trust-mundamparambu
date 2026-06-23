import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle2, Users, Stethoscope } from "lucide-react"
import WhatsAppIcon from "@/components/WhatsAppIcon"
import { equipments, getEquipmentBySlug, getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/equipments"
import { Badge } from "@/components/ui/badge"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return equipments.map((eq) => ({ slug: eq.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const eq = getEquipmentBySlug(slug)
  if (!eq) return {}
  return {
    title: `${eq.nameMl} | കനിവ് ചാരിറ്റി ട്രസ്റ്റ്`,
    description: eq.shortDescMl,
  }
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params
  const eq = getEquipmentBySlug(slug)
  if (!eq) notFound()

  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1CA3D8]/5 via-transparent to-[#F7941D]/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <Link
            href="/equipments"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1CA3D8] transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            എല്ലാ ഉപകരണങ്ങളിലേക്കും
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F0F9FF] to-[#E8F4FD] border border-gray-100 shadow-lg shadow-gray-200/50">
              <Image
                src={eq.image}
                alt={eq.nameMl}
                fill
                className="object-contain p-6 md:p-10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-700 border-0 shadow-sm"
              >
                {eq.categoryMl}
              </Badge>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">{eq.nameMl}</h1>
                <p className="text-base text-gray-500">{eq.nameEn}</p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed">{eq.fullDescriptionMl}</p>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="size-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">ഈ ഉപകരണം ആർക്കൊക്കെ ഉപയോഗിക്കാം?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{eq.patientUseMl}</p>
                  </div>
                </div>
              </div>

              {eq.featuresMl.length > 0 && (
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="size-10 rounded-xl bg-[#1CA3D8]/10 flex items-center justify-center shrink-0">
                      <Stethoscope className="size-5 text-[#1CA3D8]" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 pt-2">സവിശേഷതകൾ</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {eq.featuresMl.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="size-4 text-[#1CA3D8] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={getWhatsAppUrl(eq.nameMl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 h-12 px-5 rounded-2xl bg-[#25D366] hover:bg-[#1DA95A] text-white font-medium transition-all duration-300 shadow-lg shadow-[#25D366]/25"
                >
                  <WhatsAppIcon className="size-5 shrink-0" />
                  WhatsApp വഴി അന്വേഷിക്കുക
                </a>
                <a
                  href={`tel:+91${WHATSAPP_NUMBER}`}
                  className="flex-1 inline-flex items-center justify-center gap-3 h-12 px-5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-medium border border-gray-200 transition-all duration-300"
                >
                  <span className="text-lg leading-none">📞</span>
                  +91 {WHATSAPP_NUMBER.slice(0, 5)} {WHATSAPP_NUMBER.slice(5)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">കൂടുതൽ വിവരങ്ങൾ</h2>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-6">{eq.fullDescription}</p>

              <div className="bg-[#F0F9FF] rounded-2xl p-5 border border-[#1CA3D8]/10">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">എങ്ങനെ ലഭിക്കും?</h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-[#1CA3D8] mt-2 shrink-0" />
                    ഉപയോഗത്തിനായി നൽകുന്നു, ഉപയോഗശേഷം തിരികെ നൽകുക
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-[#1CA3D8] mt-2 shrink-0" />
                    മുണ്ടംപറമ്പിൽ ഡെലിവറി ചെയ്യുന്നു
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-[#1CA3D8] mt-2 shrink-0" />
                    കൂടുതൽ വിവരങ്ങൾക്ക് WhatsApp വഴി ബന്ധപ്പെടുക
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
