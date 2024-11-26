import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Base(props: any) {
  const {className, children, ...others} = props

  let bgclass = ''
  let borderclass = ''
  let roundclass = ''

  Object.keys(others).forEach(key => {
    if (key.indexOf('bg-') === 0) {
      bgclass += `${key} `
    }

    if (key.indexOf('border-') === 0) {
      borderclass += ` ${key} `
    }

    if (key.indexOf('rounded-') === 0) {
      roundclass += ` ${key} `
    }
  })

  const cls = clsx(bgclass, borderclass, roundclass, className)

  return (
    <div className={twMerge(cls)} {...others}>{children}</div>
  )
}
