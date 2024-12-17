import {Card, CardContent, CardTitle, CardHeader, CardFooter} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {Bug, PartyPopper, AppWindow} from 'lucide-react'

export default function Child() {
  console.warn('__ child component rendered!')

  return (
    <Card className='my-6 max-w-[350px]'>
      <CardHeader>
        <CardTitle>发版信息</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between my-6'>
          <span>本次版本一共 12 个新特性</span>
          <Badge className='space-x-2 py-1' variant='secondary'>
            <PartyPopper size='16' /><label>Feature</label>
          </Badge>
        </div>
        <div className='flex items-center justify-between'>
          <span>本次需求一共 12 个 bug</span>
          <Badge className='space-x-2 py-1' variant='destructive'>
            <Bug size='16' /><label>Bug</label>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className='border-t'>
        <div className='flex items-center space-x-2 mt-6'>
          <Badge className='space-x-2 py-1'>
            <AppWindow size='16' /><label>Tip</label>
          </Badge>
          <span>这是一个静态组件，不应该 rerender</span>
        </div>
      </CardFooter>
    </Card>
  )
}
