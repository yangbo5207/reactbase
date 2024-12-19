'use client'

import {SquareActivity, MousePointerClick, MonitorPlay, RotateCw} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import './index.css'

export default function Index(props: any) {
  const [refresh, setRefresh] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    !refresh && setRefresh(true)
  }, [refresh]);

  useEffect(() => {
    if (ref.current) {
      const h = ref.current.getBoundingClientRect().height
      ref.current.style.height = `${h}px`
    }
  }, []);

  return (
    <div className='preview my-6 border rounded border-gray-200 dark:border-gray-700 overflow-hidden'>
      <header className='px-3 py-3 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <MonitorPlay size='20px' />
          <span>Preview</span>
        </div>
        <div>
          <Link href='https://usehook.cn/'>
            <MousePointerClick size='20px' />
          </Link>
        </div>
      </header>
      <div className='px-4 py-8' ref={ref}>
        {refresh ? props.children : null}
      </div>
      <footer className='px-3 py-2 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <SquareActivity size='20px' />
          <span>{props.desc || 'base demo'}</span>
        </div>
        <div>
          <Button size='icon' variant='destructive' onClick={() => {setRefresh(false)}}>
            <RotateCw />
          </Button>
        </div>
      </footer>
    </div>
  )
}
