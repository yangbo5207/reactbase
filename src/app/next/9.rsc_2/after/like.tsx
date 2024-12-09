import {useState} from 'react'
import {ThumbsUp} from 'lucide-react'
import {Button} from '@/components/ui/button'

export default function Like() {
  const [thumbsup, setThumbsup] = useState(44)

  function _click() {
    setThumbsup(thumbsup + 1)
  }

  return (
    <Button variant='ghost' onClick={_click}>
      <ThumbsUp />
      <span>{thumbsup}</span>
    </Button>
  )
}
