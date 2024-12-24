'use client'

import {useGlobal} from '@/components/global-provider'
import Link from 'next/link'

export const next_code = ['U', 'x', 'F', 's', 'c', 'G', 'V', 'k', 'X', '3', 'x', 'O', 'P', 'h', 'N', '8', '7', '9']

function equal(codeArr: string[], entercode: string = '') {
  let r = true

  const enterarr = entercode.split('')

  if (enterarr.length === 0) return false

  enterarr.forEach((char, i) => {
    if (char !== codeArr[i]) {
      r = false
    }
  })

  return r
}

export function equalNext(entercode: string = '') {
  return equal(next_code, entercode)
}

export default function Auth({children}: any) {
  const {session, nextcode} = useGlobal()

  if (equalNext(nextcode)) {
    return children
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <Link className='text-blue-500' href='/next/0.auth'>没有阅读权限，点击获得</Link>
    </div>
  )
}
