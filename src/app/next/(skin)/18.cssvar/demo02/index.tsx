'use client'

import {useState} from 'react'
import {Switch} from '@/components/ui/switch'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import Link from 'next/link'
import './index.css'

export default function Demo() {
  const [theme, setTheme] = useState('light')
  function __change(value: boolean) {
    setTheme(value ? 'dark' : 'light')
  }

  return (
    <div className={`skin_demo2 ${theme}`}>
      <div className='flex justify-between items-center'>
        <h3>JavaScript 核心进阶</h3>
        <div className="flex items-center space-x-2">
          <Switch onCheckedChange={__change} />
          <Label htmlFor="airplane-mode" className='dark:text-gray-200'>dark mode</Label>
        </div>
      </div>

      <p>这是一本从帮助读者构建基础知识体系出发，紧抓核心内容，深入底层原理，帮助读者突破基础瓶颈，编码能力更上一层楼</p>
      <p>每个人都需要一个地道的前端进阶思维。《JavaScript 核心进阶》以此作为目标，在学习方法上做了很多思考和提炼，从大量繁杂的知识海洋中，凝练出关键脉络，从理论结合实践的角度为大家呈现进阶的知识体系。</p>
      <p>... ...</p>
      <div className='flex justify-end border-t pt-4 space-x-4 dark:border-gray-500'>
        <Button variant='secondary' size='lg'>
          <a href='https://xinyuzone.cn/column/1818097927437131776' target='_blank'>了解详情</a>
        </Button>
        <Button variant='destructive' size='lg'>
          <a href='https://xinyuzone.cn/column/1818097927437131776' target='_blank'>点击购买</a>
        </Button>
      </div>
    </div>
  )
}
