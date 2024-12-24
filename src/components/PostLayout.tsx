'use client'

import {useEffect, ReactNode, useRef} from 'react'
import {Telescope, MousePointerClick, PlaneTakeoff} from 'lucide-react'
import Link from 'next/link'
import Auth from '@/components/Auth'

type Props = {
  children: ReactNode,
  auth?: boolean
}

export default function PostLayout({children, auth = true}: Props) {
  const nav = useRef<any>(null)
  const index = useRef(0)

  useEffect(() => {
    const h2 = document.getElementById('table-of-contents')
    const ul = document.querySelector<HTMLElement>('#table-of-contents+ul')

    if (!h2 || !ul) return

    h2.style.display = 'block'
    h2.style.margin = '0'

    ul.style.display = 'block'
    ul.children[0].classList.add('active')
    h2.innerText = 'ON THIS PAGE'

    nav.current.appendChild(h2)
    nav.current.appendChild(ul)

    Array.prototype.forEach.call(ul.children, (child: HTMLElement, i) => {
      child.addEventListener('click', e => {
        if (index.current !== i) {
          ul.children[index.current].classList.remove('active')
          child.classList.add('active')
          index.current = i
        }
      })

      const id = child.getElementsByTagName('a')[0].href.split('#')[1]
      const element = document.getElementById(decodeURIComponent(id))
      const observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
          ul.children[index.current].classList.remove('active')
          child.classList.add('active')
          index.current = i
        }
      }, {})
      if (element) {
        observer.observe(element)
      }
    })
  }, []);

  return (
    <div className='relative'>
      <div className='keep'>
        <div className='content'>{auth ? <Auth>{children}</Auth> : children}</div>
        <div className='nav'>
          <div ref={nav} className='headings mb-8'></div>
          <Link
            href='https://xinyuzone.cn/column/1818097927437131776'
            className='block my-4 rounded-md bg-gray-50 dark:bg-gray-900 text-sm p-4 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            target='_blank'
          >
            <Telescope className='' />
            <div className='font-bold my-2'>JavaScript 核心进阶</div>
            <div className='text-xs'>从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维</div>
          </Link>

          <Link
            href='https://usehook.cn/'
            className='block my-4 rounded-md bg-gray-50 dark:bg-gray-900 text-sm p-4 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            target='_blank'
          >
            <MousePointerClick className='' />
            <div className='font-bold my-2'>React 19 全解</div>
            <div className='text-xs'>全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验</div>
          </Link>

          <Link
            href='https://usehook.cn/advance/index'
            className='block my-4 rounded-md bg-gray-50 dark:bg-gray-900 text-sm p-4 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            target='_blank'
          >
            <PlaneTakeoff className='' />
            <div className='font-bold my-2'>React 19 尊享版</div>
            <div className='text-xs leading-5'>专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验</div>
          </Link>


          <div className='my-4 rounded-md bg-gray-100 dark:bg-gray-700 py-6 text-center'>
            成为赞助商
          </div>
        </div>

      </div>
    </div>
  )
}
