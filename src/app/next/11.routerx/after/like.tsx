'use client'

import {useState, useOptimistic, useTransition} from 'react'
import {ThumbsUp} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {getLikeCountByArticle, incrementLikeCount} from "./apic";

export default function Like({like = 0}: {like: number}) {
  const [thumbsup, setThumbsup] = useState(like)

  const [optThumbsup, addOptThumbsup] = useOptimistic<number, number>(thumbsup, (s, newState) => newState)
  const [pending, startTransition] = useTransition()

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
