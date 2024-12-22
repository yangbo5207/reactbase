import { motion } from 'framer-motion'
import {useState, useRef, useEffect} from 'react'
import {Button} from '@/components/ui/button'

export default function App() {
  const [list, setList] = useState([0, 1, 2])
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const h = ref.current.getBoundingClientRect().height
    setHeight(h)
  }, [list]);

  function __click() {
    list.push(list.length)
    setList([...list])
  }

  return (
    <div className='h-96'>
      <div>
        <Button onClick={__click}>push item</Button>
      </div>
      <motion.div
        className='w-32 rounded border overflow-hidden mt-4'
        animate={{ height: height }}
      >
        <div ref={ref} className='p-2 space-y-1'>
          {list.map((item, i) => (
            <div
              key={item}
              className='bg-blue-100 rounded p-2 text-center dark:bg-gray-700'
            >{item}</div>
          ))}
        </div>
      </motion.div>
    </div>

  );
}
