import {useState} from 'react'
import {Button} from "@/components/ui/button";

export default function Count() {
  const [count, setCount] = useState(0)

  function __clickHandler() {
    setCount(count + 1)
  }

  return (
    <>
      <Button variant='secondary' onClick={__clickHandler}>点击递增</Button>
      <Button variant='outline'>{count}</Button>
    </>
  )
}
