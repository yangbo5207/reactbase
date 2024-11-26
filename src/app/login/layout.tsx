import Flex from "@/components/Flex";

export default function Layout({ children }: any) {
  return (
    <Flex center className='mx-auto max-w-6xl border-x border-gray-200 p-20'>
      {children}
    </Flex>
  )
}
