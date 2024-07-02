import React from 'react';

import styles from './PostsList.module.scss';
import Post from '../Post/Post';

const PostsList = () => (
    <div className={styles.postsList}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
);

export default PostsList;
