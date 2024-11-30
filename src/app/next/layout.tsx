import PostLayout from '@/components/PostLayout'

export default async function NextLayout({ children }: any) {
  return (
    <PostLayout>{children}</PostLayout>
  )
}
