import { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from 'types/post'
import styles from './PostItem.module.scss'

interface Props {
    post: Post
}

const PostItem: FunctionComponent<Props> = (props) => {
    const { post } = props
    return (
        <Link href={`/posts/${post.slug}`} passHref={true}>
            <div className={styles.container}>
                <div className={styles.thumbnail}>
                    <Image
                        alt="Preview Image from https://unsplash.com/@joshrh19"
                        src={post.coverImage}
                        layout="fill"
                        priority
                    />
                </div>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>{post.title}</span>
                    <span className={styles.publishDate}>
                        {new Date(post.date).toDateString()}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default PostItem
