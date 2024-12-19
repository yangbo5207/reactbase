import {createContext, useState, useEffect} from 'react'
import {
  ThemeProviderProps,
  UseThemeProps
} from "@/components/switch-themes/types";
import {script} from "@/components/switch-themes/script";

const def: UseThemeProps = {
  setTheme: () => {},
  theme: 'light'
}

export const ThemeContext = createContext(def)

const themes = ['light', 'dark']

export default function Provider(props: ThemeProviderProps) {
  const {children, defaultTheme, storageKey = 'theme', ...other} = props
  const [theme, changeTheme] = useState(() => getTheme(storageKey, 'light'))

  useEffect(() => {
    const d = document.documentElement
    d.classList.add(theme)
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: string) => {
      changeTheme(theme)
      const d = document.documentElement
      d.classList.remove(...themes)
      d.classList.add(theme)
      localStorage.setItem(storageKey, theme)
    }
  }

  return (
    <ThemeContext value={value}>
      <ThemeScript defaultTheme={defaultTheme} storageKey={storageKey} {...other} />
      {children}
    </ThemeContext>
  )
}

function ThemeScript({storageKey, defaultTheme, nonce}: Omit<ThemeProviderProps, 'children'>) {
  const scriptArgs = JSON.stringify([storageKey, defaultTheme]).slice(1, -1)

  return (
    <script
      suppressHydrationWarning
      nonce={typeof window === 'undefined' ? nonce : ''}
      dangerouslySetInnerHTML={{__html: `(${script.toString()})(${scriptArgs})`}}
    />
  )
}

function getTheme(key: string, defaultValue: string) {
  let theme
  try {
    theme = localStorage.getItem(key) || undefined
  } catch (e) {}
  return theme || defaultValue
}
