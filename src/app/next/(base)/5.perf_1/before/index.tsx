import {useState} from 'react'
import {Button} from '@/components/ui/button'
import Child from './child'

export default function Demo() {
  const [count, setCount] = useState(0)

  function __clickHandler() {
    setCount(count + 1)
  }

  return (
    <div className='space-x-2'>
      <Button variant='secondary' onClick={__clickHandler}>点击递增</Button>
      <Button variant='outline'>{count}</Button>
      <Child />
    </div>
  )
}
