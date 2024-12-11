import {MessageCircleCode, FolderPlus, Twitter, TvMinimalPlay} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Like from './like'
import {getLikeCount} from "./apis";

export default async function Tooltip() {
  const like_count = await getLikeCount('helox')
  return (
    <div className='flex justify-between border-t pt-4'>
      <div>
        <Like like={like_count} />
        <Button variant='ghost'>
          <MessageCircleCode />
          <span>101</span>
        </Button>
      </div>
      <div>
        <Button variant='ghost' size='icon'>
          <FolderPlus />
        </Button>
        <Button variant='ghost' size='icon'>
          <TvMinimalPlay />
        </Button>
        <Button variant='ghost' size='icon'>
          <Twitter />
        </Button>
      </div>
    </div>
  )
}
