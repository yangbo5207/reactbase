import {createContext, PropsWithChildren, useState} from 'react'

const fn = (n: number) => {}

export const SettingContext = createContext({
  r: 0,
  setR: fn,
  g: 0,
  setG: fn,
  b: 0,
  setB: fn
})

export default function Provider({ children }: PropsWithChildren<{}>) {
  const [r, setR] = useState(50)
  const [g, setG] = useState(50)
  const [b, setB] = useState(50)

  const value = {
    r, setR,
    g, setG,
    b, setB
  }

  return (
    <SettingContext value={value}>
      {children}
    </SettingContext>
  )
}
