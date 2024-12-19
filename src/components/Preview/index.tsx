import './index.css'

import {SquareActivity, MousePointerClick} from 'lucide-react'
import Link from 'next/link'

export default function Index(props: any) {
  return (
    <div className='preview my-6 border rounded border-gray-200 dark:border-gray-700 overflow-hidden'>
      <header className='px-3 py-3 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <SquareActivity />
          <span>Preview</span>
        </div>
        <div>
          <Link href='https://usehook.cn/'>
            <MousePointerClick />
          </Link>
        </div>
      </header>
      <div className='px-4 py-8'>
        {props.children}
      </div>
    </div>
  )
}
