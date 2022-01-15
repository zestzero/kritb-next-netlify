import { FunctionComponent } from 'react'
import Link from 'next/link'
import { Post } from 'types/post'
import styles from './PostItem.module.scss'

interface Props {
    post: Post
    index: number
}

const PostItem: FunctionComponent<Props> = (props) => {
    const { post, index } = props
    return (
        <div className={styles.container}>
            <Link
                key={`post-${index}`}
                href={`/posts/${post.slug}`}
                passHref={true}
            >
                <a>
                    {post.title} : {new Date(post.date).toDateString()}
                </a>
            </Link>
        </div>
    )
}

export default PostItem
