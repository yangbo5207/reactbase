'use client'

import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import Link from 'next/link'

export default function Demo() {
  const router = useRouter()

  function __clickHandler() {
    router.push('/')
  }

  return (
    <div className='space-x-2'>
      <Button variant='secondary' onClick={__clickHandler}>跳转到首页</Button>
      {/*<Link href='/user?id=123456'>About</Link>*/}
      {/*<Link*/}
      {/*  href={{*/}
      {/*    pathname: '/user',*/}
      {/*    query: {id: '123456'}*/}
      {/*  }}*/}
      {/*>*/}
      {/*  About*/}
      {/*</Link>*/}
    </div>
  )
}
