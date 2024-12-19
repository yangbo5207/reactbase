'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from './input'

export default function App() {
  const [rotate, setRotate] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <div className='flex items-center'>
      <div className='flex-1'>
        <motion.div
          className='box w-32 h-32 rounded-2xl border-red-500 border-4 border-dashed'
          animate={{ x, y, rotate }}
          transition={{ type: 'spring' }}
        />
      </div>
      <div className="flex flex-col w-64  space-y-4">
        <Input value={x} max={100} min={0} set={setX}>x</Input>
        <Input value={y}  max={100} min={-100} set={setY}>y</Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>rotate</Input>
      </div>
    </div>
  );
}
