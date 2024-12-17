import {PropsWithChildren} from 'react'
import PostLayout from '@/components/PostLayout'
import R from './r.mdx'
import S from './s.mdx'

export default async function NextLayout({ children }: PropsWithChildren) {
  return (
    <PostLayout>
      <R />
      {children}
      <S />
    </PostLayout>
  )
}
