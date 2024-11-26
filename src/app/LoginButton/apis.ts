import {createClient} from '@/utils/server/supabase'

export async function getLikeCount(article: string) {
  const supabase = await createClient()
  const {data, error} = await supabase.from('next').select('*').eq('article', article)
  if (error) {
    console.error(error)
    return error
  }
  return data[0].like_count || 0
}
