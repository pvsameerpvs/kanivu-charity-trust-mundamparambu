export interface Equipment {
  id: string
  nameEn: string
  nameMl: string
  slug: string
  image: string
  category: string
  categoryMl: string
  shortDesc: string
  shortDescMl: string
  patientUse: string
  patientUseMl: string
  fullDescription: string
  fullDescriptionMl: string
  features: string[]
  featuresMl: string[]
}

export const WHATSAPP_NUMBER = "919567178007"

export function getWhatsAppUrl(productName: string): string {
  const text = encodeURIComponent(
    `നമസ്കാരം, എനിക്ക് ${productName} നെ കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ അറിയണം. ദയവായി എന്നെ വിളിക്കുകയോ വിവരങ്ങൾ അയച്ചുതരികയോ ചെയ്യുമോ?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export const equipments: Equipment[] = [
  {
    id: "elbow-crutches",
    nameEn: "Elbow Crutches",
    nameMl: "കൈമുട്ട് ഊന്നുവടി",
    slug: "elbow-crutches",
    image: "/images/equipments/Elbow Crutches.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Adjustable aluminium elbow crutches for walking support with comfortable hand grips.",
    shortDescMl: "നടത്തത്തിന് പിന്തുണ നൽകുന്ന ക്രമീകരിക്കാവുന്ന അലുമിനിയം കൈമുട്ട് ഊന്നുവടി.",
    patientUse: "Patients with leg injuries, fractures, post-surgery recovery, or temporary mobility issues who need support while walking but can bear partial weight.",
    patientUseMl: "കാലിന് പരിക്കേറ്റവർ, എല്ല് പൊട്ടിയവർ, ശസ്ത്രക്രിയാനന്തര ചികിത്സയിലുള്ളവർ, താൽക്കാലികമായി നടക്കാൻ ബുദ്ധിമുട്ടുള്ളവർ എന്നിവർക്ക് ഭാഗികഭാരം വഹിച്ചുകൊണ്ട് നടക്കാൻ സഹായകരം.",
    fullDescription:
      "Elbow crutches provide reliable support for individuals recovering from lower limb injuries or surgeries. Made from lightweight aluminium with ergonomic hand grips, they offer stability and comfort during the recovery phase. The height is fully adjustable to suit different user requirements. Ideal for those who need temporary or long-term walking assistance.",
    fullDescriptionMl:
      "കാലിനേറ്റ പരിക്കുകളിൽ നിന്നോ ശസ്ത്രക്രിയകളിൽ നിന്നോ സുഖം പ്രാപിക്കുന്നവർക്ക് കൈമുട്ട് ഊന്നുവടി വിശ്വസനീയമായ പിന്തുണ നൽകുന്നു. ഭാരം കുറഞ്ഞ അലുമിനിയത്തിൽ നിർമ്മിച്ച ഇവയ്ക്ക് സുഖകരമായ പിടുത്തത്തിനുള്ള ഹാൻഡ് ഗ്രിപ്പുകളുണ്ട്. ഉയരം പൂർണ്ണമായും ക്രമീകരിക്കാവുന്നതാണ്.",
    features: [
      "Lightweight aluminium body",
      "Adjustable height",
      "Comfortable foam hand grips",
      "Rubber non-slip tips",
      "Ergonomic design",
    ],
    featuresMl: [
      "ഭാരം കുറഞ്ഞ അലുമിനിയം ബോഡി",
      "ക്രമീകരിക്കാവുന്ന ഉയരം",
      "സുഖകരമായ ഫോം ഹാൻഡ് ഗ്രിപ്പ്",
      "റബ്ബർ നോൺ-സ്ലിപ്പ് ടിപ്പുകൾ",
      "എർഗണോമിക് ഡിസൈൻ",
    ],
  },
  {
    id: "commode-chair-with-wheel",
    nameEn: "Commode Chair with Wheel",
    nameMl: "ചക്രമുള്ള കമോഡ് കസേര",
    slug: "commode-chair-with-wheel",
    image: "/images/equipments/Commode Chair with Wheel.png",
    category: "Wheelchairs & Chairs",
    categoryMl: "വീൽചെയറുകളും കസേരകളും",
    shortDesc: "Wheeled commode chair with removable bed pan, ideal for elderly and bedridden patients.",
    shortDescMl: "നീക്കം ചെയ്യാവുന്ന ബെഡ് പാനോടുകൂടിയ ചക്രമുള്ള കമോഡ് കസേര.",
    patientUse: "Elderly patients, bedridden individuals, post-surgery patients who need assistance with toileting and have limited mobility. The wheels allow easy movement within the room.",
    patientUseMl: "പ്രായമായവർ, കിടപ്പിലായവർ, ശസ്ത്രക്രിയാനന്തര രോഗികൾ എന്നിവർക്ക് ടോയ്ലെറ്റ് ഉപയോഗത്തിനും എളുപ്പത്തിലുള്ള ചലനത്തിനും സഹായകമാണ്.",
    fullDescription:
      "The wheeled commode chair is designed for patients who have difficulty using a regular toilet. It features a removable bed pan for easy cleaning, comfortable armrests, and lockable wheels for safety. The chair can be placed next to the bed or wheeled to the bathroom, making it highly convenient for caregivers and patients alike.",
    fullDescriptionMl:
      "സാധാരണ ടോയ്ലെറ്റ് ഉപയോഗിക്കാൻ ബുദ്ധിമുട്ടുള്ള രോഗികൾക്കായി രൂപകൽപ്പന ചെയ്തതാണ് ചക്രമുള്ള കമോഡ് കസേര. എളുപ്പത്തിൽ വൃത്തിയാക്കാവുന്ന ബെഡ് പാനും സുഖകരമായ ആംറെസ്റ്റും ലോക്ക് ചെയ്യാവുന്ന ചക്രങ്ങളും ഇതിൽ ഉൾപ്പെടുന്നു.",
    features: [
      "Lockable swivel wheels",
      "Removable bed pan",
      "Comfortable armrests",
      "Height adjustable legs",
      "Easy to clean design",
    ],
    featuresMl: [
      "ലോക്ക് ചെയ്യാവുന്ന ചക്രങ്ങൾ",
      "നീക്കം ചെയ്യാവുന്ന ബെഡ് പാൻ",
      "സുഖകരമായ ആംറെസ്റ്റുകൾ",
      "ഉയരം ക്രമീകരിക്കാവുന്ന കാലുകൾ",
      "എളുപ്പത്തിൽ വൃത്തിയാക്കാവുന്ന ഡിസൈൻ",
    ],
  },
  {
    id: "commode-chair-normal",
    nameEn: "Commode Chair Normal",
    nameMl: "സാധാരണ കമോഡ് കസേര",
    slug: "commode-chair-normal",
    image: "/images/equipments/Commode Chair Normal.png",
    category: "Wheelchairs & Chairs",
    categoryMl: "വീൽചെയറുകളും കസേരകളും",
    shortDesc: "Portable commode chair with removable bucket for elderly and patients with limited mobility.",
    shortDescMl: "നീക്കം ചെയ്യാവുന്ന ബക്കറ്റോടുകൂടിയ പോർട്ടബിൾ കമോഡ് കസേര.",
    patientUse: "Elderly people, patients recovering from hip/knee surgery, pregnant women with mobility issues, and those who cannot access a bathroom easily.",
    patientUseMl: "പ്രായമായവർ, ഇടുപ്പ്/കാൽമുട്ട് ശസ്ത്രക്രിയയിൽ നിന്ന് സുഖം പ്രാപിക്കുന്നവർ, ഗർഭിണികൾ, എളുപ്പത്തിൽ കുളിമുറിയിൽ പോകാൻ കഴിയാത്തവർ.",
    fullDescription:
      "This portable commode chair is a practical solution for individuals with restricted mobility. It comes with a removable bucket and splash guard for hygiene. The sturdy steel frame supports significant weight and the chair can also be used as a regular chair when the bucket is removed. Ideal for home care and hospital use.",
    fullDescriptionMl:
      "നിയന്ത്രിത ചലനശേഷിയുള്ളവർക്ക് പ്രായോഗികമായ പരിഹാരമാണ് ഈ പോർട്ടബിൾ കമോഡ് കസേര. ശുചിത്വത്തിനായി നീക്കം ചെയ്യാവുന്ന ബക്കറ്റും സ്പ്ലാഷ് ഗാർഡും ഇതിലുണ്ട്. ബക്കറ്റ് നീക്കം ചെയ്താൽ സാധാരണ കസേരയായും ഉപയോഗിക്കാം.",
    features: [
      "Sturdy steel frame",
      "Removable bucket with lid",
      "Splash guard included",
      "Dual use as regular chair",
      "Easy assembly",
    ],
    featuresMl: [
      "ശക്തമായ സ്റ്റീൽ ഫ്രെയിം",
      "മൂടിയോടുകൂടിയ ബക്കറ്റ്",
      "സ്പ്ലാഷ് ഗാർഡ് ഉൾപ്പെടുന്നു",
      "സാധാരണ കസേരയായും ഉപയോഗിക്കാം",
      "എളുപ്പത്തിലുള്ള കൂട്ടിച്ചേർക്കൽ",
    ],
  },
  {
    id: "aluminium-walker",
    nameEn: "Aluminium Walker",
    nameMl: "അലുമിനിയം വാക്കർ",
    slug: "aluminium-walker",
    image: "/images/equipments/Aluminium Walker.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Lightweight aluminium walker frame for stable walking support with adjustable height.",
    shortDescMl: "സ്ഥിരതയുള്ള നടത്തത്തിന് ഭാരം കുറഞ്ഞ അലുമിനിയം വാക്കർ ഫ്രെയിം.",
    patientUse: "Elderly individuals, post-stroke patients, those with arthritis, Parkinson's disease, or anyone needing extra balance and stability while walking.",
    patientUseMl: "പ്രായമായവർ, സ്ട്രോക്കിന് ശേഷമുള്ളവർ, സന്ധിവാതമുള്ളവർ, പാർക്കിൻസൺസ് രോഗികൾ, നടക്കുമ്പോൾ കൂടുതൽ സന്തുലിതാവസ്ഥ ആവശ്യമുള്ളവർ.",
    fullDescription:
      "The aluminium walker is an essential mobility aid for those who need extra stability while walking. Made from high-grade aluminium, it is lightweight yet strong. The walker features ergonomic hand grips, non-slip rubber tips, and adjustable height settings. It folds flat for easy storage and transport.",
    fullDescriptionMl:
      "നടക്കുമ്പോൾ കൂടുതൽ സ്ഥിരത ആവശ്യമുള്ളവർക്ക് അത്യാവശ്യമായ ചലന സഹായിയാണ് അലുമിനിയം വാക്കർ. ഉയർന്ന നിലവാരമുള്ള അലുമിനിയത്തിൽ നിർമ്മിച്ച ഇത് ഭാരം കുറഞ്ഞതും ശക്തവുമാണ്. മടക്കി സൂക്ഷിക്കാവുന്നതും എളുപ്പത്തിൽ കൊണ്ടുപോകാവുന്നതുമാണ്.",
    features: [
      "Lightweight aircraft-grade aluminium",
      "Foldable for easy storage",
      "Ergonomic hand grips",
      "Non-slip rubber tips",
      "Adjustable height",
    ],
    featuresMl: [
      "ഭാരം കുറഞ്ഞ അലുമിനിയം",
      "മടക്കാവുന്ന ഡിസൈൻ",
      "എർഗണോമിക് ഹാൻഡ് ഗ്രിപ്പുകൾ",
      "സ്ലിപ്പ് ചെയ്യാത്ത റബ്ബർ ടിപ്പുകൾ",
      "ക്രമീകരിക്കാവുന്ന ഉയരം",
    ],
  },
  {
    id: "oxygen-flow-meter",
    nameEn: "Oxygen Meter / Flow Meter",
    nameMl: "ഓക്സിജൻ മീറ്റർ / ഫ്ലോ മീറ്റർ",
    slug: "oxygen-flow-meter",
    image: "/images/equipments/Oxygen  Flow Meter.png",
    category: "Oxygen & Respiratory",
    categoryMl: "ഓക്സിജനും ശ്വസന ഉപകരണങ്ങളും",
    shortDesc: "Precision oxygen flow meter for regulating oxygen delivery to patients with respiratory issues.",
    shortDescMl: "ശ്വസന പ്രശ്നങ്ങളുള്ള രോഗികൾക്ക് ഓക്സിജൻ നിയന്ത്രിക്കുന്ന കൃത്യതയുള്ള ഫ്ലോ മീറ്റർ.",
    patientUse: "Patients with COPD, asthma, pneumonia, COVID-19 recovery, or any respiratory condition requiring supplemental oxygen therapy at home or in hospital.",
    patientUseMl: "സിഒപിഡി, ആസ്ത്മ, ന്യുമോണിയ, കോവിഡ്-19 ന് ശേഷം സുഖം പ്രാപിക്കുന്നവർ, വീട്ടിലോ ആശുപത്രിയിലോ അധിക ഓക്സിജൻ ആവശ്യമുള്ള ശ്വസന രോഗികൾ.",
    fullDescription:
      "The oxygen flow meter is a medical device that controls and measures the flow of oxygen from a cylinder or concentrator to the patient. It ensures precise oxygen delivery at the prescribed rate. Features include a clear flow tube with precise markings, a control knob for adjustment, and a humidifier bottle attachment port. Essential for home oxygen therapy.",
    fullDescriptionMl:
      "ഓക്സിജൻ ഫ്ലോ മീറ്റർ ഒരു മെഡിക്കൽ ഉപകരണമാണ്, ഇത് സിലിണ്ടറിൽ നിന്നോ കോൺസൺട്രേറ്ററിൽ നിന്നോ രോഗിയിലേക്കുള്ള ഓക്സിജന്റെ ഒഴുക്ക് നിയന്ത്രിക്കുന്നു. നിർദ്ദേശിച്ച നിരക്കിൽ കൃത്യമായ ഓക്സിജൻ വിതരണം ഉറപ്പാക്കുന്നു.",
    features: [
      "Precise flow control (0-15 L/min)",
      "Clear graduated flow tube",
      "Humidifier attachment compatible",
      "Durable construction",
      "Easy to read markings",
    ],
    featuresMl: [
      "കൃത്യമായ ഫ്ലോ കൺട്രോൾ (0-15 L/min)",
      "വ്യക്തമായ അളവ് കുഴൽ",
      "ഹ്യുമിഡിഫയർ അറ്റാച്ച്മെന്റ്",
      "മോടിയുള്ള നിർമ്മാണം",
      "എളുപ്പത്തിൽ വായിക്കാവുന്ന അടയാളങ്ങൾ",
    ],
  },
  {
    id: "air-bed",
    nameEn: "Air Bed",
    nameMl: "എയർ ബെഡ് / കാറ്റ് കിടക്ക",
    slug: "air-bed",
    image: "/images/equipments/Air Bed.png",
    category: "Beds & Mattresses",
    categoryMl: "കട്ടിലുകളും മെത്തകളും",
    shortDesc: "Alternating pressure air mattress to prevent bedsores for long-term bedridden patients.",
    shortDescMl: "ദീർഘനേരം കിടപ്പിലായവർക്ക് വ്രണങ്ങൾ തടയുന്നതിനുള്ള എയർ മെത്ത.",
    patientUse: "Bedridden patients, paraplegic patients, those with spinal cord injuries, coma patients, and elderly individuals who spend extended periods in bed and are at risk of developing pressure ulcers (bedsores).",
    patientUseMl: "ദീർഘനേരം കിടപ്പിലായവർ, നട്ടെല്ലിന് പരിക്കേറ്റവർ, കോമ അവസ്ഥയിലുള്ളവർ, പ്രായമായവർ എന്നിവർക്ക് സമ്മർദ്ദ വ്രണങ്ങൾ (ബെഡ്സോർ) തടയാൻ സഹായകം.",
    fullDescription:
      "The alternating pressure air bed is specially designed to prevent and manage pressure ulcers in bedridden patients. It features alternating air cells that inflate and deflate in cycles to redistribute body pressure. The quiet pump provides continuous operation with adjustable pressure settings. The mattress cover is waterproof and easy to clean.",
    fullDescriptionMl:
      "കിടപ്പിലായ രോഗികളിൽ സമ്മർദ്ദ വ്രണങ്ങൾ തടയുന്നതിനും ചികിത്സിക്കുന്നതിനുമായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്തതാണ് എയർ ബെഡ്. ശരീര സമ്മർദ്ദം പുനർവിതരണം ചെയ്യുന്നതിനായി മാറിമാറി വീർക്കുന്നതും ചുരുങ്ങുന്നതുമായ എയർ സെല്ലുകൾ ഇതിലുണ്ട്.",
    features: [
      "Alternating pressure system",
      "Waterproof mattress cover",
      "Quiet pump operation",
      "Adjustable pressure settings",
      "Anti-bedsore design",
    ],
    featuresMl: [
      "മാറിമാറി സമ്മർദ്ദം നൽകുന്ന സംവിധാനം",
      "വാട്ടർപ്രൂഫ് കവർ",
      "നിശ്ശബ്ദമായ പമ്പ് പ്രവർത്തനം",
      "ക്രമീകരിക്കാവുന്ന മർദ്ദം",
      "വ്രണങ്ങൾ തടയുന്ന ഡിസൈൻ",
    ],
  },
  {
    id: "metal-walker-normal",
    nameEn: "Metal Walker Normal",
    nameMl: "മെറ്റൽ വാക്കർ",
    slug: "metal-walker-normal",
    image: "/images/equipments/Metal Walker Normal.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Heavy-duty metal walker with robust frame for maximum stability during walking.",
    shortDescMl: "പരമാവധി സ്ഥിരതയ്ക്കായി ശക്തമായ ഫ്രെയിമോടുകൂടിയ മെറ്റൽ വാക്കർ.",
    patientUse: "Heavier patients, those with severe balance issues, post-accident recovery patients, and individuals who need maximum support and stability. Suitable for both indoor and outdoor use.",
    patientUseMl: "കൂടുതൽ ഭാരമുള്ളവർ, കടുത്ത സന്തുലിത പ്രശ്നങ്ങളുള്ളവർ, അപകടത്തിന് ശേഷം സുഖം പ്രാപിക്കുന്നവർ എന്നിവർക്ക് പരമാവധി പിന്തുണ നൽകുന്നു.",
    fullDescription:
      "The metal walker offers superior strength and stability for those who require heavy-duty walking support. Made from high-quality steel with a corrosion-resistant finish, it provides reliable support even for bariatric patients. Features include comfort hand grips, non-slip tips, and adjustable height. The rigid frame design ensures maximum safety.",
    fullDescriptionMl:
      "കനത്ത നടത്ത പിന്തുണ ആവശ്യമുള്ളവർക്ക് മെറ്റൽ വാക്കർ മികച്ച ശക്തിയും സ്ഥിരതയും നൽകുന്നു. ഉയർന്ന നിലവാരമുള്ള സ്റ്റീലിൽ നിർമ്മിച്ച ഇത് വിശ്വസനീയമായ പിന്തുണ ഉറപ്പാക്കുന്നു. ഉയരം ക്രമീകരിക്കാവുന്നതും ദൃഢമായ ഫ്രെയിം ഡിസൈനും ഉറപ്പാക്കിയിരിക്കുന്നു.",
    features: [
      "Heavy-duty steel construction",
      "Corrosion-resistant finish",
      "Comfortable hand grips",
      "Non-slip rubber feet",
      "Adjustable height",
    ],
    featuresMl: [
      "ശക്തമായ സ്റ്റീൽ നിർമ്മാണം",
      "തുരുമ്പ് പ്രതിരോധ ഫിനിഷ്",
      "സുഖകരമായ ഹാൻഡ് ഗ്രിപ്പുകൾ",
      "സ്ലിപ്പ് ചെയ്യാത്ത റബ്ബർ പാദങ്ങൾ",
      "ക്രമീകരിക്കാവുന്ന ഉയരം",
    ],
  },
  {
    id: "four-leg-stick-quad-stick",
    nameEn: "Four Leg Stick / Quad Stick",
    nameMl: "നാലുകാലി വടി / ക്വാഡ് സ്റ്റിക്ക്",
    slug: "four-leg-stick-quad-stick",
    image: "/images/equipments/Four Leg Stick  Quad Stick.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Walking stick with four-leg base for enhanced stability and balance support.",
    shortDescMl: "മെച്ചപ്പെട്ട സന്തുലിതാവസ്ഥയ്ക്കായി നാലുകാലി അടിത്തറയുള്ള നടത്ത വടി.",
    patientUse: "Stroke survivors with hemiparesis (weakness on one side), arthritis patients, elderly individuals with balance issues, and those recovering from lower limb injuries who need more stability than a single-point cane provides.",
    patientUseMl: "സ്ട്രോക്ക് ബാധിച്ചവർ, സന്ധിവാതമുള്ളവർ, സന്തുലിത പ്രശ്നങ്ങളുള്ള പ്രായമായവർ, ഒറ്റ വടിയേക്കാൾ കൂടുതൽ സ്ഥിരത ആവശ്യമുള്ളവർ.",
    fullDescription:
      "The four-leg stick (quad stick) provides a wider base of support compared to a standard walking stick, offering enhanced stability. The four-point base ensures the stick remains upright even when not in use. The height is adjustable and the ergonomic handle reduces hand fatigue. An excellent choice for those transitioning from a walker to a cane.",
    fullDescriptionMl:
      "സാധാരണ നടത്ത വടിയുമായി താരതമ്യപ്പെടുത്തുമ്പോൾ നാലുകാലി വടി കൂടുതൽ വിശാലമായ പിന്തുണ നൽകുന്നു. നാല് പോയിന്റുള്ള അടിത്തറ വടി നിവർന്നു നിൽക്കാൻ സഹായിക്കുന്നു. ഉയരം ക്രമീകരിക്കാവുന്നതും എർഗണോമിക് ഹാൻഡിൽ കൈ ക്ഷീണം കുറയ്ക്കുന്നതുമാണ്.",
    features: [
      "Four-point stable base",
      "Adjustable height",
      "Ergonomic curved handle",
      "Non-slip rubber ferrules",
      "Lightweight design",
    ],
    featuresMl: [
      "നാല് പോയിന്റ് സ്ഥിരമായ അടിത്തറ",
      "ക്രമീകരിക്കാവുന്ന ഉയരം",
      "എർഗണോമിക് ഹാൻഡിൽ",
      "സ്ലിപ്പ് ചെയ്യാത്ത റബ്ബർ അറ്റങ്ങൾ",
      "ഭാരം കുറഞ്ഞ ഡിസൈൻ",
    ],
  },
  {
    id: "walking-stick-model",
    nameEn: "Walking Stick Model",
    nameMl: "നടത്ത വടി",
    slug: "walking-stick-model",
    image: "/images/equipments/Walking Stick Model.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Classic wooden walking stick with curved handle for everyday walking support.",
    shortDescMl: "ദൈനംദിന നടത്തത്തിന് വളഞ്ഞ ഹാൻഡിലുള്ള ക്ലാസിക് മരം നടത്ത വടി.",
    patientUse: "Elderly individuals who need minimal support while walking, people with mild arthritis, and those who feel more confident with a walking stick. Also used as a fashion accessory and for postural support.",
    patientUseMl: "നടക്കുമ്പോൾ കുറഞ്ഞ പിന്തുണ മാത്രം ആവശ്യമുള്ളവർ, നേരിയ സന്ധിവാതമുള്ളവർ, നടത്ത വടിയുടെ സഹായത്തോടെ കൂടുതൽ ആത്മവിശ്വാസമുള്ളവർ.",
    fullDescription:
      "This classic walking stick combines traditional elegance with practical functionality. Made from quality wood with a smooth polished finish, it features a curved crook handle for comfortable grip. The metal shaft provides durability while maintaining a classic appearance. Comes with a rubber ferrule for safe, non-slip contact with the ground.",
    fullDescriptionMl:
      "ക്ലാസിക് നടത്ത വടി പാരമ്പര്യ ചാരുതയെ പ്രായോഗിക പ്രവർത്തനവുമായി സംയോജിപ്പിക്കുന്നു. മിനുസമാർന്ന പോളിഷ് ഫിനിഷുള്ള മരത്തിൽ നിർമ്മിച്ച ഇതിന് സുഖകരമായ പിടുത്തത്തിന് വളഞ്ഞ ഹാൻഡിൽ ഉണ്ട്. സുരക്ഷിതമായ ഉപയോഗത്തിന് റബ്ബർ ഫെറൂൾ ഉൾപ്പെടുന്നു.",
    features: [
      "Quality wood construction",
      "Polished smooth finish",
      "Curved crook handle",
      "Metal shaft reinforcement",
      "Rubber non-slip ferrule",
    ],
    featuresMl: [
      "നല്ല നിലവാരമുള്ള മര നിർമ്മാണം",
      "മിനുസമാർന്ന ഫിനിഷ്",
      "വളഞ്ഞ ഹാൻഡിൽ",
      "മെറ്റൽ ഷാഫ്റ്റ്",
      "സ്ലിപ്പ് ചെയ്യാത്ത റബ്ബർ അറ്റം",
    ],
  },
  {
    id: "one-cane-stick",
    nameEn: "One Cane Stick",
    nameMl: "ഒറ്റ വടി / ചൂരൽ വടി",
    slug: "one-cane-stick",
    image: "/images/equipments/One Cane Stick.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Adjustable aluminium walking cane with ergonomic handle for light support.",
    shortDescMl: "കുറഞ്ഞ പിന്തുണയ്ക്കായി ക്രമീകരിക്കാവുന്ന അലുമിനിയം നടത്ത വടി.",
    patientUse: "Individuals with minor injuries, post-surgery recovery patients, elderly with mild balance issues, and those who need a single-point support for added confidence while walking.",
    patientUseMl: "നേരിയ പരിക്കുകളുള്ളവർ, ശസ്ത്രക്രിയാനന്തര രോഗികൾ, നേരിയ സന്തുലിത പ്രശ്നങ്ങളുള്ള പ്രായമായവർ എന്നിവർക്ക് അനുയോജ്യം.",
    fullDescription:
      "The one cane stick is a simple yet effective mobility aid for those who need light walking support. Made from lightweight aluminium with an adjustable height mechanism, it features a comfortable ergonomic handle. The cane has a non-slip rubber tip for safety and can be easily stored when not in use. Available in various colors and designs.",
    fullDescriptionMl:
      "കുറഞ്ഞ നടത്ത പിന്തുണ ആവശ്യമുള്ളവർക്ക് ലളിതവും ഫലപ്രദവുമായ ചലന സഹായിയാണ് ഒറ്റ വടി. ഭാരം കുറഞ്ഞ അലുമിനിയത്തിൽ നിർമ്മിച്ച ഇതിന് സുഖകരമായ എർഗണോമിക് ഹാൻഡിൽ ഉണ്ട്. സുരക്ഷയ്ക്കായി സ്ലിപ്പ് ചെയ്യാത്ത റബ്ബർ ടിപ്പും ഉൾപ്പെടുന്നു.",
    features: [
      "Lightweight aluminium",
      "Ergonomic handle",
      "Adjustable height",
      "Non-slip rubber tip",
      "Variety of designs available",
    ],
    featuresMl: [
      "ഭാരം കുറഞ്ഞ അലുമിനിയം",
      "എർഗണോമിക് ഹാൻഡിൽ",
      "ക്രമീകരിക്കാവുന്ന ഉയരം",
      "സ്ലിപ്പ് ചെയ്യാത്ത റബ്ബർ അറ്റം",
      "വിവിധ ഡിസൈനുകൾ ലഭ്യം",
    ],
  },
  {
    id: "wheel-chair-basic",
    nameEn: "Wheel Chair Basic",
    nameMl: "അടിസ്ഥാന വീൽചെയർ",
    slug: "wheel-chair-basic",
    image: "/images/equipments/Wheel Chair Basic.png",
    category: "Wheelchairs & Chairs",
    categoryMl: "വീൽചെയറുകളും കസേരകളും",
    shortDesc: "Standard manual wheelchair with padded seat for daily mobility needs.",
    shortDescMl: "ദൈനംദിന ചലന ആവശ്യങ്ങൾക്കായി പാഡഡ് സീറ്റോടുകൂടിയ സ്റ്റാൻഡേർഡ് മാനുവൽ വീൽചെയർ.",
    patientUse: "Individuals with permanent or temporary mobility impairments, paraplegic patients, elderly with limited walking ability, and those recovering from leg surgeries who cannot bear weight on their legs.",
    patientUseMl: "സ്ഥിരമോ താൽക്കാലികമോ ആയ ചലന പ്രശ്നങ്ങളുള്ളവർ, നട്ടെല്ല് രോഗികൾ, നടക്കാൻ ബുദ്ധിമുട്ടുള്ള പ്രായമായവർ, കാലിന് ശസ്ത്രക്രിയ കഴിഞ്ഞവർ.",
    fullDescription:
      "The basic wheelchair provides essential mobility for individuals who cannot walk or have difficulty walking. It features a durable steel frame, comfortable padded upholstery, removable armrests, swing-away footrests, and large rear wheels with push rims for self-propulsion. The wheelchair folds for easy transport and storage.",
    fullDescriptionMl:
      "നടക്കാൻ കഴിയാത്തതോ ബുദ്ധിമുട്ടുള്ളതോ ആയവർക്ക് അടിസ്ഥാന വീൽചെയർ അവശ്യ ചലന സഹായം നൽകുന്നു. മോടിയുള്ള സ്റ്റീൽ ഫ്രെയിം, സുഖകരമായ അപ്ഹോൾസ്റ്ററി, നീക്കം ചെയ്യാവുന്ന ആംറെസ്റ്റുകൾ, ഫോൾഡബിൾ ഡിസൈൻ എന്നിവ ഇതിലുണ്ട്.",
    features: [
      "Durable steel frame",
      "Padded upholstered seat",
      "Removable armrests",
      "Swing-away footrests",
      "Folds for storage",
    ],
    featuresMl: [
      "മോടിയുള്ള സ്റ്റീൽ ഫ്രെയിം",
      "പാഡഡ് അപ്ഹോൾസ്റ്ററി സീറ്റ്",
      "നീക്കം ചെയ്യാവുന്ന ആംറെസ്റ്റുകൾ",
      "ഫുട്ട് റെസ്റ്റുകൾ",
      "മടക്കി സൂക്ഷിക്കാം",
    ],
  },
  {
    id: "cot-bed",
    nameEn: "Cot / Bed",
    nameMl: "കട്ടിൽ / ബെഡ്",
    slug: "cot-bed",
    image: "/images/equipments/Cot Bed.png",
    category: "Beds & Mattresses",
    categoryMl: "കട്ടിലുകളും മെത്തകളും",
    shortDesc: "Standard hospital cot with adjustable side rails for patient comfort and safety.",
    shortDescMl: "രോഗിയുടെ സുഖത്തിനും സുരക്ഷയ്ക്കും ക്രമീകരിക്കാവുന്ന സൈഡ് റെയിലുകളുള്ള സ്റ്റാൻഡേർഡ് ഹോസ്പിറ്റൽ കട്ടിൽ.",
    patientUse: "Patients who need a comfortable bed at home during recovery, elderly who have difficulty getting in and out of bed, post-surgery patients, and those who need to be in a semi-reclined position.",
    patientUseMl: "സുഖം പ്രാപിക്കുന്ന സമയത്ത് വീട്ടിൽ സുഖകരമായ കട്ടിൽ ആവശ്യമുള്ളവർ, കിടക്കയിൽ കയറാനും ഇറങ്ങാനും ബുദ്ധിമുട്ടുള്ളവർ, ശസ്ത്രക്രിയാനന്തര രോഗികൾ.",
    fullDescription:
      "This hospital-grade cot bed provides a safe and comfortable resting surface for patients. It features adjustable side rails for safety, a durable frame with strong weight capacity, and a comfortable mattress. The bed is easy to assemble and move. Suitable for both home care and hospital environments.",
    fullDescriptionMl:
      "ഈ ഹോസ്പിറ്റൽ ഗ്രേഡ് കട്ടിൽ രോഗികൾക്ക് സുരക്ഷിതവും സുഖകരവുമായ വിശ്രമ ഇടം നൽകുന്നു. സുരക്ഷയ്ക്കായി ക്രമീകരിക്കാവുന്ന സൈഡ് റെയിലുകളും ശക്തമായ ഫ്രെയിമും സുഖകരമായ മെത്തയും ഇതിലുണ്ട്.",
    features: [
      "Adjustable side rails",
      "Strong steel frame",
      "Comfortable mattress included",
      "Easy assembly",
      "Wheel casters for mobility",
    ],
    featuresMl: [
      "ക്രമീകരിക്കാവുന്ന സൈഡ് റെയിലുകൾ",
      "ശക്തമായ സ്റ്റീൽ ഫ്രെയിം",
      "സുഖകരമായ മെത്ത",
      "എളുപ്പത്തിലുള്ള കൂട്ടിച്ചേർക്കൽ",
      "ചലനത്തിനായി ചക്രങ്ങൾ",
    ],
  },
  {
    id: "fiber-chair",
    nameEn: "Fiber Chair",
    nameMl: "ഫൈബർ കസേര",
    slug: "fiber-chair",
    image: "/images/equipments/Fiber Chair.png",
    category: "Wheelchairs & Chairs",
    categoryMl: "വീൽചെയറുകളും കസേരകളും",
    shortDesc: "Lightweight molded fiber chair for comfortable and portable patient seating.",
    shortDescMl: "രോഗികൾക്ക് സുഖകരവും പോർട്ടബിൾ ഇരിപ്പിടവുമായ ഭാരം കുറഞ്ഞ ഫൈബർ കസേര.",
    patientUse: "Patients who need a lightweight, portable seating option. Ideal for use in bathrooms, near the bed, or during travel. Suitable for elderly and those with limited mobility who need a stable chair.",
    patientUseMl: "ഭാരം കുറഞ്ഞ പോർട്ടബിൾ ഇരിപ്പിടം ആവശ്യമുള്ളവർ. കുളിമുറിയിലും കിടക്കയ്ക്ക് സമീപവും യാത്രയിലും ഉപയോഗിക്കാം.",
    fullDescription:
      "The fiber chair is a versatile and lightweight seating solution for patients. Made from high-strength molded fiberglass, it is both durable and easy to move. The chair features a contoured seat for comfort, drainage holes for bathroom use, and a sturdy construction that supports significant weight. Easy to clean and maintain.",
    fullDescriptionMl:
      "രോഗികൾക്ക് വൈവിധ്യമാർന്നതും ഭാരം കുറഞ്ഞതുമായ ഇരിപ്പിട പരിഹാരമാണ് ഫൈബർ കസേര. ഉയർന്ന ശക്തിയുള്ള മോൾഡഡ് ഫൈബർഗ്ലാസിൽ നിർമ്മിച്ച ഇത് മോടിയുള്ളതും എളുപ്പത്തിൽ നീക്കാൻ പറ്റുന്നതുമാണ്. എളുപ്പത്തിൽ വൃത്തിയാക്കാവുന്നതും പരിപാലിക്കാവുന്നതുമാണ്.",
    features: [
      "High-strength fiberglass",
      "Lightweight and portable",
      "Contoured comfort seat",
      "Drainage holes for wet areas",
      "Easy to clean surface",
    ],
    featuresMl: [
      "ഉയർന്ന ശക്തിയുള്ള ഫൈബർഗ്ലാസ്",
      "ഭാരം കുറഞ്ഞതും പോർട്ടബിളും",
      "സുഖകരമായ സീറ്റ്",
      "വെള്ളം വാർന്നുപോകാനുള്ള ദ്വാരങ്ങൾ",
      "എളുപ്പത്തിൽ വൃത്തിയാക്കാം",
    ],
  },
  {
    id: "wheel-chair-commode",
    nameEn: "Wheel Chair & Commode",
    nameMl: "വീൽചെയറും കമോഡും",
    slug: "wheel-chair-commode",
    image: "/images/equipments/Wheel Chair & Commode.png",
    category: "Wheelchairs & Chairs",
    categoryMl: "വീൽചെയറുകളും കസേരകളും",
    shortDesc: "2-in-1 wheelchair that converts into a commode chair with removable pan.",
    shortDescMl: "നീക്കം ചെയ്യാവുന്ന പാനോടുകൂടി കമോഡ് ആയി മാറ്റാവുന്ന 2-ഇൻ-1 വീൽചെയർ.",
    patientUse: "Patients who need both mobility assistance and toileting support. Ideal for caregivers who want to minimize transfers, reducing strain on both patient and caregiver. Perfect for bedridden or wheelchair-bound individuals.",
    patientUseMl: "ചലന സഹായവും ടോയ്ലെറ്റ് പിന്തുണയും ആവശ്യമുള്ള രോഗികൾ. രോഗിയെ മാറ്റിക്കൊണ്ടിരിക്കേണ്ട ആവശ്യം കുറച്ച്, പരിചരിക്കുന്നവർക്കും രോഗികൾക്കും ആശ്വാസം നൽകുന്നു.",
    fullDescription:
      "This innovative 2-in-1 wheelchair cum commode eliminates the need for transferring patients between a wheelchair and commode. It functions as a regular wheelchair for mobility, and converts to a commode with a removable pan when needed. Features include comfortable padding, lockable wheels, and a sturdy frame. A must-have for efficient patient care.",
    fullDescriptionMl:
      "വീൽചെയറും കമോഡും തമ്മിൽ രോഗിയെ മാറ്റേണ്ട ആവശ്യം ഇല്ലാതാക്കുന്ന നൂതനമായ 2-ഇൻ-1 ഉപകരണം. ചലനത്തിന് സാധാരണ വീൽചെയറായും ആവശ്യമുള്ളപ്പോൾ കമോഡായും പ്രവർത്തിക്കുന്നു. കാര്യക്ഷമമായ രോഗി പരിചരണത്തിന് അത്യാവശ്യം.",
    features: [
      "2-in-1 wheelchair & commode",
      "Removable bed pan",
      "Comfortable padded seat",
      "Lockable rear wheels",
      "Dual-purpose design",
    ],
    featuresMl: [
      "2-ഇൻ-1 വീൽചെയറും കമോഡും",
      "നീക്കം ചെയ്യാവുന്ന ബെഡ് പാൻ",
      "സുഖകരമായ പാഡഡ് സീറ്റ്",
      "ലോക്ക് ചെയ്യാവുന്ന ചക്രങ്ങൾ",
      "ഇരട്ട ഉപയോഗ ഡിസൈൻ",
    ],
  },
  {
    id: "aluminium-walker-foldable",
    nameEn: "Aluminium Walker Foldable",
    nameMl: "മടക്കാവുന്ന അലുമിനിയം വാക്കർ",
    slug: "aluminium-walker-foldable",
    image: "/images/equipments/Aluminium Walker Foldable.png",
    category: "Walking Aids",
    categoryMl: "നടത്ത സഹായികൾ",
    shortDesc: "Foldable aluminium walker for easy storage, travel, and convenient walking support.",
    shortDescMl: "എളുപ്പത്തിൽ സൂക്ഷിക്കാനും യാത്ര ചെയ്യാനും പറ്റിയ മടക്കാവുന്ന അലുമിനിയം വാക്കർ.",
    patientUse: "Active seniors who need support but want a walker that fits in a car trunk, travelers with mobility issues, and those with limited storage space at home. Also used for temporary post-surgery recovery.",
    patientUseMl: "പിന്തുണ ആവശ്യമുള്ളതും എന്നാൽ കാറിൽ കൊണ്ടുപോകാവുന്ന വാക്കർ ആഗ്രഹിക്കുന്നതുമായവർ, ചലന പ്രശ്നങ്ങളുള്ള യാത്രക്കാർ, ശസ്ത്രക്രിയാനന്തര സുഖപ്പെടുന്നവർ.",
    fullDescription:
      "The foldable aluminium walker combines the lightweight benefits of aluminium with the convenience of a folding mechanism. It easily folds flat for storage in tight spaces or transport in a vehicle. Despite its foldability, it maintains excellent stability and weight capacity. Features include ergonomic grips, non-slip tips, and quick-adjust height settings.",
    fullDescriptionMl:
      "മടക്കാവുന്ന അലുമിനിയം വാക്കർ ഭാരം കുറഞ്ഞ അലുമിനിയത്തിന്റെ ഗുണങ്ങളെ മടക്കാനുള്ള സൗകര്യവുമായി സംയോജിപ്പിക്കുന്നു. എളുപ്പത്തിൽ മടക്കി ചെറിയ സ്ഥലങ്ങളിൽ സൂക്ഷിക്കാം. മികച്ച സ്ഥിരതയും ഭാരശേഷിയും നിലനിർത്തുന്നു.",
    features: [
      "Foldable design",
      "Lightweight aluminium",
      "Quick-adjust height",
      "Ergonomic hand grips",
      "Includes carry bag",
    ],
    featuresMl: [
      "മടക്കാവുന്ന ഡിസൈൻ",
      "ഭാരം കുറഞ്ഞ അലുമിനിയം",
      "വേഗത്തിൽ ഉയരം ക്രമീകരിക്കാം",
      "എർഗണോമിക് ഹാൻഡ് ഗ്രിപ്പുകൾ",
      "കാരി ബാഗ് ഉൾപ്പെടുന്നു",
    ],
  },
  {
    id: "fowler-cot-semi-fowler-cot-adult",
    nameEn: "Fowler Cot / Semi Fowler Cot Adult",
    nameMl: "ഫൗളർ കട്ടിൽ / സെമി ഫൗളർ കട്ടിൽ (മുതിർന്നവർ)",
    slug: "fowler-cot-semi-fowler-cot-adult",
    image: "/images/equipments/Fowler Cot Semi Fowler Cot Adult.png",
    category: "Beds & Mattresses",
    categoryMl: "കട്ടിലുകളും മെത്തകളും",
    shortDesc: "Adjustable backrest cot for semi-reclined positioning to aid breathing and comfort.",
    shortDescMl: "ശ്വസനത്തിനും സുഖത്തിനും സഹായകമായി പിന്നിലെ ഭാഗം ഉയർത്താവുന്ന കട്ടിൽ.",
    patientUse: "Patients with respiratory conditions (COPD, asthma) who need to sleep in an elevated position, post-surgery patients, those with acid reflux, heart conditions, and elderly who have difficulty lying flat.",
    patientUseMl: "ശ്വസന പ്രശ്നങ്ങളുള്ളവർ (സിഒപിഡി, ആസ്ത്മ), ശസ്ത്രക്രിയാനന്തര രോഗികൾ, ആസിഡ് റിഫ്ലക്സ്, ഹൃദ്രോഗികൾ, നിവർന്നു കിടക്കാൻ ബുദ്ധിമുട്ടുള്ള പ്രായമായവർ.",
    fullDescription:
      "The Fowler cot features an adjustable backrest that allows patients to sit up in bed comfortably. It can be positioned at various angles from flat to fully upright (Fowler position). This is particularly beneficial for patients with breathing difficulties, feeding needs, or those who need to be in a semi-upright position for medical reasons. The cot is sturdy, easy to clean, and designed for long-term use.",
    fullDescriptionMl:
      "ഫൗളർ കട്ടിലിൽ രോഗികൾക്ക് കട്ടിലിൽ എഴുന്നേറ്റിരിക്കാൻ സഹായിക്കുന്ന ക്രമീകരിക്കാവുന്ന ബാക്ക്റെസ്റ്റ് ഉണ്ട്. പരന്നത് മുതൽ പൂർണ്ണമായും എഴുന്നേറ്റിരിക്കുന്ന സ്ഥാനം വരെ വിവിധ കോണുകളിൽ ക്രമീകരിക്കാം. ശ്വസന ബുദ്ധിമുട്ടുള്ളവർക്കും വൈദ്യശാസ്ത്രപരമായ കാരണങ്ങളാൽ അർദ്ധ-എഴുന്നേറ്റ സ്ഥാനത്ത് ആയിരിക്കേണ്ടവർക്കും പ്രത്യേകിച്ചും ഗുണകരം.",
    features: [
      "Adjustable backrest angle",
      "Multiple lockable positions",
      "Strong and stable frame",
      "Easy to clean surface",
      "Suitable for long-term use",
    ],
    featuresMl: [
      "ക്രമീകരിക്കാവുന്ന ബാക്ക്റെസ്റ്റ് കോൺ",
      "ഒന്നിലധികം ലോക്ക് ചെയ്യാവുന്ന സ്ഥാനങ്ങൾ",
      "ശക്തവും സ്ഥിരവുമായ ഫ്രെയിം",
      "എളുപ്പത്തിൽ വൃത്തിയാക്കാം",
      "ദീർഘകാല ഉപയോഗത്തിന് പറ്റിയത്",
    ],
  },
  {
    id: "oxygen-cylinder",
    nameEn: "Oxygen Cylinder",
    nameMl: "ഓക്സിജൻ സിലിണ്ടർ",
    slug: "oxygen-cylinder",
    image: "/images/equipments/Oxygen Cylinder.png",
    category: "Oxygen & Respiratory",
    categoryMl: "ഓക്സിജനും ശ്വസന ഉപകരണങ്ങളും",
    shortDesc: "Portable oxygen cylinder with regulator for emergency and home oxygen therapy.",
    shortDescMl: "അടിയന്തരവും വീട്ടിലെയും ഓക്സിജൻ തെറാപ്പിക്കായി റെഗുലേറ്ററോടുകൂടിയ പോർട്ടബിൾ ഓക്സിജൻ സിലിണ്ടർ.",
    patientUse: "Patients with chronic respiratory diseases (COPD, emphysema), COVID-19 recovery patients, those with low oxygen saturation, emergency use, and home oxygen therapy patients who need a reliable oxygen supply.",
    patientUseMl: "വിട്ടുമാറാത്ത ശ്വസന രോഗങ്ങളുള്ളവർ (സിഒപിഡി, എംഫിസീമ), കോവിഡ് രോഗികൾ, കുറഞ്ഞ ഓക്സിജൻ സാച്ചുറേഷൻ ഉള്ളവർ, അടിയന്തരാവസ്ഥകൾ, വീട്ടിലെ ഓക്സിജൻ തെറാപ്പിക്ക്.",
    fullDescription:
      "Medical oxygen cylinders provide a reliable source of supplemental oxygen for patients with respiratory conditions. Available in various sizes (D, E, types) for different usage durations. Each cylinder comes with a pressure regulator and flow meter for precise oxygen delivery. Safety-tested and certified for medical use. Refilling and exchange services available.",
    fullDescriptionMl:
      "മെഡിക്കൽ ഓക്സിജൻ സിലിണ്ടറുകൾ ശ്വസന രോഗങ്ങളുള്ള രോഗികൾക്ക് വിശ്വസനീയമായ അധിക ഓക്സിജൻ ഉറവിടം നൽകുന്നു. വ്യത്യസ്ത ഉപയോഗ ദൈർഘ്യത്തിനായി വിവിധ വലുപ്പങ്ങളിൽ ലഭ്യമാണ്. ഓരോ സിലിണ്ടറും കൃത്യമായ ഓക്സിജൻ വിതരണത്തിനായി പ്രഷർ റെഗുലേറ്ററും ഫ്ലോ മീറ്ററും ഉൾപ്പെടുന്നു.",
    features: [
      "Medical-grade oxygen cylinder",
      "Pressure regulator included",
      "Various sizes available",
      "Safety certified",
      "Refill service available",
    ],
    featuresMl: [
      "മെഡിക്കൽ ഗ്രേഡ് ഓക്സിജൻ സിലിണ്ടർ",
      "പ്രഷർ റെഗുലേറ്റർ ഉൾപ്പെടുന്നു",
      "വിവിധ വലുപ്പങ്ങളിൽ ലഭ്യം",
      "സുരക്ഷാ സർട്ടിഫൈഡ്",
      "റീഫിൽ സേവനം ലഭ്യം",
    ],
  },
]

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipments.find((eq) => eq.slug === slug)
}

export const categories = Array.from(new Set(equipments.map((eq) => eq.category)))
export const categoriesMl: Record<string, string> = {}
equipments.forEach((eq) => {
  categoriesMl[eq.category] = eq.categoryMl
})
