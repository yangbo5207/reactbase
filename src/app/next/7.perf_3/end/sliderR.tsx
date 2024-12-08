import {useStore} from './store'
import {Slider} from '@/components/ui/slider'

export default function SliderR() {
  const setR = useStore((state) => state.setR)

  function __change(value: number[]) {
    setR(value[0])
  }

  return (
    <div className='flex space-x-2 m-3'>
      <label>R: </label>
      <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__change} />
    </div>
  )
}
