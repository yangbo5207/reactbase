'use client'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {toast} from 'sonner'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {Coffee, LockKeyhole, OctagonAlert} from 'lucide-react'
import {useGlobal} from '@/components/global-provider'
import {equalNext} from '@/components/Auth'
import React, {useRef} from 'react'

export default function InputActiveCode() {
  const {nextcode, setNextCode} = useGlobal()

  let active = 'none'

  if (nextcode && !equalNext(nextcode)) {
    active = 'expired'
  }

  if (equalNext(nextcode)) {
    active = 'activating'
  }

  const encode = useRef('')

  function __inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    encode.current = e.target.value
  }

  function __submit() {
    if (equalNext(encode.current)) {
      localStorage.setItem('next_code', encode.current)
      setNextCode(encode.current)
      return
    }

    toast('激活码无效', {
      description: '您输入的激活码无效，请确认之后重新输入，最新激活码请联系我的微信号：icanmeetu 获得',
      action: {
        label: 'OK',
        onClick: () => {}
      }
    })
  }

  return (
    <div className='pb-4'>
      <div className='mb-6 space-y-4'>
        <div className=''>激活码当前状态:</div>
        <div className='space-x-2'>
          <Button variant={active === 'none' ? 'destructive' : 'secondary'}><LockKeyhole /> None</Button>
          <Button variant={active === 'expired' ? 'destructive' : 'secondary'}><OctagonAlert /> Expired</Button>
          <Button variant={active === 'activating' ? 'destructive' : 'secondary'}><Coffee /> Activating</Button>
        </div>
      </div>

      {active === 'none' ? (
        <Alert variant='destructive'>
          <LockKeyhole className="h-4 w-4" />
          <AlertTitle>激活码不存在!</AlertTitle>
          <AlertDescription>
            您还未输入激活码，请在下方输入框中输入激活码。最新激活码请联系我的微信号：icanmeetu 获得
          </AlertDescription>
        </Alert>
      ) : null}

      {active === 'expired' ? (
        <Alert variant='destructive'>
          <OctagonAlert className="h-4 w-4" />
          <AlertTitle>激活码已过期</AlertTitle>
          <AlertDescription>
            您的激活码已过期，请在下方重新输入激活码。最新激活码请联系我的微信号：icanmeetu 获得
          </AlertDescription>
        </Alert>
      ) : null}

      {active === 'activating' ? (
        <Alert variant='default'>
          <Coffee className="h-4 w-4" />
          <AlertTitle>已激活</AlertTitle>
          <AlertDescription>
            您已激活本小册，请开始您的学习。
          </AlertDescription>
        </Alert>
      ) : null}

      <div className='mt-6 space-y-4'>
        <div className=''>输入激活码</div>
        <div className='flex space-x-6'>
          <Input type='password' placeholder='enter your active code.' onInput={__inputChange} />
          <Button onClick={__submit}>确认</Button>
        </div>
      </div>
    </div>
  )
}
