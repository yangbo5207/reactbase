import {PropsWithChildren} from 'react'
import {useStore} from "./store";

export default function Container({children}: PropsWithChildren) {
  const r = useStore(state => state.r)
  const g = useStore(state => state.g)
  const b = useStore(state => state.b)

  const color = `rgb(${r}, ${g}, ${b})`

  return (
    <div className='p-2 rounded border-4' style={{borderColor: color}}>
      {children}
    </div>
  )
}
