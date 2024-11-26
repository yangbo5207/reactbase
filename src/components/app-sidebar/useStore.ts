import {usePathname} from 'next/navigation'
import {useState, useRef} from 'react'
import { type LucideIcon } from "lucide-react"
import router1 from './routers/next-router.config'
import router2 from './routers/react-rotuer.config'
import router3 from './routers/rn-router.config'

type Item = {
  title: string,
  url: string,
  icon?: LucideIcon,
  isActive?: boolean,
  items?: Item[]
}

const routers: { [key: string]: Item[] } = {
  next: router1,
  react: router2,
  rn: router3,
}

const otherRouter: { [key: string]: Item } = {
  login: {
    url: '/login',
    title: '登录'
  }
}

const courses = ['next', 'react', 'rn']

export default function useStore() {
  const pathname = usePathname().slice(1)
  const curpath = pathname.split('/')[0] || 'next'
  const isCourses = courses.includes(curpath)
  const [currentCourses, setCourses] = useState(curpath)
  const curNavigation = useRef(routers[currentCourses] || routers.next)

  // @ts-ignore
  const [currentRouter, setCurrentRouter] = useState(isCourses ? curNavigation.current[0].items[0] : otherRouter[curpath])

  return {
    currentCourses,
    curNavigation,
    switchRouter: (key: string) => {
      curNavigation.current = routers[key]
      setCourses(key)
    },
    switchNavigationActive: (i: number) => {
      curNavigation.current[i].isActive = !curNavigation.current[i].isActive
    },
    currentNavigation: curNavigation.current,
    currentRouter,
    setCurrentRouter: (item: Item) => {
      setCurrentRouter(item);
      const pathname = window.location.pathname
      const curpath = pathname.split('/')[0] || 'next'
      setCourses(curpath)
    },
  }
}
