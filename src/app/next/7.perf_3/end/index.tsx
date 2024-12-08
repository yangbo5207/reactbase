import Container from './container'
import Child from "./child";
import SliderR from './sliderR'
import SliderG from './sliderG'
import SliderB from './sliderB'

export default function Demo() {
  return (
    <Container>
      <SliderR />
      <SliderG />
      <SliderB />
      <Child />
    </Container>
  )
}
