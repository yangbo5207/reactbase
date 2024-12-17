import {useState, PropsWithChildren, use} from 'react'
import {Slider} from '@/components/ui/slider'
import Provider, {SettingContext} from './context'

export default function Container({children}: PropsWithChildren) {
  return (
    <Provider>
      <Wrapper>
        <SliderR />
        <SliderG />
        <SliderB />
        {children}
      </Wrapper>
    </Provider>
  )
}

function Wrapper({children}: PropsWithChildren<any>) {
  const {r, g, b} = use(SettingContext)
  const color = `rgb(${r}, ${g}, ${b})`

  return (
    <div className='p-2 rounded border-4' style={{borderColor: color}}>
      {children}
    </div>
  )
}

function SliderR() {
  const {setR} = use(SettingContext)

  function __rchange(value: number[]) {
    setR(value[0])
  }

  return (
    <div className='flex space-x-2 m-3'>
      <label>R: </label>
      <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__rchange} />
    </div>
  )
}

function SliderG() {
  const {setG} = use(SettingContext)

  function __gchange(value: number[]) {
    setG(value[0])
  }

  return (
    <div className='flex space-x-2 m-3'>
      <label>G: </label>
      <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__gchange} />
    </div>
  )
}

function SliderB() {
  const {setB} = use(SettingContext)

  function __bchange(value: number[]) {
    setB(value[0])
  }

  return (
    <div className='flex space-x-2 m-3'>
      <label>B: </label>
      <Slider defaultValue={[50]} max={255} step={1} min={0} onValueChange={__bchange} />
    </div>
  )
}
