import { BookOpen, Bot, Settings2, SquareTerminal} from "lucide-react"

const router = [
  {
    title: "基础",
    url: "",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Next.js 发展前景",
        url: "/",
      },
      {
        title: "理解服务端渲染",
        url: "/next/1.ssr",
      },
      {
        title: "同构",
        url: "/next/2.isomorphism",
      },
      {
        title: "RSC 理念",
        url: "/next/3.rsc",
      },
      {
        title: "React Fiber Diff 流程",
        url: "/next/4.diff",
      },
      {
        title: "性能优化案例一",
        url: "/next/5.perf_1",
      },
      {title: "性能优化案例二", url: "/next/6.perf_2"},
      {title: "性能优化案例三", url: "/next/7.perf_3"},
      {title: "创建 NextJS 项目", url: "/next/8.rsc_1"},
      {title: "RSC 案例一", url: "/next/9.rsc_2"},
    ],
  },
  {
    title: "路由",
    url: "",
    icon: Bot,
    isActive: false,
    items: [
      {
        title: "App Router",
        url: "/next/approuter",
      },
      {
        title: "Explorer",
        url: "/next/explorer",
      },
      {
        title: "Quantum",
        url: "/next/quantum",
      },
    ],
  },
  {
    title: "暗黑模式与皮肤切换",
    url: "",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "/next/introduction",
      },
      {
        title: "Get Started",
        url: "/next/getStarted",
      },
      {
        title: "Tutorials",
        url: "/next/tutorials",
      },
      {
        title: "Changelog",
        url: "/next/changelog",
      },
    ],
  },
  {
    title: "设置",
    url: "",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "/next/general",
      },
      {
        title: "Team",
        url: "/next/team",
      },
      {
        title: "Billing",
        url: "/next/billing",
      },
      {
        title: "Limits",
        url: "/next/limits",
      },
    ],
  },
]

export default router
