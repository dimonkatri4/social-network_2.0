import React from 'react'
import { IPost } from '../../../../types/IPost'
import Post from './Post'

interface Props {
    posts: IPost[];
}

function Posts({ posts }: Props) {
    const postElement = posts.map((post) => <Post key={post.id} post={post} />)
    return <div>{postElement}</div>
}

export default Posts
