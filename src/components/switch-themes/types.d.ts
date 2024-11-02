import React, {Dispatch, SetStateAction, PropsWithChildren} from 'react'

export interface UseThemeProps {
  setTheme: Dispatch<SetStateAction<string>>,
  theme: string
}

export interface ThemeProviderProps extends PropsWithChildren {
  themes?: string[],
  enableSystem?: boolean,
  storageKey?: string,
  defaultTheme?: string,
  nonce?: string
}
