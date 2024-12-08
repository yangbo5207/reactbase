import {useState, PropsWithChildren} from 'react'
import {Button} from "@/components/ui/button";
import {Slider} from '@/components/ui/slider'

export default function Container({children}: PropsWithChildren) {
  const [count, setCount] = useState(0)
  const [r, setR] = useState(50)
  const [g, setG] = useState(50)
  const [b, setB] = useState(50)

  function __rchange(value: number[]) {
    setR(value[0])
  }

  function __gchange(value: number[]) {
    setG(value[0])
  }

  function __bchange(value: number[]) {
    setB(value[0])
  }

  const color = `rgb(${r}, ${g}, ${b})`

  return (
    <div className='p-2 rounded border-4' style={{borderColor: color}}>
      <div className='flex space-x-2 m-3'>
        <label>R: </label>
        <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__rchange} />
      </div>

      <div className='flex space-x-2 m-3'>
        <label>G: </label>
        <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__gchange} />
      </div>

      <div className='flex space-x-2 m-3'>
        <label>B: </label>
        <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__bchange} />
      </div>
      {children}
    </div>
  )
}
