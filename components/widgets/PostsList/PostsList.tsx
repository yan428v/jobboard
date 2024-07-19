'use client';

import { JobPostData } from '@/lib/types/types';
import { useEffect } from 'react';
import Post from '../Post/Post';
import styles from './PostsList.module.scss';

const PostsList = ({ tenPosts } :{tenPosts:JobPostData[]}) => {
    useEffect(() => {

    }, [tenPosts]);
    return (
        <div className={styles.postsList}>
            {tenPosts.map((post: JobPostData) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostsList;
