import { FunctionComponent } from 'react'
import Link from 'next/link'
import { Post } from 'types/post'

interface Props {
  posts: Post[]
}

const Posts: FunctionComponent<Props> = (props) => {
  const renderPost = (post: Post, index: number) => {
    return (
      <Link key={`post-${index}`} href={`/posts/${post.slug}`} passHref={true}>
        <a>
          {post.title} : {new Date(post.date).toDateString()}
        </a>
      </Link>
    )
  }
  return <>{props.posts && props.posts.map(renderPost)}</>
}

export default Posts
