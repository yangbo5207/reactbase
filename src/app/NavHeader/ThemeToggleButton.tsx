'use client';

import {useState, useEffect} from 'react'
import Button from "@/components/Button";
import { useTheme } from '@/components/switch-themes'

export default function ThemeToggleButton() {
  const {theme, setTheme} = useTheme()
  const [isServer, update] = useState(true)

  function __themeToggle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    update(false)
  }, []);

  if (isServer) {
    return <Button>light</Button>
  }

  return (
    <Button onClick={__themeToggle}>{theme}</Button>
  )
}
