'use client'

import { useGlobal } from '@/components/global-provider'
import Link from 'next/link'
import { enc, SHA256, AES } from 'crypto-js'

const passphrase = 'next-start-2025'

const key = SHA256(passphrase).toString(enc.Hex)

// 加密函数
function encryptMessage(message: string, key: string) {
  const encrypted = AES.encrypt(message, key).toString();
  return encrypted;
}

// 解密函数
function decryptMessage(encryptedMessage: string, key: string) {
  const decrypted = AES.decrypt(encryptedMessage, key);
  return decrypted.toString(enc.Utf8);
}

const active_code = 'UxFscGVkX3xOPhN879'

// 每次更改时要执行一下该代码
// const encryptedMessage = encryptMessage(active_code, key);
// const encryptedMessage = 'U2FsdGVkX1+IjUFB19zXb7zoA2Sz/TyIjAfOCOz74aRKaJrhKMHGSkPPk77JTfbM'

export function equalNext(entercode: string = '') {
  const decryptedMessage = decryptMessage(entercode, key);
  return decryptedMessage === active_code
}

export default function Auth({ children }: any) {
  const { session, nextcode } = useGlobal()

  if (equalNext(nextcode)) {
    return children
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <Link className='text-blue-500' href='/next/0.auth'>没有阅读权限，点击获得</Link>
    </div>
  )
}
