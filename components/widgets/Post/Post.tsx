import React from 'react';
import { JobPostData } from '@/lib/types/types';
import styles from './Post.module.scss';

interface PostProps {
    post: JobPostData;
}
const Post = ({ post }:PostProps) => {
    console.log('==========================');
    console.log(post);
    console.log(post.creationDate);

    // Преобразуем ISO строку в объект Date
    const date = new Date(post.creationDate);

    const formattedDate = date.toLocaleString('en-EN', { // ru-RU
        // year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        // second: 'numeric',
    });

    return (
        <div className={styles.postWrapper}>
            <div className={styles.postHeader}>0</div>
            <div className={styles.postCard}>
                <h2 className={styles.postTitle}>{post.jobTitle}</h2>
                <p className={styles.postDiscription}>{post.jobDescription}</p>
                {/* TODO category.map те что активны */}
                <div className={styles.postCategories}>
                    <p className={styles.postCategory}>{post.jobCategory}</p>
                </div>
                <div className={styles.phoneNumber}>{post.phoneNumber}</div>
                <div className={styles.telegramNumber}>{post.telegramNumber}</div>
                <div className={styles.whatsappNumber}>{post.whatsappNumber}</div>
                <div>{formattedDate}</div>
            </div>
            <div className={styles.separator} />
        </div>
    );
};

export default Post;
