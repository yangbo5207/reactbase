'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const navs = [
    ['Home', ''],
    ['Features', 'features'],
    ['Reviews', 'reviews'],
    ['Pricing', 'pricing'],
    ['FAQs', 'faqs'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={`/src/app/next/(link)/11.routerx/${href}`}
      scroll={false}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))

  return (
    <div className='flex gap-10'>
      {navs}
    </div>
  )
}