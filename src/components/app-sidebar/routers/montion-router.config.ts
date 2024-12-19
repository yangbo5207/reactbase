import { BookOpen, Bot, Settings2, SquareTerminal} from 'lucide-react'

const router = [
  {
    title: '基础',
    url: '',
    icon: SquareTerminal,
    isActive: true,
    items: [
      {title: 'install', url: '/motion/1.install'},
      {title: '基础用法', url: '/motion/2.base'},
      {title: '过渡', url: '/next/3.transition'},
      {title: '手势', url: '/next/4.gestures'},
      {title: '滚动', url: '/next/5.scroll'},
      {title: '布局', url: '/next/6.layout'}
    ],
  }
]

export default router
