import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'
import Base from "@/components/Base";

interface FlexProps {
  children?: any,
  start?: boolean,
  end?: boolean,
  around?: boolean,
  between?: boolean,
  center?: boolean,
  col?: boolean,
  className?: string,
}

// 默认方向为 Row
export default function Flex(props: FlexProps) {
  const {children, start, end, around, between, className, center, col, ...other} = props

  const base = 'flex items-center flex-row'

  const cls = clsx(base, {
    ['flex-col']: col,
    ['justify-start']: start,
    ['justify-end']: end,
    ['justify-around']: around,
    ['justify-between']: between,
    ['justify-center']: center,
  }, className)

  return (
    <Base className={twMerge(cls)} {...other}>{children}</Base>
  )
}
