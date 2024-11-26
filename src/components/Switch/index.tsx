'use client'

import {useState} from 'react'

interface SwitchProps {
  value?: boolean,
  onChange?: (value: boolean) => void,
}

export default function Switch(props: SwitchProps) {
  const {value = false, onChange} = props
  const [checked, setChecked] = useState(value)

  function __clickHandler(value: boolean) {
    setChecked(value)
    onChange && onChange(value)
  }

  return (
    <>
      <button
        className='h-5 w-9 cursor-pointer rounded-full border-2 border-transparent shadow-sm bg-amber-500 transition-colors data-[state=off]:bg-gray-200 data-[state=on]:bg-black'
        type='button'
        data-state={checked ? 'on' : 'off'}
        onClick={() => __clickHandler(!checked)}
        id='theme_btn'
      >
        <span
          data-state={checked ? 'on' : 'off'}
          className='block h-4 w-4 rounded-full bg-gray-50 ring-0 shadow-lg transition-transform data-[state=on]:translate-x-4 data-[state=off]:translate-x-0'
          id='theme_btn_span'
        />
      </button>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{__html: `(${script.toString()})('theme')`}}/>
    </>
  )
}

function script(storageKey: string) {
  const cacheTheme = localStorage.getItem(storageKey)
  if (!cacheTheme) return
  const themeBtn = document.getElementById('theme_btn')
  const span = document.getElementById('theme_btn_span')
  if (!themeBtn || !span) return
  const state = cacheTheme === 'light' ? 'off' : 'on'
  themeBtn.setAttribute('data-state', state)
  span.setAttribute('data-state', state)
}
