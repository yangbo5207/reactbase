'use client'

import {useState} from 'react'
import {ThumbsUp, MessageCircleCode, FolderPlus, Twitter, TvMinimalPlay} from 'lucide-react'
import {Button} from '@/components/ui/button'

export default function Tooltip() {
  const [thumbsup, setThumbsup] = useState(44)

  function _click() {
    setThumbsup(thumbsup + 1)
  }

  return (
    <div className='flex justify-between border-t pt-4'>
      <div>
        <Button variant='ghost' onClick={_click}>
          <ThumbsUp />
          <span>{thumbsup}</span>
        </Button>
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
