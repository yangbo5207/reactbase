import {createContext, PropsWithChildren, useState} from 'react'
import {create} from 'zustand'

const fn = (n: number) => {}

type Store = {
  r: number,
  setR: (n: number) => any,
  g: number,
  setG: (n: number) => any,
  b: number,
  setB: (n: number) => any,
}

export const useStore = create<Store>((set) => {
  return {
    r: 0,
    setR: (n: number) => set(() => ({r: n})),
    g: 0,
    setG: (n: number) => set(() => ({g: n})),
    b: 0,
    setB: (n: number) => set(() => ({b: n}))
  }
})
