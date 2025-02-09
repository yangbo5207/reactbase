import Intro from './intro.mdx'
import PostLayout from "@/components/PostLayout";

export default function Page() {
  return (
    <PostLayout auth={false}>
      <Intro />
    </PostLayout>
  )
}
