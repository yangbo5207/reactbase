'use client'

import {useState} from 'react'
import {Slider} from '@/components/ui/slider'
import Link from 'next/link'

export default function Demo() {
  const [width, setWidth] = useState(100)
  function __change(value: number[]) {
    setWidth(value[0])
  }

  return (
    <div className='skin_demo1' style={{'--c-width': `${width}px`} as any}>
      <div className='flex justify-between'>
        <div
          className='bg-gray-300 h-20 mb-8 rounded-lg'
          style={{width: `var(--c-width)`}}
        ></div>
        <div
          className='bg-gray-300 h-20 mb-8 rounded-lg'
          style={{width: `var(--c-width)`}}
        ></div>
      </div>

      <Slider
        className='w-64 mx-auto'
        defaultValue={[100]}
        min={100}
        max={200}
        step={1}
        onValueChange={__change}
      />
    </div>
  )
}
