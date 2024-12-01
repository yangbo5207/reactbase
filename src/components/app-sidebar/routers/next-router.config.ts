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
        url: "/next/1ssr",
      },
      {
        title: "同构",
        url: "/next/2isomorphism",
      }
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
