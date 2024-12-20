import './globals.css'
import ClearError from './clearError'
import {ThemeProvider} from '@/components/switch-themes'
import {GlobalProvider} from '@/components/global-provider'
import {AppSidebar} from '@/components/app-sidebar'
import {Toaster} from '@/components/ui/sonner'

export const metadata = {
  title: '这波能反杀的付费课',
  description: 'Generated by Next.js',
}

export default async function RootLayout({ children }: any) {
  return (
    <html lang="zh" suppressHydrationWarning className='bg-background h-full'>
      <body className='text-sm text-foreground h-full'>
        <ClearError />
        <ThemeProvider defaultTheme='light'>
          <GlobalProvider>
            <AppSidebar>{children}</AppSidebar>
          </GlobalProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
// 1. 从github 中拉取项目列表，提供推送到首页的功能
// 2. 支持 登录用户 star
// 3. 支持付费用户学习 React 基础
// 4. 支持付费用户学习 React 性能优化
// 5. 支持付费用户 学习 tailwindcss
// 6. 支持 github 登录，邮箱登录
