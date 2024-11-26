'use client'

import {use} from 'react'
import Provider, {GlobalContext} from './context'

export const useGlobal = () => {
  return use(GlobalContext)
}

export const  GlobalProvider = Provider
