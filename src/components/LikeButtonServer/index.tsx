import {getLikeCount} from './apis'
import LikeButton from './LikeButton'

async function Index({ article = 'helox' }) {
  const res = await getLikeCount(article)

  return (
    <LikeButton article={article} like={res} />
  )
}

export default Index;
