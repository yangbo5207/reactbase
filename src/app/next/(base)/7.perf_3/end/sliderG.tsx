import {useStore} from './store'
import {Slider} from '@/components/ui/slider'

export default function SliderG() {
  const setG = useStore((state) => state.setG)

  function __change(value: number[]) {
    setG(value[0])
  }

  return (
    <div className='flex space-x-2 m-3'>
      <label>G: </label>
      <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__change} />
    </div>
  )
}
