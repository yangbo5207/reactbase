import {AppWindow} from 'lucide-react'

export default function Preview(props: any) {
  return (
    <div className='my-6 border rounded border-gray-200 dark:border-gray-700 overflow-hidden'>
      <div className='border-b border-gray-200 dark:border-gray-700 px-3 py-2 flex text-xs items-center' style={{ backgroundColor: 'var(--ch-code-header-bg)'} as any}>
        <AppWindow className='mr-2' size='18' /> 预览
      </div>
      <div className='p-4'>
        {props.children}
      </div>
    </div>
  )
}
