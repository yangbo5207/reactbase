import { motion } from 'framer-motion'
import {useState, useEffect} from 'react'
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs'
import './index.css'

export default function App() {
  const [position, setPosition] = useState('start')

  function __change(v: string) {
    setPosition(v)
  }

  return (
    <div className=''>
      <motion.div className='base_demo03' style={{ justifyContent: position }} layout>
        <motion.div className='item' layout>A1</motion.div>
        <motion.div className='item' layout>A2</motion.div>
        <motion.div className='item' layout>A3</motion.div>
      </motion.div>
      <div className='mt-4 text-center'>
        <Tabs onValueChange={__change}>
          <TabsList>
            <TabsTrigger value='start'>start</TabsTrigger>
            <TabsTrigger value='center'>center</TabsTrigger>
            <TabsTrigger value='end'>end</TabsTrigger>
            <TabsTrigger value='space-around'>space-around</TabsTrigger>
            <TabsTrigger value='space-between'>space-between</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
