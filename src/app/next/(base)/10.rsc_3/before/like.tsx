import {useState, useOptimistic, useTransition, useEffect} from 'react'
import {ThumbsUp} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {incrementLikeCount, getLikeCountByArticle} from "./api";

export default function Like() {
  const [thumbsup, setThumbsup] = useState(0)
  const [optThumbsup, addOptThumbsup] = useOptimistic<number, number>(thumbsup, (s, newState) => newState)
  const [pending, startTransition] = useTransition()

  useEffect(() => {
    getLikeCountByArticle('helox').then(res => {
      setThumbsup(res)
    }).catch(error => {
      console.error(error)
    })
  }, []);

  function _click() {
    if (pending) return
    const _thumbsup = thumbsup + 1
    startTransition(async () => {
      addOptThumbsup(_thumbsup)
      const res = await incrementLikeCount('helox', 1)
      // @ts-ignore
      setThumbsup(res.like_count)
    })
  }

  return (
    <Button variant='ghost' onClick={_click}>
      <ThumbsUp />
      <span>{optThumbsup}</span>
    </Button>
  )
}

