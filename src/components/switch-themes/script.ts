export function script(storageKey, defaultTheme) {
  const el = document.documentElement
  const themes = ['light', 'dark']

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function updateTheme(theme: string) {
    el.classList.remove(...themes)
    el.classList.add(theme)
  }

  const cacheTheme = localStorage.getItem(storageKey) || defaultTheme
  const theme = cacheTheme === 'system' ? getSystemTheme() : cacheTheme
  updateTheme(theme)
}
