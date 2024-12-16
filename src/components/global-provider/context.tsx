'use client'

import React, {createContext, useState, useEffect} from 'react'
import {getLoginInfor, Session} from "@/components/app-sidebar/nav-user/api";

type GlobalContextValue = {
  session: Session | null,
  nextcode: string,
  setNextCode: (code: string) => void,
}

type GlobalProviderProps = {
  children: React.ReactNode,
}

// 用于存储登录信息等全局信息，部分信息在服务端获得，并通过 props 传入
export const GlobalContext = createContext<GlobalContextValue>({
  session: null,
  nextcode: '',
  setNextCode: (code: string) => {}
})

export default function Provider(props: GlobalProviderProps) {
  const {children} = props

  const [session, setSession] = useState<Session | null>(null)
  const [nextcode, setNextCode] = useState<string>('')

  useEffect(() => {
    let session: Session | null = null
    const login_message = localStorage.getItem('login_message')
    if(login_message) {
      session = JSON.parse(login_message)
      setSession(session)
    }
    if (!login_message) {
      getLoginInfor().then(res => {
        setSession(res)
      }).catch(e => {
        console.error(e)
      })
    }

    const nextCode = localStorage.getItem('next_code') || ''
    setNextCode(nextCode)
  }, []);

  const value = {
    session,
    nextcode,
    setNextCode
  }

  return (
    <GlobalContext value={value}>
      {children}
    </GlobalContext>
  )
}

// 1. 未登录 -> 登录
// 2. 登录之后，未获取登录信息，并将登录信息下入到 localStorage
// 3. 登录信息过期
