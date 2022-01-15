import { FunctionComponent } from 'react'
import { Post } from 'types/post'
import Grid from 'components/commons/Grid/Grid'
import PostItem from './PostItem'

interface Props {
    posts: Post[]
}

const Posts: FunctionComponent<Props> = (props) => {
    const renderPost = (post: Post, index: number) => (
        <PostItem key={`PostItem-${index}`} post={post} />
    )
    return <Grid>{props.posts && props.posts.map(renderPost)}</Grid>
}

export default Posts
