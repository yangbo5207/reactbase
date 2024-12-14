'use client'

import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'

export default function Demo() {
  const router = useRouter()

  function __clickHandler() {
    router.push('/')
  }

  return (
    <div className='space-x-2'>
      <Button variant='secondary' onClick={__clickHandler}>跳转到首页</Button>
    </div>
  )
}
