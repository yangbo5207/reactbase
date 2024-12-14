import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center space-x-4">
      <h2 className='font-bold text-lg'>404</h2>
      <div className='h-8 border-l border-gray-600'></div>
      <div>This page could not be found.</div>
    </div>
  )
}
