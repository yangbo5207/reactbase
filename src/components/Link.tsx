'use client'

import type {ComponentProps} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import clsx from 'clsx'

interface LinkProps extends ComponentProps<typeof Link> {
  active?: string
}

export default function ActiveLink(props: LinkProps) {
  const pathname = usePathname()
  const {children, active, className, href, ...others} = props

  const cls = clsx(className, {
    // @ts-ignore
    [active]: pathname.includes(href as string)
  })

  return (
    <Link {...others} href={href} className={cls}>
      {children}
    </Link>
  )
}
