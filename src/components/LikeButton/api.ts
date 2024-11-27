import supabase from '@/utils/client/supabase'

const next = supabase.from('next')

export async function getLikeCountByArticle(article: string) {
  const {data, error} = await next.select('*').eq('article', article)
  if (error) {
    console.error('Error get article count: ', error)
    return error
  }
  return data[0].like_count || 0
}

export async function incrementLikeCount(article: string, num: number) {
  const {data: articleLike, error} = await next.select('*').eq('article', article).single()

  // 如果查询出错，且不是因为找不到记录
  if (error && error.code !== 'PGRST116') {
    console.error(error)
    return error
  }

  // 2. 如果有记录，更新 like_count +1
  if (articleLike) {
    const count = articleLike.like_count + num
    const {data, error} = await next.update({like_count: count}).eq('article', article)
    if (error) {
      console.error(error)
      return error
    }
    return {message: '操作成功', like_count: count}
  // 3. 如果没有记录，插入新记录并设置 like_count = 1
  } else {
    const {data, error} = await next.insert({article: article, like_count: num})
    if (error) {
      console.error(error)
      return error
    }
    return {message: '操作成功', like_count: num}
  }
}
