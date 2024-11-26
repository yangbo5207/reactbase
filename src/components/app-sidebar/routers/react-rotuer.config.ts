import {AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal, Tent} from "lucide-react"

const router = [
  {
    title: "React 基础",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "序",
        url: "/next/history",
      },
      {
        title: "服务端渲染",
        url: "/next/browser",
      },
      {
        title: "客户端渲染",
        url: "#",
      },
    ],
  },
  {
    title: "路由",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "App Router",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "暗黑模式与皮肤切换",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
]

export default router
