'use client'

import {use} from 'react'
import Provider, {ThemeContext} from './context'

export const useTheme = () => {
  return use(ThemeContext)
}

export const  ThemeProvider = Provider
