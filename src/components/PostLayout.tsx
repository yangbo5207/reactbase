'use client'

import {useEffect, ReactNode, useRef} from 'react'

export default function PostLayout({children}: {children: ReactNode}) {
  const nav = useRef<any>(null)
  const index = useRef(0)

  useEffect(() => {
    const h2 = document.getElementById('table-of-contents')
    const ul = document.querySelector<HTMLElement>('#table-of-contents+ul')

    if (!h2 || !ul) return

    h2.style.display = 'block'
    h2.style.fontSize = '14px'
    h2.style.color = '#cfcfcf'
    h2.style.margin = '0'

    ul.style.display = 'block'

    ul.children[0].classList.add('active')


    h2.innerText = '目录'

    nav.current.appendChild(h2)
    nav.current.appendChild(ul)

    Array.prototype.forEach.call(ul.children, (child: HTMLElement, i) => {
      const id = child.getElementsByTagName('a')[0].href.split('#')[1]
      const element = document.getElementById(decodeURIComponent(id))
      const observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
          console.log(entries[0].target)
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
    <div>
      <div className='keep'>
        <div className='content'>{children}</div>
        <div className='nav'>
          <div ref={nav} className='headings'></div>
          <div className='mt-4 rounded-md border dark:border-gray-100 p-4'>
            广告区域
          </div>
        </div>

      </div>
    </div>
  )
}
