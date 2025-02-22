import {PropsWithChildren} from 'react'
import PostLayout from '@/components/PostLayout'

export default async function NextLayout({ children }: PropsWithChildren) {
  return (
    <PostLayout auth={false}>{children}</PostLayout>
  )
}
