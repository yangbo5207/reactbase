import {useState, PropsWithChildren} from 'react'
import {Button} from "@/components/ui/button";

export default function Container({children}: PropsWithChildren) {
  const [count, setCount] = useState(0)

  function __incrementHandler() {
    if (count >= 25) return
    setCount(count + 1)
  }

  function __decrementHandler() {
    if (count <= 0) return
    setCount(count - 1)
  }

  const b = count * 10

  return (
    <div className='space-x-2 border p-2 rounded' style={{borderColor: `rgb(255, 0, ${b})`}}>
      <Button variant='secondary' onClick={__decrementHandler}>-</Button>
      <Button variant='outline'>{count}</Button>
      <Button variant='secondary' onClick={__incrementHandler}>+</Button>
      {children}
    </div>
  )
}
