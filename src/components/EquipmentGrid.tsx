"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { equipments, categories, categoriesMl } from "@/lib/equipments"
import EquipmentCard from "@/components/EquipmentCard"

export default function EquipmentGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const allLabel = "എല്ലാം"
  const allCategoryKey = "All"

  const filtered = equipments.filter((eq) => {
    const matchesCategory = activeCategory === allCategoryKey || eq.category === activeCategory
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      eq.nameMl.includes(q) ||
      eq.nameEn.toLowerCase().includes(q) ||
      eq.shortDescMl.includes(q) ||
      eq.categoryMl.includes(q)
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="ഉപകരണങ്ങൾ തിരയുക..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-2xl border border-gray-200 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1CA3D8]/30 focus:border-[#1CA3D8] transition-all"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(allCategoryKey)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === allCategoryKey
              ? "bg-[#1CA3D8] text-white shadow-md shadow-[#1CA3D8]/20"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#1CA3D8] text-white shadow-md shadow-[#1CA3D8]/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {categoriesMl[cat]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <Filter className="size-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">ഈ വിഭാഗത്തിൽ ഉപകരണങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല</p>
            <p className="text-gray-400 text-sm mt-1">മറ്റൊരു വിഭാഗം തിരഞ്ഞെടുക്കുക</p>
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((eq, i) => (
              <EquipmentCard key={eq.id} equipment={eq} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
