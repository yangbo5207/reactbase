'use client'

import {useGlobal} from "@/components/global-provider";
import {Button} from "@/components/ui/button";

export default function Auth({children}: any) {
  const {session} = useGlobal()

  if (session) {
    return children
  }

  return (
    <div className='flex justify-center items-center h-[200px]'>
      <Button variant='secondary'>Login width github</Button>
    </div>
  )
}
