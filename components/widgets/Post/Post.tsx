import React from 'react';
import styles from './Post.module.scss';

const Post = () => {
    return (
        <div className={styles.postWrapper}>
            <div className={styles.postCard}>
                <h2 className={styles.postTitle}>Заголовок</h2>
                <p className={styles.postDiscription}>Огромное описание поста</p>
                {/* TODO category.map те что активны */}
                <div className={styles.postCategories}>
                    <p className={styles.postCategory}>категория 1</p>
                    <p className={styles.postCategory}>категория 2</p>
                    <p className={styles.postCategory}>категория 3</p>
                </div>

            </div>
        </div>
    );
};

export default Post;
