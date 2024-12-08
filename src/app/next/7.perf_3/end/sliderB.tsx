import {useStore} from './store'
import {Slider} from '@/components/ui/slider'

export default function SliderB() {
  const setB = useStore((state) => state.setB)

  function __change(value: number[]) {
    setB(value[0])
  }

  return (
    <div className='flex space-x-2 m-3'>
      <label>B: </label>
      <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__change} />
    </div>
  )
}
