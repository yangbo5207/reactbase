'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'

type PropsOf<C> = C extends (props: infer P) => any ? P : never
type LinkProps = PropsOf<typeof Link>

export default function ActiveLink(props: LinkProps) {
  const {className, children, ...other} = props
  const pathname = usePathname()

  const cls = other.href === pathname ? 'bg-gray-200 dark:bg-gray-700' : ''

  return (
    <Link {...other} className={cn(className, cls)}>
      {props.children}
    </Link>
  )
}
