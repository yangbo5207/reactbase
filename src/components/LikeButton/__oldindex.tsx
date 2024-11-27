'use client'

import React, { useState, useEffect } from 'react'
import supabase from '@/utils/supabase'

const LikeButton = ({ article = 'helox' }) => {
  const [likeCount, setLikeCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLike = async () => {
    // 如果前一次操作未完成，就直接先跳过
    if (isAnimating) {
      return
    }

    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 200)

    if (likeCount > 0) {
      const { data, error } = await supabase
        .from('next')
        .update({ like_count: likeCount + 1 })
        .eq('article', article)

      if (error) {
        console.error(error)
      } else {
        setLikeCount(likeCount + 1)
      }
      return
    }

    // 1. 检查是否存在对应的 next 记录
    const { data: articleLike, error } = await supabase
      .from('next')
      .select('*')
      .eq('article', article)
      .single()

    if (error && error.code !== 'PGRST116') {
      // 如果查询出错，且不是因为找不到记录
      console.error(error)
      return
    }

    if (articleLike) {
      // 2. 如果有记录，更新 like_count +1
      const { data, error } = await supabase
        .from('next')
        .update({ like_count: articleLike.like_count + 1 })
        .eq('article', article)

      if (error) {
        console.error(error)
      } else {
        setLikeCount(articleLike.like_count + 1)
      }
    } else {
      // 3. 如果没有记录，插入新记录并设置 like_count = 1
      const { data, error } = await supabase
        .from('next')
        .insert({ article: article, like_count: 1 })

      if (error) {
        console.error(error)
      } else {
        setLikeCount(1)
      }
    }
  }

  useEffect(() => {
    fetchCount()
  }, [])

  const fetchCount = async () => {
    const { data, error } = await supabase.from('next').select('*').eq('article', article)
    if (error) {
      console.error('Error get article count:', error)
    } else if (data && data[0]) {
      setLikeCount(data[0].like_count)
    } else {
      setLikeCount(0)
    }
  }

  console.log('hello render count')

  return (
    <div className='w-10 h-10 border cursor-pointer flex justify-center items-center rounded-full relative'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"/>
      </svg>
      <span className='absolute right-[-15px] top-[-6px] bg-coolGray-300 px-2 text-[12px] text-white rounded-full'>{likeCount}</span>
    </div>
  )
}

export default LikeButton;
