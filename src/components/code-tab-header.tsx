'use client'

import { RawCode } from 'codehike/code'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeTitle } from './code'
import { AnimatePresence, motion } from 'framer-motion'
import {useState, useRef} from 'react'

export function CodeTabHeader(props: { tabs: RawCode[] }) {
  const { tabs } = props
  const [hover, setHover] = useState<number | null>(null)
  let timeoutRef = useRef<any>(null)

  function _mouseenter(i: number) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    setHover(i)
  }

  function _mouseleave(i: number) {
    timeoutRef.current = window.setTimeout(() => {
      setHover(null)
    }, 200)
  }

  return (
    <div className='border-b py-1 border-gray-200 dark:border-gray-700' style={{ backgroundColor: 'var(--ch-code-header-bg)'} as any}>
      <TabsList style={{backgroundColor: 'var(--ch-code-header-bg)'} as any}>
        {tabs.map((tab, i) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            onMouseEnter={() => _mouseenter(i)}
            onMouseLeave={() => _mouseleave(i)}
            className="relative text-sm transition-colors delay-150 hover:delay-0"
          >
            <AnimatePresence>
              {hover === i && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-gray-800"
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
            <CodeTitle meta={tab.meta} />
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
