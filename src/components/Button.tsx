import {HTMLAttributes, ButtonHTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  primary?: boolean,
  danger?: boolean,
  sm?: boolean,
  lg?: boolean,
  success?: boolean,
  signal?: boolean,
  ghost?: boolean,
  rect?: boolean,
}

export default function Button(props: Props) {
  const {className, primary, danger, sm, lg, signal, success, ghost, rect, children, ...other} = props
  const base = 'rounded-sm border border-transparent font-medium cursor-pointer transition relative mx-1'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-1.5 px-3'

  const cls = twMerge(clsx(base, normal, md, {
    // type 这些类型是互斥的
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,
    ['bg-transparent border-transparent hover:bg-gray-100']: ghost,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
    ['w-8 h-8 p-0']: rect,
  }, className))

  const _signalsnippet = (
    <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
  )

  return (
    <button className={cls} {...other}>
      {children}
      {signal && _signalsnippet}
    </button>
  )
}
