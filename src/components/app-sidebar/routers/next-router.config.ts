import { BookOpen, Bot, Settings2, SquareTerminal} from 'lucide-react'

const router = [
  {
    title: 'base',
    url: '',
    icon: SquareTerminal,
    isActive: true,
    items: [
      {title: '激活码', url: '/next/0.auth'},
      {title: 'Next.js 发展前景', url: '/'},
      {title: '理解服务端渲染', url: '/next/1.ssr'},
      {title: '同构', url: '/next/2.isomorphism'},
      {title: 'RSC 理念', url: '/next/3.rsc'},
      {title: 'React Fiber Diff 流程', url: '/next/4.diff'},
      {title: '性能优化案例一', url: '/next/5.perf_1'},
      {title: '性能优化案例二', url: '/next/6.perf_2'},
      {title: '性能优化案例三', url: '/next/7.perf_3'},
      {title: '创建 NextJS 项目', url: '/next/8.rsc_1'},
      {title: 'RSC 案例一', url: '/next/9.rsc_2'},
      {title: 'RSC 案例二', url: '/next/10.rsc_3'},
    ],
  },
  {
    title: 'router',
    url: '',
    icon: Bot,
    isActive: true,
    items: [
      {title: '路由设计原则', url: '/next/11.routerx'},
      {title: 'App Router', url: '/next/12.routes'},
      {title: '组件化内聚', url: '/next/13.cohesive'},
      {title: '路由跳转', url: '/next/14.navigation'},
      {title: '路由加载原理', url: '/next/15.loader'},
      {title: 'Link 详解', url: '/next/16.link'},
      {title: '路由分组', url: '/next/17.group'},
      {title: '动态路由', url: '/next/18.dynamic'},
    ],
  },
  {
    title: 'dark mode',
    url: '',
    icon: BookOpen,
    items: [
      {title: '数据来源', url: '/next/17.source'},
      {title: 'css 变量', url: '/next/18.cssvar'},
      {title: '模块结构', url: '/next/19.codefile'},
      {title: 'Script', url: '/next/20.script'},
    ],
  },
  {
    title: 'render',
    url: '',
    icon: BookOpen,
    items: [
      {title: 'fetch', url: '/next/20.fetch'},
      {title: 'server render', url: '/next/21.server'},
      {title: 'client render', url: '/next/22.client'},
      {title: 'ISR', url: '/next/23.isr'},
      {title: 'PPR', url: '/next/24.ppr'},
    ],
  },
  {
    title: '流式传输',
    url: '',
    icon: Settings2,
    items: [
      {title: '待续...', url: '/next/general'},
    ],
  },
  {
    title: '缓存策略',
    url: '',
    icon: Settings2,
    items: [
      {title: '待续...', url: '/next/general'},
    ],
  },
]

export default router
